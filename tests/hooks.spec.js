import { test, expect } from '@playwright/test';
import { fail } from 'node:assert';


test.beforeAll( ()=>{

    console.log(" this will run once - before all tests")
})
test.afterEach(()=>{

    console.log("This Should Print After Each test")
})

test.afterAll( ()=>{

    console.log(" this will run once - After all tests")
})

test.beforeEach(()=>{

    console.log("This Should Print Bafore Each test")
})

test.describe("test case group 1", () => {

    test("Test case 1", () => {

      console.log("Test case 1 ")

    })

    test("Test case 2", () => {

        console.log("Test case 2 ")
    })


    test("Test case 3", () => {

        console.log("Test case 3 ")
    })


    test("Test case 4", () => {

        console.log("Test case 4 ")

    })

    test("Test case 5", () => {

        console.log("Test case 5 ")

    })

})
