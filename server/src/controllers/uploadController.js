const multer = require("multer");
const { uploadFile } = require("../utils/storage");

const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const fileUrl = await uploadFile(req.file);
    res.status(200).json({ success: true, fileUrl, message: "File uploaded successfully" });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ success: false, message: "Failed to upload file" });
  }
};

module.exports = {
  upload: upload.single("file"),
  handleFileUpload,
};
