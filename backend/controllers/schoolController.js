const db = require("../db"); // your mysql connection
const path = require("path");
const fs = require("fs");

const addSchool = (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !address || !city || !state || !contact || !email_id) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const sql =
    "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, city, state, contact, image, email_id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: "School added successfully", id: result.insertId });
    }
  );
};

const getSchools = (req, res) => {
  const sql = "SELECT * FROM schools";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    // Map each school to include full URL for the image
    const schoolsWithFullImage = result.map((school) => ({
      ...school,
      image: school.image
        ? `http://localhost:5000/schoolImages/${school.image}`
        : null,
    }));

    res.json(schoolsWithFullImage);
  });
};


module.exports = { addSchool, getSchools };
