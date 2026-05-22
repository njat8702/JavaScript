// includes()
// syntax: array.includes(searchElement, start)
// var A=[1,2,3,4,5];
// a=A.includes(2);
// console.log(a);

// var name=["neha","nandini","niharika","palak"];
// a1=name.includes("nisha");
// console.log(a1);

// sort()
// syntax: arr.sort(compareFunction)
// function func(){
//     var arr=[20,5.2,-120,100,30,0];
//     console.log(arr);
//     console.log(arr.sort());
// }
// func();

function func(){
    var arr=[2,5,8,1,4];
    console.log(arr.sort(function(a,b){
        return a+2*b;
    }));
    console.log(arr);
}
func();