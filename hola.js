var http = require('http'); // variable donde se requiere modulo de node.js llamado http



var servidor = http.createServer(function(solicitud,respuesta){ //en variable se almacena la creacion del servidor,se necesita funcion anonima
  console.log('se muestra aqui en consola'); //informacion que se muestra en terminal
  respuesta.end('para el navegador'); //se finaliza el programa

}).listen(8080); //puerto donde se va a ejecutar el programa
