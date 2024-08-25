function myname(){
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}
//myname()

// function add(num1, num2){
//     console.log(num1+num2)
// }
function add(num1, num2){
    let ans= (num1+num2)
    return ans
}
const num1=3
const num2=75
const res= add(num1, num2)
//console.log(res)

function loginuser(username= "Sam"){
    if(username===undefined){
        console.log("Please enter a username")
        return;
    }
    console.log(`${username} just logged in`)
    return 0;
}

//console.log(loginuser("Gauri"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(2,323,435,23))

const user={
    username: "Hitesh",
    price:199
}
function handeleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
//handeleobject(user)

// handeleobject({
//     username: "Sam",
//     price:184
// })

const mynew = [200,43,46,655]

function returnsecondValue(getarr){
    return getarr[1]
}
// console.log(returnsecondValue(mynew))

// console.log(returnsecondValue([324,345,654,334]))