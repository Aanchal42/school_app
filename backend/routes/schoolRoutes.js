const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { addSchool, getSchools } = require("../controllers/schoolController");

// Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "schoolImages/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post("/schools", upload.single("image"), addSchool);
router.get("/schools", getSchools);

module.exports = router;
