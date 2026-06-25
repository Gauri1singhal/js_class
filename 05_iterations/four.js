// const coding= ['js', 'ruby', 'java', 'python', 'cpp'];

// const val= coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(val); //.forEach can iterate over an object or array but does not return anything



//Filter

const mynums=[1,2,3,4,5,6,7,8,9,10];

//fliter also takes callback but it returns back some value unlike forEach

// const newNums= mynums.filter( (num) => num>4)
// console.log(newNums)

// const newNums= mynums.filter( (num)=>{
//     return  num>4
// })
// console.log(newNums)

//agr hum scope chalu krte h mtlab ki curly braces ke andar likhte h toh humko phir 'return' likhna hoga alag se but lekin
//lekin agar hum direct likh rhe h jaise upar se upar toh return likhne ki jarurat nhi h

//console.log(newNums);


// const newNums=[];

// mynums.forEach( (item)=>{
//     if(item>4) newNums.push(item);
// })

// console.log(newNums)


//MAP

const myNum= [1,2,3,4,5,6,7,8,9,10]

// const nuwNums= myNum.map( (num)=> {return num+10})
// console.log(nuwNums)

// const newNums= myNum
//                     .map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>40);
// console.log(newNums); 
//this is called as chaining



//REDUCE

const myNums=[1,2,3];

// let initialVal=0
// const newNums= myNums.reduce( function(acc, curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc+curr
// } , initialVal);

// console.log(newNums);

const total= myNums.reduce( (acc, curr)=> ( acc+curr ), 0)
// console.log(total);


const shoppingCart= [
    {
        itemName:'js_course',
        price:2999
    },
    {
        itemName:'python',
        price:999
    },
    {
        itemName:'mobile dev',
        price:5299
    },
    {
        itemName:'data science',
        price:12999
    }
]

const ans= shoppingCart.reduce( (acc,item)=>acc+item.price, 0);
console.log(ans);