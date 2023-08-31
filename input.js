// Stores the active TCP connection object.
let connection;
const { UP, LEFT, DOWN, RIGHT } = require("./constants");
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write(UP);
  }
  if (key === "a") {
    connection.write(LEFT);
  }
  if (key === 's') {
    connection.write(DOWN);
  }
  if (key === "d") {
    connection.write(RIGHT);
  }
  if (key === "g") {
    connection.write("Say: GG");
  }
  if (key === "h") {
    connection.write("Say: HELLO")
  }
  if (key === "b") {
    connection.write("Say: BYE")
  }
};

module.exports = setupInput;