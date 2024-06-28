let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) =>{
    console.log("button was pressed !");

    let a=25;
    let b= 25;
    let c= a+b;
    console.log(c);

    console.log(e.type);                 // event object => define type (  click , mouseover etc..) !
    console.log(e.target);              // event object => define target( eg. <button id= ..... allm details ) of element !
    console.log(e.clientX , e.clientY);   // event object => define cordinates of element !
    


};

let div=document.querySelector("div");
div.onmouseover = () =>{
    console.log("mouse is over the div !");
};

//   If we write another function same as above and handle event again it will override !!

// div.onmouseover = () =>{                
//     console.log("mouse is over the div 2 function !");
// };


//     addEventListner ! -->  we can add multiple event calls on a single event which is better as function gets override after once called !!

let mybtn = document.querySelector("#mybtn");
mybtn.addEventListener("click", ()=>{
 console.log("okay button was pressed !")
});

mybtn.addEventListener("click", ()=>{
 console.log("okay button 2 !")
});

const handler3 = ()=>{
 console.log("okay button 3 !");
};
mybtn.addEventListener("click", handler3);


//     removeEventListner !
mybtn.removeEventListener("click",handler3); // remove the event which is passed as variable !


