// creating array
let students=["neha","ashish","nandini","palak"];
console.log(students);

// // adding different data types
// let mixedArray=["neha",42,[1,2,3],{schoolname: "SIES"}];
// console.log(mixedArray);

// // accessing array element
// console.log(students[0]);
// console.log(students[1]);

// // iterating over array
// // 1.using a for loop
// for (let name of students){
//     console.log(name);
// }

// // 2.for-in loop
// for (let index in students){
//     console.log(students[index]);
// }

// // modifying array
// students.push("piyush");
// console.log(students);

// // removing element
// students.pop();   //removes the last element
// console.log(students);

// students.shift();  //removes the first element
// console.log(students);

// students.splice(1,1);  //removes one element at index 1
// console.log(students);

// // array methods
// // 1.map
// let upper= students.map(name=>name.toUpperCase());
// console.log(upper);

// // filter
// let longName=students.filter(name=>name.length>5);
// console.log(longName);

// using reduce
array=[1,2,3,4,5,6];

const helperSum=(acc,curr)=>acc+curr
sum=array.reduce(helperSum,0);

console.log(array);
console.log(sum);

// using some
array=[1,2,3,4,5,6];
const lessthanFourCheck=(element)=>element<4;
const lessthenFour=array.some(lessthanFourCheck)
console.log(array);
if(lessthenFour){
    console.log("At least one element is less than 4")
}else{
    console.log("At least are greater than 4")
}