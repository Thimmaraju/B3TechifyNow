


// function add(num1, num2){

//     console.log(num1+num2)
// }


// function substract(num1, num2){

//     console.log(num1-num2)
// }

// function multiply(num1, num2){

//     console.log(num1*num2)
// }

// function devide(num1, num2){

//     console.log(num1/num2)
// }

// function calculator(x, y, callback ){

//     console.log(x)
//     console.log(y)
//     callback(x,y)
// }

// calculator(23,67, add)

// calculator(23,67, substract)

// // callback means functions as argument to another function 

// // Anonymmous function exmple 



function PrintGeetMessage(callback) {

    callback();
}


PrintGeetMessage(function (){

    console.log("Hey Hi Sujith")
})

// PrintGeetMessage( function (){
     
       
//       console.log("Hey Hi Raju" )
//  })


// Higher Order Function - function will accepts another function(callback) as arugument 
// Closure Function - A Callback is also called as closure function when it accessing data from higher order function  

//to Make Execute Statements in Asynchronous Manner 

// Using callback , Promises 

//Synchronous Means Exccute Statements sequential manner 
//JS is Synchronous

// console.log("Raju")
// console.log("Arun")
// console.log("Sujith")

//Raju 
//Sujith 
//Arun


// console.log("Raju")

// setTimeout( function () {

//     console.log("Arun")
// }, 3000)

// console.log("Sujith")

//Callback hell 


// function ( callback(callback (callback)))){


// }




function step1(value, callback) {
    callback(value + 10, false);
}

function step2(value, callback) {
    callback(value + 10, false);
}

function step3(value, callback) {
    callback(value + 10, false);  
}
                    //20      false 
step1(10, function (result1, boolvalue) {
    if (!boolvalue) {

                                  //30     false 
        step2(result1, function (result2, boolvalue) {
            if (!boolvalue) {

                                          //40     false 
                step3(result2, function (result3, boolvalue) {
                    if (!boolvalue) {
                        console.log("Result: " + result3);
                    }
                })
            }
        })
    }
});

