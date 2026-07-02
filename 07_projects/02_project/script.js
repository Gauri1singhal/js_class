const form= document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();


const height= parseInt(document.querySelector('#height').value)
const weight= parseInt(document.querySelector('#weight').value)
const results= document.querySelector('#results')
const conclusion= document.querySelector('#conclusion')



if(height==='' || height<0 || isNaN(height)){
    results.innerHTML= `Please enter a valid height ${height}`
}else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML= `Please enter a valid weight ${weight}`
}else{
    const result= (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML= result
    if(result<18.6){
        conclusion.innerHTML= `Under Weight`
    }else if(result>=18.6 && result<=24.9){
        conclusion.innerHTML= `Normal Weight`
    }if(result>=24.9){
        conclusion.innerHTML= `Over Weight`
    }
    
}

})