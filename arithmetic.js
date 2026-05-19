const x=12;
const y=3;

// Addition:
console.log(x+y);

// subtraction:
console.log(x-y);

// multiplication:
console.log(x*y);

// division:
console.log(x/y);

// remainder:
console.log(x%y);

// exponentiation:
console.log(x**2);
console.log(y**3);

// adding string and numbers
const a="12";
const b="3";
console.log(a+b);

// Non-Numeric String
const m="apple";
const n="banana";
console.log(m+n);
console.log(m-n);
console.log(m*n);
console.log(m/n);

// task
const userInput="42";
const numberInput=Number(userInput);
if(!isNaN(numberInput)){
    console.log(numberInput+8);
}else{
    console.log(`Invalid input`);
}