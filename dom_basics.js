
//  DOM 20 may, 2024 year.

// https://t.me/c/1823828950/57
// alert(window.innerHeight);


// alert(document.href);
// alert(location.pathname)

// let data = document.getElementsByTagName('ul')[0];

// console.log(data.parentNode);
// console.log(data.parentElement);

// console.log(data.firstChild);
// console.log(data.firstElementChild);

//                      tag ni ajratib olish va style berish

// let by = document.getElementsByTagName("body")
// let parent  = document.getElementsByClassName('parent');

// console.log((parent[0].style.background = "red"));
// console.log((parent[1].style.background = "orange"));

// let parent = document.querySelector(".parent")
// parent.setAttribute("id", "border");

// atribute ni clone qilish
/* 
let dv = document.createElement("div");

let txt = document.createTextNode("hey DOm");

dv  = parent.cloneNode(true)
console.log(dv.getAttribute("class"));
*/

//              create text and element

/* 
let dv =document.createElement("div");
let txt =  document.createTextNode("text");

dv.innerHTML = txt;
dv.append = txt
console.log(dv);
*/


                    //  JavaScript da style berish
                    // JavaScriptda style berilganda  camelCase qilib yoziladi.
// masalan:

let parent = document.querySelector(".parent");
// parent.style.fontSize = "50px";
/*
parent.style.cssText = `
color: white;
background-color: blue;
font-size: 25px;
`;
*/
//          har bir li ga alohida rang berish:

/*
let ch = parent.childred[0].children; 
for(let el = 0; el<ch.length; el++){
    if(el % 2 === 0){
        ch[el].style.color = "red";
    } else {
        ch[el].style.color = "blue";
    }
}
*/

// console.log(parent.offsetTop);
// console.log(parent.offsetWidth);
// console.log(parent.scrollWidth);
// console.log(parent.scrollHeight);

/* 
let btn = document.querySelector("button")
function expand(){
    if(parent.clientHeight === parent.scrollHeight){
        parent.style.height  = "150px";
        btn.innerHTML  = "show more";
    } else {
        parent.style.height =`${parent.scrollHeight}px`;
        btn.innerHTML  = "show less";
    }
}
*/

function al(e){
    console.log(e);
}

