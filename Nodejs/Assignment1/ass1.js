var http=require('http');
const port= 8000;
var server=http.createServer((function(request, reponse)

{
    reponse.writeHead(200,{"Content-Type":"text/plain"});
    reponse.end("Hii! Attempt Successful");
}));

server.listen(port);
console.log(`Success, I'm listening from port: ${port}`);