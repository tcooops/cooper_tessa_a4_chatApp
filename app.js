const express = require('express');
const path = require('path');

const messenger = require('socket.io')();

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/chat", (req, res) => {
    res.sendFile(path.join(__dirname, "chat.html"));
});

const server = app.listen(port, () => {
    console.log(`app is running on ${port}`);
});

messenger.attach(server); // making sure socket uses the same port by attaching it
messenger.on('connection', (socket) => {
    console.log(`a user has connected: ${socket.id}`);

    socket.emit('connected', {sID: `${socket.id}`, message: 'new connection'});
    // sned the connected user their assigned ID
    // note: sID stands for socket id

    socket.on('chatmessage', function(msg) {
        console.log('msg');
        messenger.emit('message'), { id: socket.id, message: msg }
    });
    
    socket.on('disconnect', () => {
        console.log('a user has disconnected');
    })
});