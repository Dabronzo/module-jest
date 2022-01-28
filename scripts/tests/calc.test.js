
//first import the function that we want to test.

const addition = require("../calc");

describe("Calculator tests", () =>{
    describe("Addition test", () =>{
        test("should return 42 out of 20 + 22", () =>{
            expect(addition(20,22)).toBe(42);
        })
    })
    describe("Subtraction test", () =>{
        
    })
    describe("Division test", () =>{
        
    })
    describe("Multiply test", () =>{
        
    })
})