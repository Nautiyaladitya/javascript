


// // sum of 1 to 100 !    // for loop
// // let sum=0;

// // for( let i=1; i<=100; i++){
// //     sum = sum + i;
// // }
// // console.log(sum);




// // sum of 1 to n !   // for loop
// // let n = 100;

// // for(let i=1; i<=n; i++){
// //     sum = sum +i;
// // }

// // console.log(sum);



// //  print 1 to 20    using  while loop
// let i=1;

// while(i<=20){

//     console.log(i);
// i++;    
// }



// do while loop !
// let i = 20;

// do {

//     console.log("aadi");
//     i++;
// } while (i <= 30);  // print aadi 10 times as i is 20 !

// // if we give it value less than 10 the condn gets false 
// // but it will print it once either condn true or false i.e, do while


// print even num. 1 to 100 !

// let num;

// for(num =0; num<=100; num++){
//     if(num%2 ==0){  // for odd (num%2 != 0)
//         console.log("even num are : ", num);
//     }
// }


// guess the number game !!
let gamenum = 55;

let usernum = prompt("Guess the number :");

while(usernum != gamenum){
  
  let usernum = prompt("wrong guess, guess again :");
}

console.log("you guessed Right");


// odd even code !!

let num;

for(num =0; num<=100; num++){
    if(num%2 ==0){  // for odd (num%2 != 0)
        console.log("even num are : ", num);
    }else
    console.log("odd num are :",num);
}
