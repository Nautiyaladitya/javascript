//  ARITHMETIC Operators 
// let a = 2;
// let b = 9;

// console.log("a+b =", a + b);
// console.log("a-b =", a - b);
// console.log("a/b =", a / b);
// console.log("a%b =", a % b);
// console.log("a**b =", a ** b);

// //  i++ & i-- (increent and decrement operator) known as Unary Operators !!
// // UNARY Operators
// a++;
// console.log(a);

// a--;
// console.log(a);


// // ASSIGNMENT Operators !!
// console.log("Assignment Operators --> ");
// // a =2 and b=9 are already declared above

// a += 5;
// console.log(a);

// a -= 5;
// console.log(a);

// a *= 5;
// console.log(a);

// a /= 5;
// console.log(a);

// a %= 5;
// console.log(a);

// a **= 5;
// console.log(a);


console.log("COMPARRISON OPERATORS --> ");
// COMPARISSION Operators  --> results a boolean value !!
//  using variables above declared here also

//     ||  == equal to operator ||

// let a = 5;
// let b = 5;

// console.log("a==b ", a==b);  // returns boolean value as a result !!

let a = 5; // number data type

let b = "5"; // string data type

console.log("a==b ", a == b); //== equal to operator checks both type of value and return true as a result

// || != not equal to operator ||

let x = 2;
let y = 3;

console.log("x != y", x != y);

//   || === equal to and type operator ||
//   || !== not equal to and type operator ||

let m = 2;
let n = "2";

console.log("m === n", m === n); // return "false" as string and no. data type both are different !!
console.log("m !== n", m !== n);  // return "true" as string and no. data type both are different !!

// || > , < , >= , <= , ? Remaining comparrision operators in daily use ||

//  LOGICAL OPERATORS !!

//  && -> and , || -> or  , ! -> not Logical Operators !

let k = 6;
let l = 5;
//    &&  -> true when both condn. are true
let cond1 = k > l;
let cond2 = k === l;

console.log("cond1 && cond2 : ", cond1 && cond2);

// || -> true when either of 1 condn is true 
let c = 6;
let d= 5;
let con1 = c > d;
let con2 = c === d;

console.log(" cond1 || cond2 :", c > d || c === d);

//  |  ! ->  make true cond false and false to true |

console.log("!(6 < 5)", !(c>d)); // technically false ans., but ! makes it true

