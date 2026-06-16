//better way to use comaprisons is between same data type unless the result is unpredictable.

// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)

// console.log("2">=1)
// console.log("01">2)

// console.log(null>0) //false
// console.log(null===0) //false
// console.log(null>=0) //true 

/*reason for true in case of null is: an equality check == and 
 comparisons < > <= >= works differently
 Comparisons convert null to a number, treating it as 0.
 that is why (3) null>=0 is true and (1) null>0 is false*/



// console.log(undefined==0) //false
// console.log(undefined>0) //false
// console.log(undefined<0) //false

// console.log("2"===2) //false strict comparison, checks value as well as data type
// console.log(2===2) //true