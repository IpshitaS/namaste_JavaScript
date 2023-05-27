//*** Closures  ***
function f(){
    var m=9;
    function g(){
        console.log("Closures",m);
    }
    g();
}
f();   //**closures** -> function with lexical scope


//OR
function f2(){
    var m=9;
    function g2(){
        console.log("Closures",m);
    }
    m=7;       //value change
    g2();
}
f2();

//OR
function f1(){
    var m1=10;
    function g1(){
        var n1=100;
        function h1(){
            console.log("Closures",m1,n1);
        }
        h1();
    }
    n1=200;      //value not change--> closer store the reference of variable
    return g1;
}
var e1 = f1();
console.log(e1);
f1()(); //outest-->outer-->inner function   ()()

//***  setTimeout() ***
function fun(){
    var x= 1;
    setTimeout( function(){
        console.log(x);
    },1000);
    console.log("setTimeout()");
}
fun();

//loop for settimeout
/*function fun1(){
    for(var i=1;i<6;i++){
    setTimeout( function(){
            console.log(i);
        },i*1000);
    }
}
fun1();  */   
//o/p 6 in 1sec,
//    6 in 2sec,
//    ...
//    6 in 5sec

//1solution use let
function fun1(){
    for(let j=1;j<6;j++){  //let reference closeer
    setTimeout( function(){
            console.log(j);
        },j*1000);
    }
}
fun1();

//2solution use let
function fun2(){
    for(var i=6;i<11;i++){   //var reference closeer
    function close(x){
        setTimeout( function(){
            console.log(x);
        },x*1000);
    }
    close(i);
    }
}
fun2();
