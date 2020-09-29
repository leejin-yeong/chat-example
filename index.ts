//.ts파일 : 자바스크립트 컴파일용 언어 (타입 스크립트)

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http); //initialize

/*app.get('/',(req, res) => {
    res.send('<h1>Hello world</h1>');//display on webpage
});*/
// '/': route handler. website home.

app.get('/',(req, res) => {
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    /*console.log('a user connected');
    //새로고침 시 terminal에 뜸

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
    */

    socket.on('chat message', (msg)=> {
         console.log('message: ' + msg);
    });
});

http.listen(3000,()=>{
    console.log('listening on *:3000');
});

