
// var x // decalration of Variable 

// var y = 30  //You declaraed a variable y and assigning the value i.e. 30 

// console.log(y)
// y = 45   // reassign the value to the variable 

// y = 56

// y = "Raju"

// console.log(y)

//console.log(x) // undefined 

//1. Reassigning the Value 

var stname = "Raju"
stname = "Abhi"

console.log(stname)

let tr1 = "Arun"
tr1 = "Sujith"

console.log(tr1)

const str = "Javascript"  // When u declara a variable with const , it will not allow you to reassign the value 
//str = "Java"

console.log(str)

// Var and Let will allow you to change (reassign ) the value 

// const will not allow you to change (reassign ) the value 

// 2. When Introduced 

// var is there from Intial version  of JS 

// let and const are introduced from es6 version onwards 

//3. Redeclaration 

var studentname = "Sowmya"

var studentname = "Srilath"

console.log(studentname)

let instititename = "Techifynow"

//let instititename = "DBS QA"

console.log(instititename)

const abc = 467

//const abc = 45 

console.log(abc)

// var when dealing varibale 

// var name = value 

//4. Scope 
//where u can access the variable value 

//var - global 

// let and const - blocked scope 




if (2 == 2) {

    const x = 30

    console.log(x)

    if (5 > 4) {

        console.log(x)
    }


}

// console.log(x)


//printmessage()
