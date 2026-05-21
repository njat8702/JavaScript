const totalMarks=35;
console.log(totalMarks<40 ? "you need to work hard." : "you cleared the exam.")

// nested ternary operators
const score=62;
const grade =score>40 ? 'you need to hard work':
            score>60 ? 'B grade':
            score>75 ? 'A grade':
            score>85 ? 'A+ grade':'Genius';
console.log(grade);
