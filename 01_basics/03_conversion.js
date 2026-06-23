let score= '33';
// console.log(typeof(score))


score= '33abs'
let valueNumber= Number(score);
// console.log(typeof (valueNumber))
// console.log(valueNumber) //NaN

//score->valueNumber (when we try to convert)
//"33"=>33
//"33abc"=>NaN
//true=>1 false=>0
//null->0
//unefined->NaN
//hitesh->NaN

let isLoggedIn= 'null';
let booleanisLoggedin= Boolean(isLoggedIn)
// console.log(booleanisLoggedin)

//1=>true; 0=>false
//""=>false
//"hitesh"=>true
//null->false
//"null"->true


let num=33
let stringnum= String(num)
// console.log(stringnum)
// console.log(typeof stringnum)

//**********OPERATIONS************

let value= 3;
let negval= -value;
// console.log([value, negval])

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)     //2^3
// console.log(2/2)
// console.log(2%2)

let str1= "hello"
let str2= " hitesh"
let str3= str1+str2
// console.log(str3) //hello hitesh
// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2)   //122
// console.log(1+2+"2")  //32

// console.log(+true) //1
// console.log(+"") //0

let num1, num2, num3
num1= num2= num3= 2+2 //readability is decreased, so dont prefer it
let gamecounter=0;
gamecounter++; //postIncrement
// console.log(gamecounter)

++gamecounter
// console.log(gamecounter)

//postfix a++ which means a= a+1 (so first it gets assigned and then incremented)
// x=3
// y=x++
// console.log(x, y)

//prefix ++a which is a is increased first and then assigned
// y=++x
// console.log(x ,y)


//similarly there is a-- and --a that works with the same logic as addition
// x=3
// y=x-- 
// console.log(x,y)

// y=--x
// console.log(x, y)



