// const EventEmitter = require("events");
const Logged = require("./log.js");

const logged = new Logged();

// const emitter = new EventEmitter();

logged.on("some_event", (arg) => {
  const { id, text } = arg;
  console.log(text);
});

logged.log("User log in ");
