
// // {

// //     block of code
// // }

// // if , else if, else  switch

// // {

// //   //block of code

// // }

// //loops  for while do while , for in , for of , foreach 
// //multiple 

// //  function functioname(){

// //     //block of code 
// //  }

// // it will not run unless u call it 
// function printmessage() {

//     console.log("Raju")
//     console.log("Mahesh")
//     console.log("Arun")
// }

// printmessage()

// printmessage()

// printmessage()

// // Avoid the Duplicate code 


// // function greetmessage(name){

// //     console.log("Hey HI "+ name)
// // }


// function add(num1, num2) {

//     console.log(num1)

//     console.log(num2)

//     console.log(num1 - num2)
// }


// add(4, 8)

// add(324, 5464)

// add(34, 87)

// //greetmessage("Raju")

// // function with Params 

// // function without params 

// // greetmessage()

// // add()

// // Default Param 


// function greetmessage(name = "Mahesh") {

//     console.log("Hey HI " + name)
// }


// greetmessage()

// add(4, "Raju")

// add(4, "8")

// // can i have multiple default parms 


// function multiply(num1 = 2, num2 = 5) {

//     console.log(num1)

//     console.log(num2)

//     console.log(num1 * num2)
// }

// multiply(3, 6)

// multiply()

//function with return keyword 


function addsecond(n1, n2){

    return n1+n2
}

console.log(addsecond(3,8))

//lot of utilities 

//i want a function which retrun 10 digits random mobile Number


//fill()

function generateIndianMobileNumber() {
    const firstDigit = Math.floor(Math.random() * 4) + 6; // 6–9
    let remainingDigits = '';

    for (let i = 0; i < 9; i++) {
        remainingDigits += Math.floor(Math.random() * 10);
    }

    return firstDigit + remainingDigits;
}

console.log(generateIndianMobileNumber());


// Arrow functions 

// Arrays 



// function with Params 

// function without params 

// return keyword

// function with Params 

// function without params 

//Anonymous function 

// function (){

//     //body 
// }


// callback functions

// Higer order function 

// Closure functions 


// Arrow functions 
