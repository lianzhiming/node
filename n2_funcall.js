var  http  =  require('http');
var otherfun=require("./models/otherfuns.js");
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        //fun1(response);
        //otherfun.(response);
        otherfun.fun2(response);
        otherfun['fun2'](response);
        otherfun.fun3(response);//或otherfun['fun3'](response);
        response.end();
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');

function fun1(res){
    console.log("fun1");
    res.write("hello,我是fun1");
}