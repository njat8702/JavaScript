// let arr1=[1,2,3];
// let arr2=arr1;  //shallow copy
// console.log('Arr1:',arr1);
// console.log('Arr2:',arr2);
// // modify arr2
// arr2.push(4);
// console.log('Updated Arr2:',arr2);
// console.log('Updated Arr1:',arr1);

// // solution to properly copy arrays
// // 1.using the spread operator
// let arr=['a','b','c'];
// let arr3=[...arr];
// console.log(arr);
// arr3.push('d');
// console.log(arr3);
// console.log(arr);

// // using a for loop
// let arr4=[1,2,3];
// let arr5=[];
// for (let number of arr4){
//     arr5.push(number);
// }
// console.log('ARR4:',arr4);
// console.log('ARR5:',arr5);
// // modify arr5
// arr5.push(4);
// console.log('Updated ARR5:',arr5);
// console.log('Updated ARR4:',arr4);

// // using array.from
// let arr6=[1,2,3];
// let arr7=Array.from(arr6);
// console.log('ARR6:',arr6);
// console.log('ARR7:',arr7);
// // modify arr7
// arr7.push(4);
// console.log('Updated Arr7:',arr7);
// console.log('Updated Arr6:',arr6);

// using concat
let arr8=[1,2,3];
let arr9 =arr8.concat();
console.log('ARR8:',arr8);
console.log('ARR9:',arr9);
// modify arr9
arr9.push(4);
console.log('Updated ARR9:',arr9);
console.log('Updated ARR8:',arr8);