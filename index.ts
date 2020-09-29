//.ts파일 : 자바스크립트 컴파일용 언어 (타입 스크립트)

var app = require('express')();
var http = require('http').createServer(app);

/*app.get('/',(req, res) => {
    res.send('<h1>Hello world</h1>');//display on webpage
});*/
// '/': route handler. website home.

http.listen(3000,()=>{
    console.log('listening on *:3000');
});

app.get('/',(req, res) => {
    res.sendFile(__dirname+'/index.html');
});