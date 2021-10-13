const WHO=['The dog','A ghost','My friend','The cat']
const ACTION=['broke','stole','took']
const WHAT=['my phone','the keys','my credit card','my homework', 'my laptop']
const WHEN=['this morning','five minutes before','before the class','during the weekend']


let excuseEl=document.getElementById("excuse")

 function number(array){
    
    let random_number= Math.floor(Math.random()*array.length)
    return random_number
 }

function generarexcusa(){
    let excuse=who[number(who)]+' '+action[number(action)]+' '+what[number(what)]+' '+when[number(when)]
    excuseEl.innerHTML= excuse
}