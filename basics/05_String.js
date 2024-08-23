const name="Gauri"
const repoCount= 50
//console.log(name+repoCount+"Value")
//bad practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gamenew= new String(`Gauri`)
console.log(gamenew[0])
console.log(gamenew.__proto__)
console.log(gamenew.length)
console.log(gamenew.toUpperCase())
console.log(gamenew.charAt(1))
console.log(gamenew.indexOf('i'))

const newstring= gamenew.substring(0,4)
console.log(newstring)

const anotherstring= gamenew.slice(-8,4)
console.log(anotherstring)

const newstring1= "   hitesh    "
console.log(newstring1)
console.log(newstring1.trim())

const url= "https://gauri.com/gauri%20singhal"
console.log(url.replace('%20', '-'))
console.log(url.includes('gauri'))
console.log(url.includes('sundar'))

const newstring2= "gauriiw-cjbc-ebfej"
console.log(newstring2.split('-'))