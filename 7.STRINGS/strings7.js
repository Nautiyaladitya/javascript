// strings are Immutable , i.e, cannot be changed
// we can make a copy of original string an dthen manipuate it !




let a = "aadi";
let b = "nautiyal"
console.log("name is :", a);

console.log(typeof a);

console.log(a.length); // length is a property, not a method !

console.log(a.toUpperCase());
// console.log(a.toLowerCase());

console.log(a.slice(1,3)); //ad 
console.log(a.slice(2));  // di --> if not given end idx , it will take till end ! 

console.log(a.replace("a","h")); // hadi 
// we can replaceall also !

console.log(a+b); // concatination using + operator (concat)!

c=a.concat(b); // concatination (concat)!
console.log(c);

console.log(a[2]);

let d = "   Amitbh   ";
let e= d.trim();
// console.log(d); // contains whitespaces !
console.log(e); // removes white space !





