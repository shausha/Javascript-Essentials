//console.log(`Hello`);

//window.alert(`This is alert`);

//document.getElementById("mine").textContent=`Hello`;
//document.getElementById("para").textContent=`My name is usha`;
//comment

/*
this is multiline comment */

/* VARIABLE
 - container stores value, it need to be unique

1. declaration  let x;
2. assignment  x=100;
*/
/* EXAMPLE
let x; // declaration
x = 100; // assignment
let y=200; //both declaration and assignment
console.log(x);
console.log(y);
*/

//DATATYPE - "typeof" keyword
/* types:
1. number
2. string- series of character, can contain number and letters
3. boolean = flags in the program, either true / false
*/
/* EXAMPLE
let age= 21; // number
console.log(`You are ${age} years old`);
console.log(typeof age);
let price= 10.19; //number
let cgpa= 9.06; //number
console.log(typeof cgpa);
let firstname="usha"; //string
console.log(`My name is ${firstname}`);
console.log(typeof firstname);
let email= "ushajawahar23@gmail.com"; //string
let online= true; // boolean
console.log(`Bro is online: ${online}`);
console.log(typeof online);
*/

/*
let fullname= "Usha Jawahar Lal"
let age= 21;
let student=true;

document.getElementById("p1").textContent = `My name is ${fullname}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `Am I student? ${student}`;
*/

// OPERATOR - 
/*
1. Operands - values , variables, etc...
2. operator - + - * /
Example: 11 = x+5;
*/

let student= 60;

student= student+1;
student= student-1;
student= student*2;
student= student/2;
student= student**2;
student= student**3;
let extrastudent= student % 7 ;
console.log(student);
console.log(extrastudent);