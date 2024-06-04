

// 03.06.2024
// event bubbling, stopPropagation / imadiatePropagation -- eventlarni toxtatib turadi yoki skip qiladi


/* 
child = (event)  => {
    // console.log(event);
    event.stopImediatePropagation(); // ozidan keyin
    alert('child');
}

const parent = (event)=>{
    event.stopImediatePropagation();
    alert('parent')
}

const grand = ()=> {
    alert('grand')
}
*/

// event deligation 

/*
let target;
table.onclick = function(event){
    if(target) target.classList.remove('highliter');
    target = event.target;
    target.classList.add('highliter') 
}
*/

// const buttons = document.querySelectorAll('button');
// buttons.forEach((buttons)=>{

//     buttons.addEventListener('click', (event)=>{
//         console.log(event.target.innerText);
//     });
// })


// event deligation ga simple msiol :

/* 
const div = document.querySelector('div');

div.addEventListener('click', event => {
    const target = event.target;

    if(target.tagName === 'BUTTON'){
        console.log(target.innerText);
    }
})
*/

// const orange = document.querySelector('.orange');
// const span = document.getElementById('span');
// const pressBtn = document.querySelector("#btn")

// evnet bubble ga misol: 

/* 
pressBtn.addEventListener(('click'), event=>{
    console.log(event.target.innerText);
})
orange.addEventListener(('click'), event=>{
    console.log(event.target.tagName);
})
span.addEventListener(('click'), event=>{
    console.log(event.target.tagName);
})
*/

// evnet deligationga misol: 

/* 
orange.addEventListener('click', event => {
    const {target} = event

    if(target.tagName === "BUTTON"){
        console.log("button was clicked");
    }
    if(target.tagName === "SPAN"){
        console.log("SPAN was clicked");
    }
    if(target.tagName === "DIV"){
        console.log("div was clicked");
    }
})
*/



// mosue evnets in deep


/* 
onclick;
oncontextmenu;
onmousemove;
onmousedown;
onkeypress;
ondblclick;
oncopy;
onpaste;
onmouseover;
*/
//                  03.06.2024

            // eventlistener = listen for specific events to create 
            // interactive web pages evnets: click, mouseover, mouseout;

// click event example 
const myBox = document.querySelector('#myBox');

function changeColor(event) {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "ouch";
}

myBox.addEventListener('click', changeColor);

// mouseover event example 
myBox.addEventListener("mouseover", event => {

    event.target.style.backgroundColor = "red";
    event.target.textContent = "do not touch";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "happy";

})