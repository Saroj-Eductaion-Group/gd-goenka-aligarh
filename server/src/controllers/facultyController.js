const Faculty = require("../models/Faculty");
const {
  createRecord,
  getRecord,
  deleteRecord,
  updateRecord,
  getSingleRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const { uploadFile } = require("../utils/storage");

const createFaculty = async (req, res) => {
  const { name } = req.body;
  const imageUrl = req.fileUrl; // Using Cloud Storage URL from middleware

  if (!name || !imageUrl) {
    return sendResponse(res, 400, false, "Faculty name and image are required");
  }

  try {
    const recordObj = { name, image: imageUrl };
    const faculty = await createRecord(Faculty, recordObj);

    if (faculty.status) {
      sendResponse(
        res,
        201,
        true,
        "Faculty created successfully",
        faculty.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error.message);
  }
};

const getFaculty = async (req, res) => {
  try {
    let faculty = await getRecord(Faculty);

    if (faculty && faculty.status) {
      sendResponse(res, 200, true, "Data fetched successfully", faculty.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

// const getSingleGallery = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const gallery = await getSingleRecord(Gallery, { _id: id });
//     if (gallery.status) {
//       sendResponse(res, 200, true, "Data fetched successfully", gallery.data);
//     } else {
//       sendResponse(res, 500, false, "Something went wrong");
//     }
//   } catch (error) {
//     console.error(error);
//     sendResponse(res, 500, false, "Internal Server Error", error);
//   }
// };

const deleteFaculty = async (req, res) => {
  const { id } = req.params;

  try {
    const deletingFaculty = await Faculty.findById(id);
    if (!deletingFaculty) {
      return sendResponse(res, 404, false, "Faculty not found");
    }

    const deletedFaculty = await deleteRecord(Faculty, { _id: id });

    if (deletedFaculty.status) {
      sendResponse(
        res,
        200,
        true,
        "Faculty and associated files deleted successfully",
        deletedFaculty.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        deletedFaculty.data
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const updateFaculty = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const facultyToUpdate = await Faculty.findById(id);

    if (!facultyToUpdate) {
      return sendResponse(res, 404, false, "No record found");
    }

    let updatedObj = { name };

    if (req.fileUrl) {
      updatedObj.image = req.fileUrl;
    }

    const updatedFaculty = await updateRecord(Faculty, { _id: id }, updatedObj);

    if (updatedFaculty.status) {
      sendResponse(res, 200, true, "Updated successfully", updatedFaculty.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};



module.exports = {
  createFaculty,
  getFaculty,
  deleteFaculty,
  updateFaculty
};
