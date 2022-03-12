const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const { sequelize, connect } = require("./database/sequelize");

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/test/", async (req, res) => {
  let data = await sequelize.query("SELECT * FROM test");
  res.status(200).send(data);
});

//post the comments
app.post("/api/addComment", async (req, res) => {
  //get user data from request object
  const { comment } = req.body;

  //add data to database
  const data = await sequelize.query(
    `INSERT INTO comments (testcomment) VALUES ('${comment}')`
  );

  res.status(200).send(data[0]);
});

//get the comments
app.get("/api/getComment", async (req, res) => {
  const data = await sequelize.query(`SELECT * FROM test`);
  res.status(200).send(data[0]);
});

//this goes after all app calls
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

sequelize.connect;

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
