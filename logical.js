const physics=90;
const maths=95;
const chemistry=88;
const biology=96;

// AND(&&)
// if(physics>85 && maths>85 && chemistry>85){

// OR(||)
if(physics>90 || maths>85 || chemistry>89){

    console.log("you are eligible for engineering.");
}else{
    console.log("you are not eilgible for engineering.");
}

// NOT(!)
const isStudentEligible= false;
if(!isStudentEligible){
    console.log("you are not eligible.");
}else{
    console.log("you are eligible.")
}