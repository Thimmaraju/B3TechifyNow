
// Data purpose 

//JSON  vs Objects 

// objectname =  {

//     propertyname : Propertyvalue,
//     propertyname : propertyvalue
// }


const student = {

    firstname: "Raju",
    lastname: "G",
    rollnum: 418,
    place: "Bangalore",
    details: { fathername: "Govindappa", place: "Blr" }
}

// dot Notification
// bracket notation 

console.log(student.details.fathername)

console.log(student['details'].fathername)

student["course"] = "Playwright"


student["dept"] = "ECE"
console.log(student)

console.log(student.course2)  // not throw error but give you undefined 

student['rollnum'] = 416

console.log(student)

delete student.place

console.log(student.place)

console.log(student)

//===========================================================

//data driven testing purpose we can use objects 

const jobtitles = {

    jobtitle1: "SDET 1234",
    jobtitle2: "SDET 1235",
    jobtitle3: "SDET 1236"
}

//for in  - es6 

for (let title in jobtitles) {

    console.log("Loops starts")

    console.log(jobtitles[title])

    console.log("Loops ends")
}


const Employess = {

    em1: { firstname: "Sowmya", lastname: "P" },
    em2: { firstname: "Srilatha", lastname: "abc" },
    em3: { firstname: "Sujith", lastname: "xyz" }

}