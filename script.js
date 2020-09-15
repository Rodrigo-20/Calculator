/*const numbers=Array.from(document.querySelectorAll(`[data-type="number"]`)).
map(number=>number.textContent);
console.log(numbers);*/
const display=document.querySelector('#display');
const onScreen=display.querySelector('p');

const equalButton=document.querySelector(`[data-value='eq']`).parentNode;
equalButton.addEventListener('click',equal);

const acButton=document.querySelector(`[data-value='ac']`).parentNode;
acButton.addEventListener('click',clear);

const delButton=document.querySelector(`[data-value='del']`).parentNode;
delButton.addEventListener('click',delChar);

let screenContent="";
let data=[];
let number='';

function add () {
	
	const arg=Array.from(arguments);
    const total=arg.map(num=>num/1)
                    .reduce((total,num)=>total+num);
	return total;
}
 
function subtract () {
	const arg=Array.from(arguments);
	const total=arg.reduce((total,num)=>total-num,2*arg[0]);
	return total;
}
 
function sum () {
	const arg=Array.from(arguments);
	const total=arg.reduce((total,num)=>total+num,0);
	return total;
}

function multiply () {
	const arg=Array.from(arguments);
	const total=arg.reduce((total,num)=>total*num,1);
	return total;
}
function division(){
    const arg=Array.from(arguments);
    const total=arg[0]/arg[1];
    return total;
}
/*function equal(){
    console.log(data);
    onScreen.textContent=data[0];
}*/ 
//finds the operation inside a 3 element array and push the result as the first element of the new array
function operate(calculation){
    
    let result=0;
    switch (calculation[1]) {
        case 'mul':
        result= multiply(calculation[0],calculation[2]);
        data.splice(1,2);
         
        break;
        case 'div':
        result= division( calculation[0] , calculation[2] );
        data.splice(1,2);
         
            break;
        case 'sum':
        result= add( calculation[0] , calculation[2] );
        data.splice(1,2);
         
            break;
        case 'sub':
        result= subtract( calculation[0] , calculation[2] );
        data.splice(1,2);
         
            break;    
        
            default:
        result = 0;

            break;
    }
    data[0]=Math.round(result*100)/100;
    
    
}
function printOnScreen(a){
    if(typeof a=='object'){ 
        let span;
        a.type=='click'?  span=this.querySelector('span'):0;
        a.type=='keydown'? span=document.querySelector(`[data-key='${a.key}']`):0;
        a.code=='Backspace'?clear():0;
        if(span){
            if(span.getAttribute('data-type')=='number'){    
                onScreen.textContent=screenContent+span.textContent;
                screenContent=screenContent+ span.textContent;
              }
          
            else if(span.getAttribute('data-type')=='op'){//every time an operator is pushed the screen its deleted and the values are pushed into data  
                screenContent? data.push(screenContent):0;
                screenContent='';
                onScreen.textContent=screenContent;
                data=data.filter(num=>num!='eq');
                
                if(data.length==3){operate(data);onScreen.textContent=data[0]}   
                    data.push(span.getAttribute('data-value'));
                }
            }   
           }
    else{  
        screenContent='';
        onScreen.textContent=a;
    }    
}
function equal(){//shows the result of the operation displaying the first element of the array
    /*if(data[0]===undefined){
    console.log(data[0])} ;*/
    if(screenContent){   
    data.push(screenContent);
    screenContent='';
    data.length==3?operate(data):0;
    printOnScreen(data[0]);
     
    }    

}
function clear(){//clear the display
    data=[];
    onScreen.textContent='';
    screenContent='';
}
function delChar(){//delete the last number of the screen
    screenContent= screenContent.slice(0,screenContent.length-1);
    onScreen.textContent=screenContent;
}
/*function typeNumber(e) {
    console.log(e.keyCode);
    const button=document.querySelector(`[data-key='${e.keyCode}']`);
    console.log(button);
    console.log(typeof button);
    printOnScreen(e);
}*/
        
    /*
    console.log(data);
    onScreen.textContent=screenContent+this.textContent;
    screenContent=screenContent+ this.textContent;
    console.log(this.getAttribute('class'));
    const span=this.querySelector('span');
    //the data its parsed, every time an operation button its pressed the array adds a new element
    if(span.getAttribute('data-type')=='number'){
         
        element=element+span.getAttribute('data-value')}
    else if(span.getAttribute('data-type')=='op'){
        element?data.push(element):0;
        screenContent='';
        onScreen.textContent=screenContent;
        
        
        data.length==3?operate(data):0;    
        
        /*if(span.getAttribute('data-value')=='eq'){
            console.log('que onda');
            //onScreen.textContent=`${data[0]}`;
           
            element='';
            return;
        }
        
    else if(span.getAttribute('data-type')=='eq')   
        
        data.push(span.getAttribute('data-value'));
        element='';
        if(data.length==4){
            screenContent=operate(data);
            onScreen.textContent=screenContent;
            }
        */ 
    
    

//const buttonNumbers=document.querySelectorAll('.number');
const buttonNumbers=document.querySelectorAll(`[data-onScreen='yes']`);//select the spans elements
console.log(buttonNumbers[0].parentNode);
buttonNumbers.forEach(button=>button.parentNode.addEventListener('click',printOnScreen));//add the event listener to the div element partent of the span
window.addEventListener('keydown',printOnScreen);


//every number presed is displayed on the screen

