const net = require("net");
const { IP, PORT, PLAYER } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER}`);
  });
  conn.on("data", (data) => {
    process.stdout.write(data);
  });
  return conn;
};

module.exports = connect;