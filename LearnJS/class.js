
// // class classname{

// //      //Varibales

// //      //Methods 
// //     //  m1

// //     //  m2

// //     //  m3

// //     //  m4 
// // }

// class calculator {

//     x = "Raju"
//     y= "g"

//     constructor(n1,n2) {

//         console.log(n1+n2)
//     }

//     Multipy(n1,n2) {

//             console.log(n1*n2)
//     }

//     Printname() {

//         console.log("Raju")
//     }


// }


// //Object of the classs / Instance of the class 

// const  cal1 = new calculator(2,8)  // Creation of Object 

// // cal1.add(4,8)

// // cal1.printName()


// // const cal2 = new calculator()

// // console.log(cal2.x)

// // cal2.add(3,8)

// // // constructor 

// // Method 

// // It automatically executed no call it it.


// const cal3 = new calculator(43,87)

// // a  calss can have only 1 constructor 


// class student {

//     x = "abc"
//     y = "xyz"

//     m1() {

//         console.log("This is simple Method 1 ")

//         this.m5()

//         console.log(this.y)
//     }

//     m2() {

//         console.log("This is simple Method 2 ")
//     }

//     m3() {

//         this.m1()
//         console.log("This is simple Method 3 ")

   
//     }

//     m4() {

//         console.log("This is simple Method 4 ")
//     }


//     m5() {

//         console.log("This is simple Method 5 ")
//     }
// }

// const stu1 = new student()

// stu1.m1()

// const stu2 = new student()

// const stu3 = new student()

//========================================

class employee {

    static x = "abc" // Static Variable 
    y = "xyz"   // Not Static variable 

    static m1() {

        console.log("This is simple Method 1  - Static ")
    }

    m2() {

        console.log("This is simple Method 2  - Non static ")

        this.m4()
    }

    static m3() {


        console.log("This is simple Method 3 - Static ")
        this.m1()
        this.m5()

   
    }

    m4() {

        console.log("This is simple Method 4  - non Static ")
    }


    static m5() {

        console.log("This is simple Method 5  - static ")
    }
}


// classname.varibale 
// classname.methodname

// console.log(employee.x)

// console.log(employee.y)

// employee.m3()

// employee.m4()

const emp1 = new employee()
emp1.m2()


employee.m3()

