//singleton : whenever you create object from constructor
//Object.create creates singleton object

//object literals
const mysym= Symbol("Key1")
// console.log(mysym)
const jsuser= {
    name:"hitesh",
    "fullname" : "hitesh choudhary",
    "half name":"gauri", // this cannot be accessed by jsuser.half name
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
// console.log(jsuser["half name"])

jsuser.email= "gauri@gmail.com"
// Object.freeze(jsuser)
jsuser.email= "hitesh@gmail.com" //won't be changed as object was freezed
// console.log(jsuser)

jsuser.greeting= function(){
    console.log("Hello JS User")
}
jsuser.greeting2= function(){
    console.log(`Hello JS User, ${this["half name"]}`)
}
// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());


// const tinderobject= new Object() //this is a singleton object
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

// console.log(regularuser.fullname?.username) //? helps to check if it exists, can be neglected also

const obj1= {1:"a", 2:"b"}
const obj2= {3: "c", 4:"d"}

// const obj3= {obj1, obj2} //obj ke andar object
// console.log(obj3)

// const obj3= Object.assign({},obj1, obj2) //{ is optional but good to use}
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

// console.log(users[0].email)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isloggedin')) //checked about keys

//de-structuring of objects
const course={
    name:"JS in hindi",
    price:"999",
    course_instructor: "hitesh"
}
// course.course_instructor
const {course_instructor:instructor}= course
// console.log(course_instructor)
// console.log(course.name)
// console.log(instructor)

//component of react
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

// [
//     {},
//     {},
//     {}
// ]