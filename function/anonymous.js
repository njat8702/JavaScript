let greet = function greetMsg(){
    console.log("hello from gfg!");
};
greet();

// calling the named function
let factorial = function fact(n){
    if(n<=1)
        return 1;
    return n*fact(n-1);
}
console.log(factorial(5));

// use cases
// 1.callback
setTimeout(function(){
    console.log("this is a callback function!");
},1000);

//2.Immediately Invoke Function Expression(IIFE)         
(function(){
    console.log("IIFE exceuted immediately!")
})();

// 3.Event handler
document.getElementById("myBtn").addEventListener("click",function(){
    alert("button was clicked");
});