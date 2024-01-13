// const port = 3001;

// const io = require("socket.io")(3001, {
//   cors: {
//     origin: ["http://localhost:3000"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(socket.id);
// });

const port = 3001;
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (message) => {
    socket.broadcast.emit("recieve-message", message);
  });
});

server.listen(port, () => {
  console.log(`PORT ${port} IS RUNNING`);
});
