var http = require('http');
var optfile = require('./models/optfile');
http.createServer(function(request,response){
    //response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    response.writeHead(200,  {'Content-Type':'image/jpeg'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        optfile.readImg('./imgs/pig.jpg',response);
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');