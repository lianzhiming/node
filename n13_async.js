var async = require('async');
/*
function oneFun(){
    console.log('oneFun');
}
function twoFun(){
    console.log('oneFun执行完毕');
}
oneFun();
twoFun();
console.log('主进程执行完毕');*/


/*function oneFun(){
 /!* setTimeout(function(){

 },1000);*!/
 ii=0;
 setInterval(function(){
 console.log("aaa"+new Date());
 ii++;
 if(ii==3){
 clearInterval(this);
 }
 },1000);
 console.log('oneFun');
 }
 function twoFun(){
 jj=0;
 setInterval(function(){
 console.log("bbb"+new Date());
 jj++;
 if(jj==3){
 clearInterval(this);
 }
 },1000);
 console.log('oneFun执行完毕');
 }
 oneFun();
 twoFun();
 console.log('主进程执行完毕');*/

/*//串行无关联异步
function exec(){
    async.series({
        one:function(done){
            ii=0;
            setInterval(function(){
                console.log("aaa"+new Date());
                ii++;
                if(ii==3){
                    clearInterval(this);
                    done('11111','one完毕');
                }
            },1000);
        },
        two:function(done){
            jj=0;
            setInterval(function(){
                console.log("bbb"+new Date());
                jj++;
                if(jj==3){
                    clearInterval(this);
                    done(null,'two完毕');
                }
            },1000);
        }
    },function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
exec();
console.log('主进程执行完毕');*/

/*
//并行无关联异步
function exec(){
    async.parallel({
        one:function(done){
            ii=0;
            setInterval(function(){
                console.log("aaa"+new Date());
                ii++;
                if(ii==3){
                    clearInterval(this);
                    done(null,'one完毕');
                }
            },1000);
        },
        two:function(done){
            jj=0;
            setInterval(function(){
                console.log("bbb"+new Date());
                jj++;
                if(jj==3){
                    clearInterval(this);
                    done(null,'two完毕');
                }
            },1000);
        }
    },function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
exec();
console.log('主进程执行完毕');*/

//串行有关联异步
function exec(){
    async.waterfall([
        function(done){
            ii=0;
            setInterval(function(){
                console.log("aaa"+new Date());
                ii++;
                if(ii==3){
                    clearInterval(this);
                    done(null,'one完毕');
                }
            },1000);
        },
        function(preValue,done){
            jj=0;
            setInterval(function(){
                console.log(preValue+"="+new Date());
                jj++;
                if(jj==3){
                    clearInterval(this);
                    done(null,preValue+',two完毕');
                }
            },1000);
        }
    ],function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
exec();
console.log('主进程执行完毕');


