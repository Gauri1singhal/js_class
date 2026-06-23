const score=40
// console.log(score)
const balance= new Number(400)
// console.log(balance)
// console.log(typeof balance) //object

// console.log(balance.toString().length) 
// console.log(typeof balance) //object but if we store .tostring in a variable, it will give type as string
// console.log(balance.toFixed(2)) //reduces the floating value to 2 points

const othernum= 23.87647
// console.log(othernum.toPrecision(3))

const hundreds= 10000000
// console.log(hundreds.toLocaleString('en-IN'))

// Number.MAX_VALUE
// Number.MIN_VALUE

//***************Maths**************** */
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.23))
// console.log(Math.ceil(4.23))
// console.log(Math.floor(4.23))
// console.log(Math.sqrt(4.23))
// console.log(Math.max(4.23, 5, 7,87))
// console.log(Math.min(4.23, 5, 7,87))

// console.log(Math.random());//always lie between 0 and 1
// console.log((Math.random()*10) + 1);

const min= 10;
const max=20;
console.log(Math.floor((Math.random()*(max-min +1))) + min)

