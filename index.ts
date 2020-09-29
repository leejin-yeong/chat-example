var app = require('express')();
var http = require('http').createServer(app);

app.get('/',(req, res) => {
    res.send('<h1>Hello world</h1>');//display on webpage
});
// '/': route handler. website home.

http.listen(3000,()=>{
    console.log('listening on *:3000');
});