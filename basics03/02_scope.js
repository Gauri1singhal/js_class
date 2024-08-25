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


function one(){
    const username= "hitesh"

    function two(){
        const website= "youtube"
        console.log(username);
    }
    console.log(website)

    two()
}

//one()

if(true){
    const username= "hitesh"
    if(username==="hitesh"){
        const website= " youtube"
       // console.log(username+ website)
    }
    //console.log(website)
}
//console.log(username)

//***********************INTERESTING************************ */

console.log(addone(5))
function addone(val){
    return val+1
}

//console.log(addtwo(5))
//here function call is stored ina avariable, hence it is not accessible before its declaration
//it depends upon the function definition and function pattern
const addtwo= function (num){
    return num+2
}
console.log(addtwo(5))
