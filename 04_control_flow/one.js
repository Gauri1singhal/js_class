//if statement
// if(condition==true){
// code is executed
// }

//<,>,<=,>=,==(checks just the value),!=,===(checks the value and even the type of variable)
// 2<=2 true
// 3!=2 true
// 2==="2" false

//comparison operators- && || == !=

// const balance=1000
// if(balance<500){
//     console.log("<500")
// }
// else if(balance>500 && balance<700){
//     console.log("500-700")
// }
// else{
//     console.log("balance>700")
// }


// const userLoggedIn=true
// const debitCard=true
// const loggedInFromGoogle= false
// const loggedInFromEmail= true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buys course")
// }

// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("User logged in")
// }


//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3;
// switch(month){
//     case 1: console.log("January");
//     break;
//     case 2: console.log("february");
//     break;
//     case 3: console.log("march");
//     break;
//     case 4: console.log("april");
//     break;
//     case 5: console.log("may");
//     break;
//     case 6: console.log("june");
//     break;
//     case 7: console.log("july");
//     break;
//     case 8: console.log("august");
//     break;
//     case 9: console.log("september");
//     break;
//     case 10: console.log("october");
//     break;
//     case 11: console.log("november");
//     break;
//     case 12: console.log("december");
//     break;
//     default: console.log("not appropriate- out of bound")
// }

// const username="hitesh@gmail.com"
// if(username){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont have user email")
// }

//falsy value
//false, 0, -0, BignInt 0n, null, "", undefined, NaN

//truthsy value
//true, int , char, string,"0", 'false', " ", [], {}, function(){}

// const emptyobj= {}
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty")
// }

 //Nullish coalescing operator (??): null and undefined
 //this is a kind of fallback that in some case where a variable if gets not value from a method or function so it is defined as null or undefined

//  let val1;
//  val1= 5??10
// val1= null??10      //in place of 10 some funciton will be there
//  val1= undefined?? 15
// val1= null?? 10?? 20
//  console.log(val1)

//ternary operator
// condition? true:false

// const price=100
// price>80 ? console.log("Yes"): console.log("No")
// console.log(price)
