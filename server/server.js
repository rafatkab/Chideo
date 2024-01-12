const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { log } = require("console");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected ${socket.id}`);

  // socket.on("send message", (data) => {
  //   console.log(data);
  // });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON: http://localhost:${PORT}/`);
});
