

// 🔹 What is a Callback Function?

// A callback function is a function that is passed as an argument to another function 
// and is executed later, usually after some operation is completed.

//Basic Example 

function sayBye() {
    console.log("Goodbye!");
}


function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Raju", sayBye);

// Callback with Anonymous function 

function processUserInput(callback) {
    let name = "Raju";
    callback(name);
}

processUserInput(function(name) {
    console.log("Welcome " + name);
});

//Call backs for Asynchronous execution

console.log("Start");

setTimeout(function() {
    console.log("Inside Timeout");
}, 2000);

console.log("End");


// Why Callbacks Are Important?

// Used in asynchronous programming

//Callback Hell

function step1(value, callback) {
    callback(value + 10, false);
}

function step2(value, callback) {
    callback(value + 10, false);
}

function step3(value, callback) {
    callback(value + 10, false);  
}

step1(10, function (result1, boolvalue) {
    if (!boolvalue) {
        step2(result1, function (result2, boolvalue) {
            if (!boolvalue) {
                step3(result2, function (result3, boolvalue) {
                    if (!boolvalue) {
                        console.log("Results " + result3);
                    }
                })
            }
        })
    }
});