const user= {
    username:"Hitesh",
    price: 299,
    welcomeMess: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

}

// user.welcomeMess()
//user.username= "Gauri"
//user.welcomeMess()
// console.log(this) //empty object as node pr global object kuch nahi h

function chai(){
    let username= "Hitesh"
    console.log(this.username) //undefined as 'this' is only applicable in objects 
    console.log(this)
}
// chai()

const chai1= function(){
    let username= "Hitesh"
    console.log(this.username) //only applicable in objects
    console.log(this)
}

// chai1()

//arrow functions
const chaii= () => {
    let username= "Hitesh"
    console.log(this.username) //only applicable in objects
    console.log(this)
}

// chaii()

const addtwo= (num1, num2) =>{
    return num1+num2
}

const addtwo2= (num1, num2)=>(num1+num2) //implicit return

// console.log(addtwo(2,3))
// console.log(addtwo2(8,3))

//curly braces use kiya toh return likhna compulsory h
//normal braces m return likhna jaruri nhi h

const addtwo3= (num1, num2)=> ({username: "Hitesh"})
console.log(addtwo3(2,3))

//paranthesis helps to print objects as we need curly braces 
// to write object and paranthesis that will help the funciton return them

