const name="Gauri"
const repoCount= 50
//console.log(name+repoCount+"Value")/ /bad practice


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //interpolation

const gamenew= new String(`Gauri`)
// console.log(typeof gamenew)
// console.log(gamenew[0])
// console.log(gamenew.__proto__)
// console.log(gamenew.length)
// console.log(gamenew.toUpperCase())
// console.log(gamenew.charAt(1))
// console.log(gamenew.indexOf('i'))

const newstring= gamenew.substring(0,4) //4 index not included
// console.log(newstring)

const anotherstring= gamenew.slice(-8,4)
// console.log(anotherstring)
//for negatuve value in slice the o/p depends on the length of string
//if len<8 it treats 5-8=-3=>0 as 0,4
//if len==8 then again 0,4
//if len>8 n-8,4

const newstring1= "   hitesh    "
// console.log(newstring1)
// console.log(newstring1.trim())
//there is trim-start and trim-end also

const url= "https://gauri.com/gauri%20singhal"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('gauri'))
// console.log(url.includes('sundar'))

const newstring2= "gauriiw-cjbc-ebfej"
const temp=newstring2.split('-')
console.log(typeof newstring2)  //string
console.log(temp)
console.log(typeof temp) //objects