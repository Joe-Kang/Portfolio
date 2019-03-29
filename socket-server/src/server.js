var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

const port = 4444;

let numUsers = 0;
let messages = [];

console.log("Server is running.");

io.on("connection", socket => {
  addedUser = false;

  socket.on('add user', (username) => {
    addedUser = true;
    socket.username = username;
    ++numUsers;
    let msg = username + ' joined. ';
    if (numUsers === 1) {
      msg += 'There is 1 user online.';
    } else {
      msg += 'There are ' + numUsers + ' users online.';
    }
    console.log(msg);
    socket.emit('new user', {
      log: msg,
      messages: messages
    });
    socket.broadcast.emit('new user', {
      log: msg,
      messages: messages
    });
    messages.push(msg);
  });

  socket.on('disconnect', () => {
    if (addedUser) {
      if (numUsers > 0) {
        --numUsers;
      }
      let msg = socket.username + ' left. ';
      if (numUsers === 1) {
        msg += 'There is 1 user online.';
      } else {
        msg += 'There are ' + numUsers + ' users online';
      }
      console.log(msg);
      socket.emit('new message', msg);
      socket.broadcast.emit('new message', msg);
      messages.push(msg);
    }
  });

  socket.on('new message', msg => {
    let message = socket.username + '|' + getCurrentTime() + ': ' + msg;
    socket.broadcast.emit('new message', message);
    socket.emit('new message', message);
    messages.push(message);
  });

});

function getCurrentTime() {
  const currentTime = new Date();
  let hr = currentTime.getHours();
  const min = String(currentTime.getMinutes()).padStart(2, '0');
  const ampm = hr >= 12 ? 'PM' : 'AM';
  hr = hr % 12;
  return hr + ':' + min + ampm;
}

server.listen(port, () => {
  console.log("Listening at port", port);
});
