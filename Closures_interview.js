function outest(){
    var c=20;
    function outer(b){
    
        function inner(){
            console.log(b, a, c);
        }
        //let a=10;
        return inner;
    }
    return outer;
}
let a=100;
//outer()();
var close = outest()('HelloWorld');
close();


//data hiding & data encapusalition
function counter(){
    var count=0;
    return function incrementCounter(){
        console.log(count++);
    }
}
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();

//sclable ->data hiding & data encapusalition
// mae it counstructor
function CounterFun(){
    var count=0;
    this.incrementCounter = function (){
        console.log(count+=1);
    }
    this.decrementCounter = function (){
        console.log(count-=1);
    }
}
console.log("constrructor");
var counter3 = new CounterFun();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.decrementCounter();
counter3.incrementCounter();


//Garbage collector
function a1(){
    var x=7,y=10;
    function b(){
        console.log(x);
    }
    b();
}
a1();