/* jshint esversion: 6 */

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http); // initialize a new instance of socket.io
let userCount = 0;

// route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


// listen on the connection event for incoming sockets
io.on('connection', function (socket) {
    userCount++;
    console.log('a user connected');

    io.sockets.emit('userCount', userCount);

    // catching  msg from 'chat-messge' socket
    socket.on('chat-message', msg => {
        console.log(`message: ${msg}`);
        // send msg to 'chat-message' socket
        io.emit('server-message', `message: ${msg}`);
    });

    socket.on('disconnect', function () {
        userCount--;
        io.sockets.emit('userCount', userCount);
    });

    // socket.on('disconnect', function () {
    //     console.log('user disconnected');
    // });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});