//arrays size is flexible i.e if once defined as size=4 but can store >4 elements also.
//on copy create shallow copy i.e same reference point.

//arrays can store different types of elements

const myarray= [0,1,2,33,"hitesh", 5,4,8, true]
// console.log(myarray)
// console.log(myarray[0])
const myarray1= new Array(1,2,3,4)
myarray1.push(6)
myarray1.push(5)
myarray1.pop()
// console.log(myarray1)

//myarray1.unshift(0)  //adds o at the start of the array but time consuming for larger arrays
//console.log(myarray1)
//myarray1.shift() //removes the first element of the arrays
//console.log(myarray1)
//console.log(myarray1.includes(45)) //checks if present
//console.log(myarray1.indexOf(3)) //returns the position of element in the array


const arr= myarray1.join() //converts the array into string
// console.log(arr)
// console.log(typeof arr)

//slice and splice
//console.log("A ", myarray1)

const myn1= myarray1.slice(1,3) //range is excluded but leaves the original array unaffected
// console.log(myn1) //1,2
// console.log("B ", myarray1) //0,1,2,3,4,5

const myn2= myarray1.splice(1,3) //range is included but maipulates the original array
// console.log(myn2) //1,2,3
// console.log("C", myarray1) //1,6 prints the elements left

const heroes= ["thor", "ironman", "spiderman"]
const dc= ["superman", "Flash", "batman"]

// heroes.push(dc) //array ke andar array ban jata h
// console.log(heroes)
// console.log(dc)

const hero1= heroes.concat(dc) //push elements of arr2 into arr1
// console.log(hero1)

const hero2= [...heroes, ...dc] //spread operator where o/p is same as concat but is better way
// console.log(hero2)

const another_array= [1,2,3,[4,5,6], 7, 5,6,[45,[5,52,4,6]]]
//spread array
const real= another_array.flat(Infinity) //returns array with concating all sub arrays as one
// console.log(real)

// console.log(Array.isArray("Hitesh")) //checks if given is array
// console.log(Array.from("Hitesh")) //converts the given variable into array
// console.log(Array.from({name: "hitesh"})) //empty as not cleared by user to what to do


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3)) //creates array from set of elements