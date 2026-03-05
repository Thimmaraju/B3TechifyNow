
// p = Promise.resolve({firstname: "Raju", lastname: "G"})

// //console.log(p) //Object

// //p.then(obj => console.log(obj.lastname))

// p1 = Promise.reject("Sujith")


// p1.catch(name => console.log(name))


// p3 = new Promise((resolve, reject) => {

//     let x = 5

//     if (x == 2) {

//         resolve("Sowmya")
//     }
//     else {

//          reject("Srilatha")
//     }
// })

// p3.then(name => console.log(name))
//   .catch(name => console.log(name))


// console.log("Raju");

// function printArun() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Arun");
//             resolve();
//         }, 3000);
//     });
// }

// printArun();

// console.log("Sujith");


// function step1(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);
//         }
//     });
// }

// function step2(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);
//         }
//     });
// }

// function step3(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);
//         }
//     });
// }

// // // Usage:
// step1(10, false)
//     .then((result1) => step2(result1, false))
//     .then((result2) => step3(result2, false))
//     .then((result3) => console.log(result3))
//     .catch((error) => console.log(error));



// // function step1(value, error) {
// //     return new Promise((resolve, reject) => {
// //         if (error) {
// //             reject('Something went wrong');
// //         } else {
// //             resolve(value + 10);
// //         }
// //     });
// // }


// //console.log(step1(10, false)) //Promise { 20 }

// step1(10, false).then(num => console.log(num))


//Async await 

// async function add(num1, num2){

//     return num1+num2
// }

// //console.log(add(3,7))


// async function substract(num1, num2){

//     return num1-num2
// }


//substract(25 ,37).then(num => console.log(num))

//async will always return promise

// async function run(){

//     let x = await add(3,7)

//     let y = await substract(25 ,37)

//     console.log(x )

//     console.log(y)
// }

// run()


async function step1(value) {
    return value + 10;
}


async function step2(value) {
    return value + 10;
}


async function step3(value) {
    return value + 10;
}



async function total() {

    let result1 = await step1(10);    //20
    let result2 = await step2(result1);  //30
    let result3 = await step3(result2); //40
    console.log("Result: " + result3);

}

 total();


 // other concepts 

 // Sets
 // Maps
 // Regular Expression 

 // 100 % 

 //95 Internal Methods Playwright 
 //5 JS 

 
 // Playwright test Framework 