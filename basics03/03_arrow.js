const user= {
    username:"Hitesh",
    price: 299,
    welcomeMess: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

}

//user.welcomeMess()
//user.username= "Gauri"
//user.welcomeMess()
console.log(this)

function chai(){
    let username= "Hitesh"
    //console.log(this.username) only applicable in objects
    console.log(this)
}
//chai()

const chai1= function(){
    let username= "Hitesh"
    //console.log(this.username) only applicable in objects
    console.log(this)
}

//chai()

const chaii= () => {
    let username= "Hitesh"
    //console.log(this.username) only applicable in objects
    console.log(this)
}

//chai()

const addtwo= (num1, num2) =>{
    return num1+num2
}

const addtwo2= (num1, num2)=>(num1+num2)

//console.log(addtwo(2,3))
//console.log(addtwo2(2,3))

//curly braces use kiya toh return likhna compulsory h
//normal braces m return likhna jaruri nhi h

const addtwo3= (num1, num2)=> ({username: "Hitesh"})
console.log(addtwo3(2,3))

