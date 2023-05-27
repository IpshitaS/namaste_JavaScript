
// function Statement / Function Decleration
function a(){
    console.log('a called');
}
a();

// function Expresion 
var b = function (){
    console.log('b called');
}
b();

// diff bet function Statement & function Expresion is hoisting

// Annonymos Function
 /*
 function(){
    console.log("annonymos");
 } */

// Named Function Expression
var c = function xyz(){
    console.log(xyz);
}
c();

//parameter vs argument
var c = function xyz(param1, param2){   //parameter
    console.log(param1 + param2);
}
c(2,3);                         // arguments

// First Class Function
var c = function (param1){  
    console.log(param1);
}
function xyz(){
    console.log(xyz);
}
c(xyz);
// or
var c = function (){ 
    return function xyz(){
        
    }
}
console.log(c());