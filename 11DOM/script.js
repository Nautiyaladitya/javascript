
//        DOM Attributes !!

let div = document.querySelector("div");
console.log(div);

console.log(div.getAttribute("class"));   // to get the attribute (here class) of an element !
          //OR
// let cls = div.getAttribute("class");
// console.log(cls);

let p = document.querySelector("p");
console.log(p);

console.log(p.setAttribute("class","newPara")); // (att.(eg class /id) , value) to set/change the attribute value !
                                                 // changed the classs name from para to newPara

    // DOM STYLES   

 let box = document.querySelector(".box");
 div.style.backgroundColor="purple";   // style -> changing the css dynamically !!

 div.style.fontSize="30px";

 div.innerText="I'm the DIV";

//  div.style.visibility="hidden"; // this prop. hides the visibility of the html element 


