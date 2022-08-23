const http = require("http");

const fs = require("fs");
const path = require("path");

const PORT = 3001;

const server = http.createServer((req, res) => {
  console.log("Server requests");

  res.setHeader("Content-Type", "text/html");

  //  for switch pages
  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);
  let basePath = "";

  switch (req.url) {
    case "/":
      basePath = createPath("index");
      req.statusCode = 200;
      break;
    case "/contacts":
      basePath = createPath("contacts");
      req.statusCode = 200;
      break;
    default:
      basePath = createPath("error");
      req.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (error, data) => {
    if (error) {
      console.log("Error!");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

  // for render main page
  // if ((req.url = "/")) {
  //   fs.readFile("./views/index.html", (error, data) => {
  //     if (error) {
  //       console.log(error);
  //       res.end();
  //     } else {
  //       res.write(data);
  //       res.end();
  //     }
  //   });
  // }
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log("Server Error") : console.log("Listening ...");
});
