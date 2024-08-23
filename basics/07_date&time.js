//dates

let myDate= new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof(myDate))

let mydate= new Date(2023, 0, 25)
//console.log(mydate.toDateString())

let mydate1= new Date(2023, 0, 25, 5, 3)
//console.log(mydate1.toLocaleString())

let mydate2= new Date("2023-01-14")
//console.log(mydate2.toLocaleString())

//time

let mytime= Date.now()
//console.log(mytime)
//console.log(mydate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))