const http = require('http');

const server = http.createServer((req,res)=>{
//    console.log(res);
//    res.end('hi')

    req.url
   res.writeHead(200, { 'Content-Type': 'application/json' });
//    res.writeHead(200,{'Content-Type':'text/plain'})
   res.end(JSON.stringify({
     data: 'Hello World!'
   }));
//    res.end('hi')
   console.log(req.url);
});

// console.log(server);

server.listen(3000,()=>{
    console.log('listening to port 3000');
})