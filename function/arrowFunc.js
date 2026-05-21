// // regular function
// let calcSum =function(x,y){
//     return x+y;
// };
// console.log(calcSum(12,4));

// // arrow function
// let Calcsum=(a,b)=>{
//     return a+b;
// };
// console.log(Calcsum(12,4));

// handling single parameter
// let square = x => x * x;
// console.log(square(5));

// let greet=() => console.log("hello grom GFG!");
// greet();

// // lexical this
// function Person(){
//     this.age=0;
//     setInterval(()=>{
//         this.age++;
//         console.log(this.age);
//     },1000);
// }

let calcu = (x,y)=>{
    if (x>y){
        return x+y;
    }else{
        return x-y;
    }
};
console.log(calcu(31,12));
console.log(calcu(11,12));
