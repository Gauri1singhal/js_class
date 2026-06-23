/*
JS is a single threaded language
code -> global execution Context (EC) -> refer to this variable
for browser 'this' vairable has window object
for node.js 'this' is teh scope of function and variable there


global EC : 
functional EC :
eval EC : for mongoose, it is a kind of property of global EC

java code -> memory creation phase
         -> execution phase

let val1=10
let val2= 5
function add(num1, num2){
let total= num1+num2
return total
}
let res1= add(val1, val2)
letres2= add(10,33)

*****----execution for js console-----****

phase 1- global execution which refers to 'this' keyword
phase 2- memory phase (1st cycle)
        val1= undefined
        val2= undefined
        add = definition
        res1= undefined
        res=undefined
phase 3- execution phase
        val1<-10
        val2<-5
        add-> cretes another execution context.  (new variables environment + execution thread)
                                        ||                      ||
                                memory phase                execution phase
                                val1=undefined                  num1<-10
                                val2=undefined                  num2<-5
                                total=undefined                 total<-15 (returns to global execution context)
         //now delete the execution phase of function
         res1=15
         res2= creates another execution context (new variables environment + execution thread)
                                        ||                        ||
                                memory phase                execution phase
                                val1=undefined                  num1<-10
                                val2=undefined                  num2<-33
                                total=undefined                 total<-43 (returns to global execution context)
        /now delete the execution phase of function
        res2= 43

        ends of code
*/




/* call stack 
LIFO Last In First Out

let us have three function one() two() three()

        |    thre()              |
        |    two()               |      
        |    one()               | 
        |____Global Execution____|   
        
*/