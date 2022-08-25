const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

const PORT = 3003;

app.set("view ingine", "ejs");

createPath = (page) => path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log("Error!") : console.log(`Listening port ${PORT}`);
});

// add middlewar
// app.use((req, res, next) => {
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   next();
// });

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

//add midlwwar
app.use((req, res, next) => {
  console.log("JUST for Test");
  next();
});

//if you want to give accsess to styles or img
// we need to create middlewar
//!IMPORTANT
// app.use(express.static("style"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
  const title = "Contacts";
  const contacts = [
    { name: "YouTube", link: "http://youtube.com" },
    { name: "Twitter", link: "http://github.com" },
    { name: "GitHub", link: "http://twitter.com" },
  ];
  res.render(createPath("contacts"), { contacts, title });
});
app.get("/posts/:id", (req, res) => {
  const title = "Post";
  res.render(createPath("post"), { title });
});
app.get("/posts", (req, res) => {
  const title = "Posts";
  res.render(createPath("posts"), { title });
});

app.get("/add-post", (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
});

//redirect
app.get("/add-post", (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
});

//middlewar
app.use((req, res) => {
  const title = "Error Page";
  res.status(404).render(createPath("error"), { title });
});

// const express = require('express');
// const path = require('path');

// const app = express();

// app.set('view engine', 'ejs');

// const PORT = 3000;

// const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

// app.listen(PORT, (error) => {
//   error ? console.log(error) : console.log(`listening port ${PORT}`);
// });

// app.get('/', (req, res) => {
//   const title = 'Home';
//   res.render(createPath('index'), { title });
// });

// app.get('/contacts', (req, res) => {
//   const title = 'Contacts';
//   const contacts = [
//     { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
//     { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
//     { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
//   ];
//   res.render(createPath('contacts'), { contacts, title });
// });

// app.get('/posts/:id', (req, res) => {
//   const title = 'Post';
//   res.render(createPath('post'), { title });
// });

// app.get('/posts', (req, res) => {
//   const title = 'Posts';
//   res.render(createPath('posts'), { title });
// });

// app.get('/add-post', (req, res) => {
//   const title = 'Add Post';
//   res.render(createPath('add-post'), { title });
// });

// app.use((req, res) => {
//   const title = 'Error Page';
//   res
//     .status(404)
//     .render(createPath('error'), { title });
// });
