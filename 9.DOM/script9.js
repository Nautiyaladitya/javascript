// alert("hello");

console.log("hello");        

// document.getElementById("first");  // it will return the value of head

let first = document.getElementById("first");
console.log(first);  

console.dir(first); // bcz its an obj. so do dir!



let values = document.getElementsByClassName("hero");
console.dir(values);

let pgf = document.getElementsByTagName("p");
console.dir(pgf);

let elements = document.querySelector("#hero"); // #Id || .Class || Tag --> can select everything ! but only 1st element
console.dir(hero);

let allelements = document.querySelectorAll("p"); // #Id || .Class || Tag --> can select everything ! all the nodes!!
console.dir(p);


