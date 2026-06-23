//Immediately Invoked Function Expressions(IIFE)

//named IIFE
(function chai(){
//named IIFE
    console.log(`DB CONNECTED`)
})();

// chai();

//unnamed IIFE
( (name)=>{
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('Hitesh')