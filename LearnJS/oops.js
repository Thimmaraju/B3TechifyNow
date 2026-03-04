// class student {

//     //v1
//     //v2
//     //m1
//     //m2
// }

// const stu1 = new student()

// OOPs

// 1. Encapsulation 
// 2. Inheritance 
//Multiple Inheritance not Supported by JS 
// 3. Polymorphism 
// 4. Prototype

//---------------------------------
// Not Supported by JS 
// 5. Abstrction 
// 6.  Interfaces 


// Encapsulation 

// Binding the data between the Methods 

// {

//     m1() // Create some Data  // Setter Method 

//     m2()  // It will consuem the data which created m1  // Getter method 
// }


// class employee {


//     employeedetails(empname, empplace, empid){

//         this.employeeName = empname
//         this.employeePlace= empplace
//         this.employeeID = empid

//     }

//     printEmpDetails(){

//         console.log(this.employeeName, this.employeePlace, this.employeeID)
//     }
// }

// const emp1 = new employee()

// emp1.employeedetails("Raju", "Blr", "418")

// emp1.printEmpDetails()


//Inheritance 

// class A {


//     m1() {

//         console.log("This is simple Method 1  ")
//     }

//     m2() {

//         console.log("This is simple Method 2   ")


//     }

//     m3() {


//         console.log("This is simple Method 3  ")

//     }

//     m4() {

//         console.log("This is simple Method 4  - ")
//     }


//     m5() {

//         console.log("This is simple Method 5   ")
//     }
// }

// class B extends A{

//     m6() {

//         console.log("This is simple Method 6 -")
//     }


//     m7() {

//         console.log("This is simple Method 7 ")
//     }


// }


// const obj = new B()

// obj.m1() // PArent 
// obj.m7() //child 


// // Polymorphism 

//    MehtodOverriding 
//    MethodOverLoading 


// class A{

//     add(n1, n2){

//         console.log(n1+n2)
//     }

//     printMessage(){

//         console.log("this is a simple mehtod from Parent")
//     }
// }

// class B extends A{

//     add(n1, n2, n3){

//         console.log(n1+n2+n3)
//     }

//     printMessage(){

//         console.log("this is a simple mehtod from child")
//     }
// }
// const objB = new A()

// // objB.printMessage()  // MethodOverrding 

// // objB.add(4,8,9) // Method Overriding 


// objB.printMessage()

// objB.add(4,7,8)  // Method OverLoading 

//Prototyping 


class A {
   
    x = "Raju"

    y = "Arun"

    m1() {

        console.log("This is simple Method 1  ")
    }

    m2() {

        console.log("This is simple Method 2   ")


    }

    m3() {


        console.log("This is simple Method 3  ")

    }

    m4() {

        console.log("This is simple Method 4  - ")
    }


    m5() {

        console.log("This is simple Method 5   ")
    }
}

A.prototype.z = "Mahesh"

A.prototype.m6 = function (){

    console.log("this method m6")
}

const obj = new A()

console.log(obj.z)

obj.m6()
const obj2 = new A()

console.log(obj2.z)

obj2.m6()

//OOPS closed 


// Callback functions 

// promises 
// Async and await 

