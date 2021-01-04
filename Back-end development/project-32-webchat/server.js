const express = require('express');
const path = require('path');
const moment = require('moment');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const chatModel = require('./models/chatModel');

app.use('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

let onlineUsers = [];

io.on('connection', async (socket) => {
  console.log('Conectado');
  io.emit('onlineUsers', onlineUsers);
  let userNickname;

  socket.on('newUser', ({ nickname }) => {
    userNickname = nickname;
    onlineUsers.push({ socketId: socket.id, nickname });
    io.emit('onlineUsers', onlineUsers);
  });

  socket.on('changeNickname', ({ newNickname }) => {
    onlineUsers.map((user) => {
      const userOnline = user;
      if (userOnline.nickname === userNickname) userOnline.nickname = newNickname;
      return null;
    });

    io.emit('onlineUsers', onlineUsers);
  });

  const allMessages = await chatModel.getMessages();
  allMessages.forEach((message) => {
    const msg = `${message.created_on} - ${message.nickname}: ${message.chatMessage}`;
    socket.emit('oldMessages', msg);
  });

  socket.on('message', async (message) => {
    const time = new Date();
    const timestamp = moment(time).format('DD-MM-yyyy HH:mm:ss');
    await chatModel.writeNewMessage(message.chatMessage, message.nickname, timestamp);
    const msg = `${timestamp} - ${message.nickname}: ${message.chatMessage}`;
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Desconectado');

    onlineUsers = onlineUsers.filter(({ socketId }) => socketId !== socket.id);
    io.emit('onlineUsers', onlineUsers);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
