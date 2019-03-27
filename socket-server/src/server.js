const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 4444;

console.log("Running server at port:", port);

io.on("connection", socket => {
  console.log("A user connected");
  console.log(socket);
  socket.on('disconnect', x => {
    console.log("A user disconnected.");
    console.log(x);
  } )
});

http.listen(4444, () => {
  console.log("Listening at port");
});
