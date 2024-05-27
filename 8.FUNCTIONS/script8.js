function aadi(){     // function definition !!

    console.log("hello AADI");
    console.log("hello MAX");
    console.log("hello DIYU");

}
aadi();   //----> function call !!

// -------------------------------------------------------------------------------------------------------------------

function master(msg){  // parameter / -> input

    console.log(msg); //     console.log(msg * 2); //  gives NAN --> not a number as output


}
master("I love js");  // arguement 


// ---------------------------------------------------------------------------------------------------------------------

//  sum of two numbers !

function myfunction(x,y){

    console.log(x+y);
}
myfunction(10,20);   

// ----------------------------------------------------------------------------------------------------------------------
//  sum

function sum(x,y){
    s=x+y;
    return s;

}
let val = sum(3,4);

console.log(val);

// -----------------------------------------------------------------------------------------------------------------------
// INTRO TO MODERN JS !

// Arrow Functions

const arrowfunction =(a,b) =>{
    console.log(a+b);

};
arrowfunction(2,3);

// --------------------------------------------------------

//  create a function that takes  a string as an arguement  and return the no. of vowels in string ?

function countvowels(str){

    let count = 0;
    for(const char of  str){
        if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
        }
    }
    console.log(count);
}

countvowels("my name is aadi");

// ------------------------------------------------------
// above ques using arrow function !

// Arrow functions are a concise way to write JavaScript functions. 
// They were introduced in ES6 and provide a simpler way of writing functions.

ctvowels =(str)=>{  // function keyword is not used here !

    let count = 0;
    for(const char of str){
        if(char === "a"|| char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}
ctvowels("hello java script");

// ----------------------------------------------------------------------------------------

// forEach loop in js

let arr = ["pune","delhi","bombay","calcutta"];

arr.forEach((val)=>{
    console.log(val); // (val,idx,arr) --> in for each we pass 3 parameters but only val can be passed nd mostly used !!

    console.log(val.toUpperCase());
});


// find sq. of each number using forEach loop!!

let num=[1,2,3,4,5,6,7,8,9];

num.forEach((val)=>
{
    console.log(val**2); // or val*val 
});

// -------------------------------------------------------------------------------------

//  MAP funcn in js . 

//map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array. It is likewise for each 

/* The map function in JavaScript is a higher-order function that allows you to iterate 
 over an array and apply a function to each element, creating a new array with the results. 
 It does not change the original array, but instead returns a new array with the modified elements. */

let numbers = [1,2,3,4,5,6];

numbers.map((val)=>{
    console.log(val);
});

let newnumbers= numbers.map((val)=>{
return val;
});
console.log(newnumbers);

// -------------------------------------------------------------------
//  filter()  function / method

/*In JavaScript, the filter() function is used to create a new array with all 
elements that pass a certain condition provided by a callback function. 
This function does not change the original array, but returns a new array 
with only the elements that meet the specified criteria.  */
let digit = [1, 2, 3, 4, 5];

let evendigits = digit.filter((val) =>{
return val%2 == 0;
});


console.log(evendigits); // Output: [2, 4]

// -------------------------------------------------------------------
//  Reduce function perform some operations and reduce the array to  single value.
//  It returns a single value.

let ar = [1,2,3,4,5];
const s = ar.reduce((res,curr)=>{
    return res+curr;
});
console.log(s);
