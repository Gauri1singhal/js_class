//JS is a dynamic typed language
//1. primitive data types- call by value
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score =100
const scoreValue=100.3

const isLoggedin= false
const outdideTemp= null
let userEmail; //undefined

const id=Symbol('123') //return type is also symbol
const anotherId= Symbol('123')

// console.log(id==anotherId) //false although the vlaues are same in the input but the o/p is not same

const bignum= 23248837564874n
// console.log(typeof(bignum))

//2. Non- Primitive or reference data types = call by reference
// array, objects, functions
const heroes=["Shaktiman", "Naagraj", "Doga"]
let myobj= {
    name: "hitesh",
    age: 22
} 

// console.log(typeof(heroes))

// const myfunction= function(){
//     console.log("Hello World")
// }

// console.log(typeof(myfunction))


//************ memory******************* */

//stack(primitive), heap(Non-Primitive)

let myname= "Gauri"
let anothername= myname
anothername= "Singhal"
console.log(myname) //gauri
console.log(anothername)  //singhal

let user1= {
    email: "gaurisinghal@gmai.com",
    upi: "user@paytm"
}
let user2= user1
user2.upi= "user2@paytm"
console.log(user1.upi) //unser2@paytm
console.log(user2.upi) //uner2@paytm