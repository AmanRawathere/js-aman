// data characterised into two 1.primitive 2.non primitive

// primitive are 7 types: String, Number,Boolean,Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 974453245453465495476976464

// non primitive

// Array, Objects, Functions

const cricketers = ["kohli", "de villiers", "dhoni"];
let myObj = {
    name: "Aman",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3
