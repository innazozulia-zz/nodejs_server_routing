const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server requested");

  //  text in client
  //   res.setHeader("Content-Type", "text/html");
  //   res.write('<head><link rel="stylesheet" href="#"></head>');
  //   res.write("<h6>hello world</h6>");
  //   res.write("<p>Inna</p>");

  //JSON

  res.setHeader("Content-Type", "application/json");

  const data = JSON.stringify([
    { name: "Alice", age: 28, position: "fron-end developer" },
    {
      name: "Tom",
      age: 26,
      position: "back end developer",
    },
  ]);
  res.end(data);
});

server.listen(3001, "localhost", (error) => {
  error ? console.log("error") : console.log("listening");
});
