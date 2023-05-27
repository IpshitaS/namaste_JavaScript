setTimeout(function (){
    console.log("timer");
},500);
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})

//  Event Listener
function attachEventListener(){
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("button count", count++);
});
}
attachEventListener();