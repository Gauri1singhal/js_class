//singleton
//Object.create creates singleton object
//object literals

const mysym= Symbol("Key1")
const jsuser= {
    name:"hitesh",
    "fullname" : "hitesh choudhary",
    age:18,
    [mysym]: "mykey1",
    location:"jaipur",
    email: "hitesh@gmail.com",
    isLoggedin:false,
    lastloggedin: ["Monday", "Wednesday"]
}
// console.log(jsuser.email)
// console.log(jsuser["location"])
// console.log(jsuser.fullname)
// console.log(jsuser[mysym])

jsuser.email= "gauri@gmail.com"
//Object.freeze(jsuser)
jsuser.email= "hitesh@gmail.com"
//console.log(jsuser)

jsuser.greeting= function(){
    console.log("Hello JS User")
}
jsuser.greeting2= function(){
    console.log(`Hello JS User, ${this.fullname}`)
}
//console.log(jsuser.greeting());
//console.log(jsuser.greeting2());


// const tinderobject= new Object()
const tinderuser={}
 tinderuser.id= "123"
tinderuser.name= "Sammy"
tinderuser.isloggedin= false
// console.log(tinderuser)

const regularuser={
    email:"sum@gmail.com",
    fullname:{
        username: {
            firstname: "hitesh",
            lastname:"chaudhary"
        }
    }
}

//console.log(regularuser.fullname?.username)

const obj1= {1:"a", 2:"b"}
const obj2= {3: "c", 4:"d"}
// const obj3= Object.assign({},obj1, obj2)
// console.log(obj3)

//spread
const obj3= {...obj1, ...obj2}
// console.log(obj3)

const users= [
    {
        id:1,
        email:"hg@gmail.com"
    },
    {},
    {},
]

//console.log(users[1].email)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isloggedin'))

const course={
    name:"JS in hindi",
    price:"999",
    course_instructor: "hitesh"
}
const {course_instructor:instructor}= course
console.log(course.name)
console.log(instructor)

// const navbar=({company})=>{

// }
// navbar(company="hitesh")


//API
//apna kaam kisi or ke sir pr daal dena== API
//json
// {
//     "name": "hitesh",
//     "courseName":"JS in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]