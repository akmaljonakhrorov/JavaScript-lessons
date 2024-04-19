
//  16 - april 
//  IIFE nima ? bu Immediately Invoked Function Expression bo'lin,
/* o'zidan oldin va keyin kelgi variable lar o'zini ichidagi variable bilan bilan bir bo'lsa 
faqat ozini ichidagi variable ni ishlatib berish uchun closure hosil qiladi. 
masalan : 

var a  = 10;
console.log(a); // output: 10

(function(){ // bu funksiya var muammo bo'lagn paytda oldin ishlagan.
    var a = 15;
    console.log(a); // output: 15
})() // mana shu qavs esdan chiqmasin

var a = 20;
console.log(a); // output: 20
*/
//                      Global Object
// Global Object - holds variable that available anywhere;
/* window / globalThis - bular faqat javascript uchun;
global - faqat node.js uchun ishlaydi.

masalan:
globalThis.a = 30;
function name (){
    var a = 10;
    console.log(a, globalThis.a);
}
console.log(a);
*/

//              funksiyani nomini bilish

/*
function test(a,b) {
    console.log("hello");
}
console.log(test.name); // name ni bilish uchun shunday yoziladi. objectga o'xshab aniqlanadi.
console.log(test.length); // length ni bilsih uchun shunday yoziladi
*/

//                      named function expression 
// NFE nima -- bu o'zini o'zi chaqiradigan funksiya 

// masalan: 
 const getName  = function callback(name) {
    console.log("hi,", name);
    return getName()
}
getName("webbrain")


//          array ni id va name bo'yicha filterlash (raqam va string) 
/*
const getFilter = ({key, value})=> {
    let res = students.filter((user)=>
    `${user[key]}`.toLowerCase().includes(`${value}`.toLowerCase()))
    students = res;
}

getFilter({value: 2, key: "id"})
getFilter({value: "Akmal", key: "name"})
console.log(students);
*/



                    /* namde function expression (NFE)
                    /* NFE - bu funcksiyani yana bir nom bilan nomlashdir.
                    masalan: quyidagi funk ni callback deb nomlanishi.
                    bu nomlash scope ichini qayta yurgizish ucnun kerak 
  
                */
/*  
const  getName = function callback(name){  
    console.log(`Hi, ${name}`);
    return callback();
}
getName("webbrain");
*/

            /* new function() haqida */
 /* new function() hozirda ishlatilmaydi.
 new Function() constuctor hisoblanadi. yangi funksiya yasash un ishlatilinishi mn
 va closure da ishlamaydi */