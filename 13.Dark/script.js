let scrmode = document.querySelector("#scrmode");

// let currmode = "light";
// scrmode.addEventListener("click", ()=>{

//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
       
//     } else {
//         currmode = "light";
//         document.querySelector(".body").style.backgroundColor="white";   
//     }
//     console.log(currmode);
// });


//                     Another method is :- using classes !!

let body = document.querySelector("body"); 
let currmode = "light";
scrmode.addEventListener("click", ()=>{

    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark")           //   toggling
        body.classList.remove("light");
       
    } else {
        currmode = "light";
        body.classList.add("light");      // toggling
        body.classList.remove("dark");
          
    }
    console.log(currmode);
});
