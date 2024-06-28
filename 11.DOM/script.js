
//                            DOM Attributes !!

let div = document.querySelector("div");
console.log(div);

console.log(div.getAttribute("class"));   // to get the attribute (here class) of an element !
//OR
// let cls = div.getAttribute("class");
// console.log(cls);

let p = document.querySelector("p");
console.log(p);

console.log(p.setAttribute("class", "newPara")); // (att.(eg class /id) , value) to set/change the attribute value !
// changed the classs name from para to newPara



//                          DOM STYLES  !! 

let box = document.querySelector(".box");
div.style.backgroundColor = "purple";   // style -> changing the css dynamically !!

div.style.fontSize = "30px";

div.innerText = "I'm the DIV";

//  div.style.visibility="hidden"; // this prop. hides the visibility of the html element 

//                       DOM  Create & Insert Elements !!

let newbtn = document.createElement("button"); // create element !
newbtn.innerText = "click me!";
newbtn.style.backgroundColor = "green";
newbtn.style.color="white";

 document.querySelector("body").prepend(newbtn);

console.log(newbtn);

let divbtn = document.querySelector("div");

// divbtn.append(newbtn);        // add element (button) at the end of the node (inside)!!

// divbtn.prepend(newbtn);       // add element (button) at the start of the node (inside)!!

// divbtn.before(newbtn);       // add element (button) at the start of the node (outside)!!

// divbtn.after(newbtn);          // add element (button) at the end of the node (outside)!!

//                      DOM Delete Elements !!


// let btn = document.querySelector("div"); 

// btn.remove();  // remove the element !!


// example --> creating heading in js !!

let Heading = document.createElement("h1");
Heading.innerHTML="<i> I'm Heading!! </i>";
Heading.style.color="red";
Heading.style.fontSize="25px";

document.querySelector("body").prepend(Heading);
