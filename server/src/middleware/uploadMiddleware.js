const multer = require("multer");
const { uploadFile } = require("../utils/storage");

const multerStorage = multer.memoryStorage();

const imageFilter = (req, file, cb) => {
  if (["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image types (jpeg, jpg, png, webp) are allowed!"), false);
  }
};

// Single image upload
const upload = multer({ storage: multerStorage, limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: imageFilter }).single("image");

const processUpload = async (req, res, next) => {
  try {
    if (!req.file) return next();
    req.fileUrl = await uploadFile(req.file);
    next();
  } catch (error) {
    next(error);
  }
};

// Multiple images upload
const uploadMultiple = multer({ storage: multerStorage, limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: imageFilter }).array("images");

const processMultipleUploads = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) return next();
    req.fileUrls = await Promise.all(req.files.map((file) => uploadFile(file)));
    next();
  } catch (error) {
    next(error);
  }
};

// Image + PDF upload
const uploadOneImageAndOnePDF = multer({ storage: multerStorage, limits: { fileSize: 5 * 1024 * 1024 } }).fields([
  { name: "image", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]);

const processImageAndPDF = async (req, res, next) => {
  try {
    if (!req.files) return next();
    const [imageUrl, resumeUrl] = await Promise.all([
      req.files.image ? uploadFile(req.files.image[0]) : Promise.resolve(null),
      req.files.resume ? uploadFile(req.files.resume[0]) : Promise.resolve(null),
    ]);
    req.fileUrls = { imageUrl, resumeUrl };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { upload, processUpload, uploadMultiple, processMultipleUploads, uploadOneImageAndOnePDF, processImageAndPDF };
