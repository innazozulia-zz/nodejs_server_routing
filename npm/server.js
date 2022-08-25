const express = require("express");
const path = require("path");

const app = express();

const PORT = 3002;

createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log("Error!") : console.log(`Listening port ${PORT}`);
});

// render html text
app.get("/", (req, res) => {
  //   res.send("<h1>Hello</h1>");
  res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(createPath("contacts"));
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

//midlewar перехватывает запросы по несуществующему пути и рендерить ошибку
app.use((req, res) => {
  res.status(400).sendFile(createPath("error"));
});
