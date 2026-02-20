

// 1. Arthemetic Operators 

const { tr } = require("@faker-js/faker")

  
// +
// -
// *
// /
// %  - will remainder of 2 operands 

// 5/4 = 1

// 13/4 =1

// 14/4  =2

// 15/4 = 3
// ++ Increment 
// -- decrement 
// **

console.log(15%4)

x = 5
x++  // x =x+1
x++ 
console.log(x)

y = 23
y-- // y=y-1 
y--
console.log(y)

//** 

// 2^4
// 2*2*2*2 = 16

console.log(3**10)


//Coersion 

//+  will also act as concatination operator 

console.log("Raju" + "G" +"Blr")

console.log(2+"2")  // "22" 

console.log(23 + undefined) // NaN

//+ number converted to string 

//- , * , /, % string to number 

console.log(20-"Raju")  // NaN (not a number )

console.log(20 * "3")
// Type conversion 

// 300 tests 

// 2200

//totalprice = vehicleprice (API)+ Deliveryprice  (API)

// vehiclePrice = 22300
// Deliveryfee = ""

// totalprice = vehiclePrice +Deliveryfee

// console.log(totalprice)

// 2. Logical Operators

//   AND 
//   OR 
//   NOT 

// AND 

// x  y  result 

// T  T   T
// T  F   F
// F  T   F
// F  F   F

//&&

console.log(true && true)

//visibilitystatus = await page.locator(xpath).isVisible()

// OR 

// x  y  result 

// T  T   T
// T  F   T
// F  T   T
// F  F   F

// ||

console.log(false || false)

// NOT 

// x   result 

// T   F
// F   T 

// !

console.log(!true)


// marks = 34

// if marks >90 and <=100  - A+ 

// if marks >70 and <= 90 - A

// if marks >60 and <=70  - First class 

// if marks >35 and <= 60 pass

let marks = 34;

if (marks > 90 && marks <= 100) {
    console.log("Grade: A+");
} 
else if (marks > 70 && marks <= 90) {
    console.log("Grade: A");
} 
else if (marks > 60 && marks <= 70) {
    console.log("Grade: First Class");
} 
else if (marks > 35 && marks <= 60) {
    console.log("Grade: Pass");
} 
else {
    console.log("Fail");
}

// 3. Comparision operators 

// true or false 

// = comparision purpose //  for assignment 

//x = 5

// == 
// ===

console.log(2 == "2") // true 

// ==  / loose equal  - comapre 2 values only but not datatypes
// === / strict equal - comapre 2 values and  also datatypes 

console.log(2 === "2")

// >
// <
// >=
// <=
// !=

console.log(5>=5)

console.log(2 != 2 )


// 4. Assignment Operators 

//= 

// +=
// -=
// *=
// /=
// %=

x = 20

x*=5 // x = x*5

console.log(x)

// 5. ternary / Conditional Operators

value1 = "Sujith"

value2 = "Mahesh"

// condition - true /false 

//condition ? x : y

student = 2==="2" ? value1 : value2

console.log(student)

status1 = "Inprogress"

status2 = "Sold"

paymentdone = false 

vehiclestatus = paymentdone ? status2 : status1

console.log(vehiclestatus)

console.log(3+4+5+"6"+5+7) // 12657

// Conditional statements 

// Loops 
