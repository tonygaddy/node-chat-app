const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage: ', message);
  });

  socket.emit('newMessage', {
    from: 'Server',
    text: 'Hello from server!',
    createdAt: new Date()
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
