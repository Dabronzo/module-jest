
//first import the function that we want to test.

const addition = require("../calc");

describe("Calculator tests", () =>{
    //possible tests for the addition function
    //1 - if the two parameters passed are numbers
    //2 - if one or two parameters are missng
    //3 - if one or two parameters are strings
    //4 - if it works with floars
    //5 - if works with negative numbers

    describe("Addition test", () =>{
        test("should return 42 out of 20 + 22", () =>{
            expect(addition(20,22)).toBe(42);
        })
        test("should return 57 out of 20 + 37", () =>{
            expect(addition(20,37)).toBe(57);
        })
        test("should return 20.6 of 20 + 0.6", () =>{
            expect(addition(20,0.6)).toBe(20.6);
        })
    })
    describe("Subtraction test", () =>{
        
    })
    describe("Division test", () =>{
        
    })
    describe("Multiply test", () =>{
        
    })
})