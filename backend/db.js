const mysql = require("mysql2");
require("dotenv").config();

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // usually localhost
  user: process.env.DB_USER,       // your mysql username, e.g., root
  password: process.env.DB_PASSWORD, // your mysql password
  database: process.env.DB_NAME,   // your database name, e.g., school_db
});

// Connect
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = db;
