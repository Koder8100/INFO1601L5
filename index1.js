// primitive data types

let num1 = 0.1341 // float
let num2 = 2344 // integer
let num3 = 1.2e+3 // 12000 scientific notation
let num4 = Infinity // really large number
let num5 = 0b1000111 // binary number
let num6 = 0xFFF // hexadecimal number
let num7 = 9007199254740991n //BigInteger


// strings

let str1 ="Not hello world";
let str2 = 'Maybe hello world';
let str3 = `
    I used a backtick
    to do this, template literals are really useful for multi-line strings and string interpolation, which is when you can put variables inside a string without having to concatenate them with the + operator
`;// template literal (backtick above tab key)

console.log(str1, str2, str3);


// task 3

let name = "Superman";
let age = 200; // bro can't be that old

console.log(typeof(name))//string
console.log(typeof(age))//number

// you can reassign vaiables like:

age = "two hundred";

console.log(typeof(age))//string

console.log(`Hello my name is ${name}, I'm ${age} years old`); 
// recommend not to write complex stuff within the tags, easier to manage on the outide


console.log(`I was born in ${2020 - age}`); // outputs supersman's age maybe
// since we changed age to a string, it will output NaN


// Note VAR is used to denote a variable, but 
// it is not recommended to use it because it has some weird scoping rules 
// that can lead to bugs, let and const are the preferred way to declare variables in modern javascript

// AI really auto generating comments for me