let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Hey. This is Andrew'
  // });

  socket.emit('createMessage', {
    from: 'Client',
    text: 'Hello from client!!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage: ', message);
});

// socket.on('newEmail', function (email) {
//   console.log('New Email', email);
// });
