let http = require("http");
let port = 3000;    //7282/tcp
http.createServer( function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end("Hello world");
}).listen(port);

console.log("Running on port %d", port);
