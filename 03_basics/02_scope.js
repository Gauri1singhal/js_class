let a=39
if(true){
    //local scope
    let a=10
    const b=239
    var c=34
    //console.log(a)
}
//global scope
var c=489
 //console.log(a)
// console.log(b)
//console.log(c)

//let and const is block scope oriented but var has global scope, so avoid var using

/* interview question:
Global scope is different agr hum node terminal pr kaam kr rhe
yaa phir website pr jaakr inspect kr rhe, global scope is not same */

//example of closure : a feature in JavaScript where an inner function 
// retains access to the variables of its outer (enclosing) function, 
// even after the outer function has finished executing
function one(){
    const username= "hitesh"

    function two(){
        const website= "youtube"
        console.log(username);
    }
    console.log(website)

    two()
}

// one()

if(true){
    const username= "hitesh"
    if(username==="hitesh"){
        const website= " youtube"
    //    console.log(username+ website)
    }
    // console.log(website) //out of scope
}
// console.log(username) //out of scope

//***********************INTERESTING************************ */

console.log(addone(5))
function addone(val){
    return val+1
}

// console.log(addtwo(5))
//here function call is stored ina avariable, hence it is not accessible before its declaration
//it depends upon the function definition and function pattern
const addtwo= function (num){
    return num+2
}
console.log(addtwo(5))

//Hoisting: Hoisting is a behavior in JavaScript where variable, function, 
// and class declarations are allocated memory and registered to the top 
// of their scope before the code actually executes.  Mainly it is 
// addtwo() which means it has to be defined first before using
