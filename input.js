// Set Up readline-sync
const readlineSync=require('readline-sync');
// Ask for User Input
const userName=readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);

// Convert and use Numeric Input
const userAge=readlineSync.question('May I know your age? ');
// convert the inpur to a number
const userAgeNumber=Number(userAge);

// Check if the conversion was successful
if(!isNaN(userAgeNumber)){
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`you were born in the year ${birthYear}.`);
}else{
    console.log(`please enter a valid number for age.`);
}