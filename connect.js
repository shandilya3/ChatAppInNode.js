const server = require('net').createServer();
let counter = 0;
let sockets = {};
server.on('connection', socket =>{
  socket.id = counter++;
  sockets[socket.id] = socket;
  console.log("cleint is connected");
  socket.write("welcome new client");

  socket.on('data', data =>{
    socket.write(`${socket.id}:`);
    socket.write(data);
  });

  socket.on('end',()=>{
    console.log("client disconnected");
  });
});

server.listen(8000,()=>console.log("server found"));
