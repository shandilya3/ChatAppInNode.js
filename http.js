const server = require('http').createServer();
server.on('request',(req,res)=>{
  res.writeHead(200, {'content-type':'text/plain'});
  res.write('Hello world\n');

  setTimeout(function(){
    res.write("hmm hello world\n");
  }, 1000);

  setTimeout(function(){
    res.write("aha in 2 sec, Hello world\n");
  },2000);
});

server.listen(8000);
