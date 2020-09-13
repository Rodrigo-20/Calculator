/*const numbers=Array.from(document.querySelectorAll(`[data-type="number"]`)).
map(number=>number.textContent);
console.log(numbers);*/
const display=document.querySelector('#display');
const onScreen=display.querySelector('p');
let screenContent="";
let data=[];
let element='';
let i=0;
function printOnScreen(){
    onScreen.textContent=screenContent+this.textContent;
    screenContent=screenContent+ this.textContent;
    console.log(this.getAttribute('class'));
    const span=this.querySelector('span');
   
    if(span.getAttribute('data-type')=='number'){
        console.log('hola mundo');
        console.log(this.textContent);
        console.log(element);
        element=element+this.textContent}
    else if(span.getAttribute('data-type')=='op'){
        console.log('me voy a dormir');
        data.push(element);
        data.push(this.textContent);
        element='';}
    console.log(data);
}
//const buttonNumbers=document.querySelectorAll('.number');
const buttonNumbers=document.querySelectorAll(`[data-onScreen='yes']`);//select the spans elements
console.log(buttonNumbers[0].parentNode);
buttonNumbers.forEach(button=>button.parentNode.addEventListener('click',printOnScreen));//add the event listener to the div element partent of the span



//every number presed is displayed on the screen

