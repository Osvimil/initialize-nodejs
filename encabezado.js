var http = require('http');
var fs = require('fs');

http.createServer(function(solicitud,respuesta){
  fs.readFile("./index.html",function(error,html){
    respuesta.writeHead(200,{"Content-Type":"application/html"})
    respuesta.write(JSON.stringify({nombre:"oswaldo",edad:23,escuela:"UPIICSA"}));
    respuesta.end();

  });
}).listen(8080);

// en la terminal typear esto: curl -I localhost:8080
