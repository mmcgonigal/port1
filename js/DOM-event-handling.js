let btn1 = document.getElementById('one');
let btn2 = document. getElementById('two');
let btn3 = document.getElementById('three');

let handleClick = function(event){
    console.log("did you click me ?");
}

btn2.addEventListener('click', handleClick);
btn2.addEventListener('click',function(){
    console.log("another handler has been added")
});

btn2.removeEventListener('click',handleClick);

//let addDiv= document.createElement('div')
 //use appendChild
//document.body.appendChild(div);

let btn4 = document.getElementById('push')
let div= document.getElementById('area')

btn4.addEventListener('click', function(){
    console.log("creating div")
    const newDiv= document.createElement("div")
    div.appendChild(newDiv)
})
//Make a program that filters through this array:
// ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.


