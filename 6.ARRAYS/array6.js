console.log("<----- ARRAYS ----->"); 

let arr =[1,2,3,4,5,7,8,9,0]

for (let i=0;i<arr.length;i++){
    
    console.log(arr[i]);
}

// console.log(arr); --> if direct put utput command it will give arry nd length 

let a = "aadi";
let b = "nautiyal"
console.log("name is :", a);

console.log(typeof a);

console.log(a.length); // length is a property, not a method !

console.log(a.toUpperCase());
// console.log(a.toLowerCase());

console.log(a.slice(1,3)); // ad 
console.log(a.slice(2));  // di

console.log(a.replace("a","h")); // hadi 
// we can replaceall also !

console.log(a+b); // concatination using + operator (concat)!

c=a.concat(b); // concatination (concat)!
console.log(c);

console.log(a[2]);

let d = "   Amitbh   ";
let e= d.trim();
// console.log(d); // contains whitespaces !
// console.log(e); // removes white space !

// ------------------------------------------------------------------------------------------------------------//


// array methods ---->

let foodItems = ["potato","tomato","carrot","paneer"];

foodItems.push("chips","popcorn"); // push method add element at last !
console.log(foodItems);

foodItems.pop();        // pop method delete element from last !
console.log(foodItems);

console.log(foodItems.toString());  // convert an array to string !!

let marvelHeroes = ["thor","ironMan","spiderMan"];
let dcHeroes = ["batMan","superMan"];

let allHeroes= marvelHeroes.concat(dcHeroes); // concat method join 2 or multiple strings !!
console.log(allHeroes); 

foodItems.unshift("CAKE"); // unshift add element to start , work as push but add at start !!
console.log(foodItems);

foodItems.shift("CAKE"); // shift delete element from start , work as pop but delete at start !!
console.log(foodItems);

sliceItems =foodItems.slice(1,2);  // returns a piece of an array , strt idx , end idx --> end idx not included !!
console.log(sliceItems);

spliceItems= foodItems.splice(1,2,"aadi","nautiyal");  // add , remove , del, replace --> str idx , del count, new value to the no. of counts  !!
console.log(spliceItems);

let rry = [1,2,3,4,5,6,7,8,9];

rry.splice(1,2,555,666);
console.log(rry);