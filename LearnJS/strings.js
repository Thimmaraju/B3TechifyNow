
str = "Raju"

str1 = 'Raju'

str2 = `Raju`


// + conacat 

str3 = str.concat(str2) 

console.log(str3)

//.length 

//how Many chars 

str5 = "   Javascript   "

console.log(str5.length)

str6 = "   Javascript   ".trim()

console.log(str6.length)

// trimStart()

// trimEmd()


str = "This is a simple Sentence".toUpperCase()


str2 = "This Is A Aimple Sentence".toLowerCase()


console.log(str2)


str3 = "Python"

console.log(str3[1])

console.log(str3.charAt(0))

str2 = "This Is A Aimple Sentence".substring(0,4)

console.log(str2)

//strings Immutable 

// Arrays mutable 

// arr = ["Raju", "Sujith"]

// arr[1] = "Arun"

// console.log(arr)

str4 = "King"
str4[0] ="S"

console.log(str4)


str = Number("10")  //10


price1 = Number("₹1,07,990".replace("₹", "").replaceAll(",", ""))

console.log(price1)


price2 = Number("₹1,15,990".replace("₹", "").replaceAll(",", ""))

console.log(price2)

console.log(price1+price2)


str = "Username : Admin"

arr = str.split(" ")


console.log(arr[2])


const jobdescription = "*Automation Testing\n*Manual Testing\n*API testing"

console.log(jobdescription)