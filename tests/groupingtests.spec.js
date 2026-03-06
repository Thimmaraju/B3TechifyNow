
import { test, expect } from '@playwright/test';



test.describe("test case group 1", () => {

    test("Test case 1", () => {

      test.fail()
      console.log("Test case 1 ")

        expect(5).toBe(5)
    })

    test("Test case 2", () => {

        console.log("Test case 2 ")
    })


    test("Test case 3", () => {

        console.log("Test case 3 ")
    })


    test("Test case 4", () => {
    test.fixme()
        console.log("Test case 4 ")

    })

    test("Test case 5", () => {

        console.log("Test case 5 ")

    })

})


test.describe("test case group 2", () => {

    test("Test case 6", () => {

        console.log("Test case 6 ")
    })

    test("Test case 7", () => {

        console.log("Test case 7 ")
    })
})


// Annotations 
//Hooks 

