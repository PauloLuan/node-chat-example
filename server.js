var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function (req, res) {
    var clientPath = path.join(__dirname, 'index.html')
    res.sendFile(clientPath);
});

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        io.emit('message', msg);
    });

    socket.on('personOnline', function (personNickName) {
        var person = { name: personNickName };
        io.emit('personOnline', person);
    });

    socket.on('personOffline', function (personNickName) {
        var person = { name: personNickName };
        io.emit('personOffline', person);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
