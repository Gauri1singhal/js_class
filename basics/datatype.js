//js is a dynamic typed language
//primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score =100
const scoreValue=100.3

const isLoggedin= false
const outdideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

// console.log(id==anotherId)

const bignum= 23248837564874n
// console.log(typeof(bignum))

//reference
// array, objects, functions
const heroes=["Shaktiman", "Naagraj", "Doga"]
let myobj= {
    name: "hitesh",
    age: 22
}

// const myfunction= function(){
//     console.log("Hello World")
// }

//************ memory******************* */

//stack(primitive), heap(Non-Primitive)

let myname= "Gauri"
let anothername= myname
anothername= "Singhal"
console.log(myname)
console.log(anothername) 

let user1= {
    email: "gaurisinghal@gmai.com",
    upi: "user@paytm"
}
let user2= user1
user2.upi= "user2@paytm"
console.log(user1.upi)
console.log(user2.upi) 