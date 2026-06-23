//dates
//month starts from 0

let myDate= new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof(myDate))

//creating my date
let myCreatedDate= new Date(2023, 0, 25)
// console.log(myCreatedDate.toDateString())

let mydate1= new Date(2023, 0, 25, 5, 3)
// console.log(mydate1.toLocaleString())

let mydate2= new Date("2023-01-14")
//month starts from 1
// console.log(mydate2.toLocaleString())

//time

let mytime= Date.now()
// console.log(mytime)
// console.log(myCreatedDate.getTime())
//this is used for comparison
// console.log(Math.floor(Date.now()/1000)) //converted into seconds

let newDate= new Date()
// console.log(newDate.getMonth()+1) //+1 is written to get the exact month as it is o based indexed
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time `

// console.log(newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: "America/New_York"
// }))

const specificDate= new Date('2026-12-25T12:00:00')

console.log(specificDate.toLocaleString('default', {
    weekday:"long",
    timeZone: "America/New_York"
}))