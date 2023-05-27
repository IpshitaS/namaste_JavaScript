//hoisting -> call before declearing 
getName();
console.log(a);  //undefined
//console.log(y);  //not define

//function
function getName(){
    console.log("Nameste JS");
}
console.log(getName); //call's function

 

var a=7; //global var
function x(){
    var y=10;
    function z(){
        console.log(y);
    }
    z();
}
x();
console.log(a);         //refer to "global space"(var)
console.log(window.a);  //          "        "
console.log(this.a);    //          "        "
//console.log(y);  //reference Error
console.log(x.y);

//Arrow function
var Name = () => {
    console.log("Nameste JS arrow function");
}
Name();

//sotest program OR empty file
{}

//scope & lexical environment
function f(){
    var m=9;
    g();
    function g(){
        console.log("scope & lexical environment"); 
        console.log(n);  //calling n from local memory
        console.log(m);  //calling n from parent memory
    }
}
var n=15;  //global var-> store in global scope
f();


//***   var  vs  let  vs cont  ***
console.log(v);
var v= 12;
console.log(window.v);
var v= 13;       //redeclare
console.log(v);
var v1;
v1=14;
console.log(v1);

//console.log(l);  // reference error
let l = 12;
console.log(window.l);  //undefine
//let l = 13;          //syntax Error
l=13;
console.log(l);
let l1;
l1=14;
console.log(l1);

//console.log(c);  // reference error 
const c= 12;
console.log(window.l);  //undefine
//const c= 13;          //syntax Error
//c=13;          //type Error -> can't decleare constant variable again
console.log(c);
//const c1;  //SyntaxError: Missing initializer in const
//c1=14;

//*** Block Scope  ***
// let &const are block scape
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
//console.log(b); //ReferenceError: b is not defined
//console.log(c); //ReferenceError: c is not defined

//*** Shadowing  ***
console.log("Shadowing");
var a=100;
let b=200;
{
    var a=10;
    let b=20; 
    console.log(a);
    console.log(b);
}
console.log(a);  // a value 10  -- Shadowing
console.log(b);  //b=200 global value let

var color= ["red","blue"];
console.log(color);

console.log(window.ap);

a=7,b=9;
a=b;
console.log(b);