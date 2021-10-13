var who=['The dog','A ghost','My friend','The cat']
var action=['broke','stole','took']
var what=['my phone','the keys','my credit card','my homework', 'my laptop']
var when=['this morning','five minutes before','before the class','during the weekend']


let excuseEl=document.getElementById("excuse")

 function number(array){
    
    var random_number= Math.floor(Math.random()*array.length)
    return random_number
 }

function generarexcusa(){
    var excuse=who[number(who)]+' '+action[number(action)]+' '+what[number(what)]+' '+when[number(when)]
    excuseEl.innerHTML= excuse
}