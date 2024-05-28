//            DOM Properties !!

let first = document.querySelector("#myid"); 
console.dir(first.tagName);    // returns the  tag name of the content !

let second = document.querySelector("div");
console.dir(second.innerText); // returns the inner text of the html tag !

console.dir(second.innerHTML);  // returns the inner html also with text !

console.dir(second.textContent); // returns the content only if style on the element/ tag is set to be hidden -> it makes it visible !

let h1 = document.querySelector("h1");
console.dir(h1);

h1.innerText = h1.innerText + " NAUTIYAL"; // concatination !

let divs = docuent.querySelectorAll(".box");
// console.dir(divs);

// divs[0].innerText = "value 1";
// divs[1].innerText = "value 2";
// divs[2].innerText = "value 3";

let idx =1;
for (div of divs){
        div.innetText = 'new value ${idx}';
        idx++;
    }



