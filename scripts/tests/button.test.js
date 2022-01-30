/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");




//This is a script to detect a chunck of the html in this case we are checking if the button will show the 
//desired content.



//First creating the mock function to check if the the tested function is
//placing the correct thing on the DOM

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//now the describe with the test

describe("DOM tests", () => {
    test("expect p content to change", () =>{
        //we call the function defined on the top with "require"
        buttonClick();
        //we write the expect getting the element by id and checking if the innerHTML will be equal to the text "You Clicked"
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");

    });
    test("expect h1 element to exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});


//In this part we will use a similar process but to load all the html and then we will take individual
//tests to check if they are working properly.
/*
beforeEach(() =>{
    //first we will load th fs system of node.js that allow us to load and read files from the project
    //and we'll store it in a varible called "fs"
    //does not need address cuz is part of node library
    let fs = require("fs");

    //then read the content
    //by default it starts from the root no need address in this case
    let fileContents = fs.readFileSync("index.html", "utf-8");

    //the best way to read it...
    //can be used as a boiler
    document.open();
    document.write(fileContents);
    document.close();
})


//Now we write the describe 

describe("DOM tests", () => {
    //button test in the way that we did above
    test("expect p content to change", () =>{
        //we call the function defined on the top with "require"
        buttonClick();
        //we write the expect getting the element by id and checking if the innerHTML will be equal to the text "You Clicked"
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");

    });
    //test if the h1 exists
    test("expect the element h1 to exist", () =>{
        //here we get all the elemts witht he tag h1. will be an array and the lenght of the array should be 
        //the number of h1 that exists in the index.html DOM
        //since that our page has only one we expect the lenght to be 1
        expect(document.getElementsByTagName("h1").length.toBe(1));
    });
})
*/