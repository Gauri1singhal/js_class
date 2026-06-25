/*
open any website and inspect and open console
console.log(window) 
console.log(document)
console.log(window.document)
console.log(document. //alot of functions are available)
though all the functions looks like array but they are html elements and which we need to access

document.getElementById('id_name')
document.getElementById('id_name').innerHTML= "<h1>Chai aur Code</h1>"

diagram
        window
        document
           HTML
        Head                           Body
title      meta                         div
text node  attribute             h1             p
                     text node, attribute      text node



on browser for one.html

document.getElementById('title')
<h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​DOM learnign on Chai aur Code​</h1>​
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute()
VM239:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34
(anonymous) @ VM239:1
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('test')
VM288:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
    at <anonymous>:1:34
(anonymous) @ VM288:1
document.getElementById('title').setAttribute('class', 'test')
undefined
document.getElementById('title').setAttribute('class', 'test' 'heading')
VM1423:1 Uncaught SyntaxError: missing ) after argument list
document.getElementById('title').setAttribute('class', 'test heading')
undefined
const title= document.getElementById('title')
undefined
console.log(title)
VM1734:1 <h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​DOM learnign on Chai aur Code​</h1>​
undefined
title.sty
undefined
title.style.backgroundColor= 'green'
'green'
title.style.padding= '15px'
'15px'
title.style.borderRa= '15px'
'15px'
title.style.borderRadius= '15px'
'15px'
title
<h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​DOM learnign on Chai aur Code​</h1>​
title.textContent
'DOM learnign on Chai aur Code'
title.innerText
'DOM learnign on Chai aur Code'
title.innerHTML
'DOM learnign on Chai aur Code'
title.innerText
'DOM learnign on Chai aur Code'
title.textContent
'DOM learnign on Chai aur Code'

title.innerHTML
'DOM learnign on Chai aur Code <span style="display:none" ;="">test text </span>'
title.textContent
'DOM learnign on Chai aur Code test text '
title.innerText
'DOM learnign on Chai aur Code'
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]
document.querySelector('h1')
<h1 id=​"title" class=​"heading">​…​</h1>​"DOM learnign on Chai aur Code "<span style=​"display:​none" ;>​test text ​</span>​</h1>​

document.querySelector('input[type="password"]') {//query selector gives the first element of the query}
<input type=​"password">​


document.querySelector('ul')
<ul>​…​</ul>​
const myul= document.querySelector('ul')
undefined
myul.querySelector('li')
<li style=​"background-color:​ blue;​ color:​ yellow;​">​…​</li>​
const turnGrren= myul.querySelector('li')
undefined
turn
VM4045:1 Uncaught ReferenceError: turn is not defined
    at <anonymous>:1:1
(anonymous) @ VM4045:1
turnGrren.style.backgroundColor='green'
'green'
turnGrren.innerText
'one'
turnGrren.innerText= 'five'
'five'
document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()length: 1name: "forEach"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const tempList= document.querySelectorAll('li')
undefined
tempList.map( (item)=>item+1 )
VM4418:1 Uncaught TypeError: tempList.map is not a function
    at <anonymous>:1:10
(anonymous) @ VM4418:1
 tempList.style.color= 'green'
VM4479:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:22
(anonymous) @ VM4479:1
 tempList[0].style.color= 'green'
'green'
 tempList[0].style.color= 'yellow'
'yellow'
const myh1= document.querySelectorAll('h1')
undefined
myh1
NodeList [h1#title.heading]
 myh1.style.color= 'yellow'
VM4645:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18
(anonymous) @ VM4645:1
 myh1[0].style.color= 'yellow'
'yellow'
 tempList.forEach(function (l){
     l.style.backgroundColor='blue'
 })
undefined

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const tempclass-list = document.getElementsByClassName('list-item')
VM4972:1 Uncaught SyntaxError: Missing initializer in const declaration
const tempclasslist = document.getElementsByClassName('list-item')
undefined
tempclasslist.forEach(function(li){console.log(li)})
VM5075:1 Uncaught TypeError: tempclasslist.forEach is not a function
    at <anonymous>:1:15
(anonymous) @ VM5075:1
Arr
VM5127:1 Uncaught ReferenceError: Arr is not defined
    at <anonymous>:1:1
(anonymous) @ VM5127:1
Array.from(tempclasslist)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)
const myArr= Array.from(tempclasslist)
undefined
myArr.forEach(function(li){console.log(li)})
VM5317:1 <li class=​"list-item">​…​</li>​
VM5317:1 <li class=​"list-item">​…​</li>​
VM5317:1 <li class=​"list-item">​…​</li>​
VM5317:1 <li class=​"list-item">​…​</li>​
undefined


myArr.forEach(function(li){
    console.log(li);
    li.style.color= 'red';
    li.style.padding= '10px';
    li.style.backgroungColor='green';
    li.innerText= 'gauri'
})
//alot of lines could be used ek saath also using semi colon

VM5498:2 <li class=​"list-item" style=​"color:​ red;​ padding:​ 10px;​">​…​</li>​
VM5498:2 <li class=​"list-item" style=​"color:​ red;​ padding:​ 10px;​">​…​</li>​
VM5498:2 <li class=​"list-item" style=​"color:​ red;​ padding:​ 10px;​">​…​</li>​
VM5498:2 <li class=​"list-item" style=​"color:​ red;​ padding:​ 10px;​">​…​</li>​
undefined









                     */ 