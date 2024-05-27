



var a = 1; // using var variable we can re declare and update , a global scope variable,
//   hence we can use any where in code !!
var a = 2;

// console.log(a);

let fullname = "Aditya Nautiyal";

let age = 33;
let totalPrice = 1000;
let itemno = 1.00;
console.log(fullname);
console.log(age);
console.log(totalPrice);
console.log(itemno);

{
    let ad = 5;
    // let a = 20; // throws an error as do not redeclare
    // value can be updated but can't redeclared , block scope variable !


    ad= 20;
    ad= 30
    console.log(a);

}

{
    let a = 10;  // we can declare same variable name in different block and it'll run !

    console.log(a);
}

const student = {
    fullName: "prajapati",
    age: 20,
    cgpa: 9.0,
    isPass: true,


};
console.log(student);

const profile = {  // creating an object which stores it keys and values !!
    username: "adityanautiyal01", // string type

    isFollow: false,  // type boolean
    followers: 123, // type number
    following: 100,
    bio: "  I ama very passionate about coding blaa blaa blaa",

};
console.log(profile);

console.log(profile['bio']);
// using this we can find type of variable or key present in the object