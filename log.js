const EventEmitter = require("events");

class Logged extends EventEmitter {
  log = (msg) => {
    console.log(msg);
    this.emit("some_event", { id: 1, text: "this is event test text!" });
  };
}

module.exports = Logged;
