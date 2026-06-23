function myname(){
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}
// myname()

function add(num1, num2){
    console.log(num1+num2)
}
// add(23,55)
function add(num1, num2){
    let ans= (num1+num2)
    return ans
    console.log("Hitesh")//unreachable area
}
const num1=3
const num2=75
const res= add(num1, num2)
// console.log(res)

function loginuser(username){
    if(username===undefined){
        console.log("Please enter a username")
        return;
    }
    else{
    console.log(`${username} just logged in`)
    return;
    }
}

// loginuser("Gauri")
// console.log(loginuser()) //undefined

//if user wants to never goes into the undefined block then we define username="Sam"
// console.log(loginuser()) //Sam just logged in


//...num1 -> rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(value1, value2,...num1){
    return num1
}
// console.log(calculateCartPrice(2,323,435,23)) //value1=2, value2=323, num=[435,23]

const user={
    username: "Hitesh",
    price:199
}
function handeleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
// handeleobject(user)

// handeleobject({
//     username: "Sam",
//     price:184
// })                        //directly passing the object as a parameter into the function

const mynew = [200,43,46,655]

function returnsecondValue(getarr){
    console.log("Element is: ",getarr[2])
    return getarr.length

}
// console.log(returnsecondValue(mynew))

// console.log(returnsecondValue([324,345,654,334,32]))