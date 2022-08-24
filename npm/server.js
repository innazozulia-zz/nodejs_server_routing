const express = require("express");
const path = require("path");

const app = express();

const PORT = 3002;

createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log("Error!") : console.log(`Listening port ${PORT}`);
});

app.get("/", (req, res) => {
  //   res.send("<h1>Hello</h1>");
  res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(createPath("contacts"));
});

//midlewar перехватывает запросы по несуществующему пути
app.use((req, res) => {
  res.status(400).sendFile(createPath("error"));
});

//redirect
app.get("about-us", (req, res) => []);
