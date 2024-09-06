const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors'); 
const router = require('./router');
const { addUser, removeUser, getUser, usersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors()); 

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  }
});

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { users: usersInRoom(user.room).map(user => user.name) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: user.name, text: message });
      callback();
    } else {
      callback('User not found.');
    }
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { users: usersInRoom(user.room).map(user => user.name) });
    }
  });
});


app.use(router);

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
