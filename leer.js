//lectura de archivo html de forma SINCRONA

/*var http = require('http');
var fs = require('fs');

var html =fs.readFileSync('./index.html');

http.createServer(function(solicitud,respuesta){
  respuesta.write(html);
  respuesta.end();


}).listen(8080);
 */

 //lectura de archivos en forma ASINCRONA
 var http = require('http'); //se requiere modulo http de node.js para iniciar servidor(protocolo de comunicacion)
 var fs = require('fs'); // modulo de node.js que permite leer archvivos

 http.createServer(function(solicitud,respuesta){ //se crea servidor a utilizar
   fs.readFile("./index.html",function(error,html){ //se hace lectura del archivo index.html, funcion anonima recibe 2 paramentros
     if(error){ //si hay error
       console.log(error); //notifica error en la terminal(servidor)
     }else{
       respuesta.write(html); //mandar a mostrar el archivo index.html por medio de la variable html
       respuesta.end(); //se finializa servidor
     }
   });

 }).listen(8080); //puerto de comunicacion entre el servidor y el navegador
