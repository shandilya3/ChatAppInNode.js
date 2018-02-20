var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
  res.sendFile('/Users/happy.shandilya/Documents/serverside/ChatServer/index.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    console.log( io.emit(msg));
    io.emit(msg);
  });
});
   

http.listen(8000, function(){
  console.log("listening on *: 8000");
})