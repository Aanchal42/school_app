const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/schoolImages", express.static("schoolImages"));

app.use("/api", require("./routes/schoolRoutes"));

app.get("/", (req, res) => {
   res.send(`
    <h2>School App Backend</h2>
    <p>API running successfully </p>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
