const myarray= [0,1,2,33,"hitesh", 5,4,8, true]
// console.log(myarray[0])
const myarray1= new Array(1,2,3,4)
myarray1.push(6)
myarray1.push(5)
myarray1.pop()
//console.log(myarray1)

//myarray1.unshift(0)
//console.log(myarray1)
//myarray1.shift()
//console.log(myarray1)
//console.log(myarray1.includes(45))
//console.log(myarray1.indexOf(3))


const arr= myarray1.join()
//console.log(myarray1)
//console.log(typeof arr)

//slice and splice
//console.log("A ", myarray1)

const myn1= myarray1.slice(1,3)
//console.log(myn1)

//console.log("B ", myarray1)

const myn2= myarray1.splice(1,3)
//console.log(myn2)
//console.log(myarray1)

const heroes= ["thor", "ironman"]
const dc= ["superman", "Flash"]

//heroes.push(dc)
//console.log(heroes)
//console.log(dc)

const hero1= heroes.concat(dc)
//console.log(hero1)

const hero2= [...heroes, ...dc]
//console.log(hero2)

const another_array= [1,2,3,[4,5,6], 7, 5,6,[45,[5,52,4,6]]]
//spread array
const real= another_array.flat(Infinity)
//console.log(real)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))