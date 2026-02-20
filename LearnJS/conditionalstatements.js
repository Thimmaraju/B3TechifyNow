

// if(condition){

//    // block of code 
// }


if (false) {

    console.log("Srilatha")

    console.log("Mahesh")

    console.log("Raju")

}

else {

    console.log("Abhi")

    console.log("Arun")

    console.log("Raju")

}

//====================================

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


//true or false 


if (true) {

    console.log("Raju")

}



// dev  - www.dev.xyz.com
// qa  - www.qa.xyz.com
// staging  - www.staging.xyz.com
// uat - www.uat.xyz.com

let envt = "staging"
switch (envt) {
    case "dev": {

        console.log('www.dev.xyz.com')
    }

        break;

    case "qa":

        console.log('www.qa.xyz.com')
        break;

    case "staging":

        console.log('www.staging.xyz.com')
        break;

    case "uat":

        console.log('www.uat.xyz.com')
        break;
    default:

        console.log('No Enviroment Matching')
        break;
}