

/* 2 - april  numbers */

/* katta sonlarni chqiarish
console.log(100_000_000);   _ pastda chiziqcha underscore deyiladi
*/

// sonni yaxlitlash

// let num = 0.875;

// console.log(Number(num.toFixed(1))); sonni yaxlitlash

// console.log(parseInt(num)); // sonni butun qismini qaytaradi
// console.log(parseFloat(num)); // sonni toliq qaytaradi

// let num = "0.1 + 0.2"
// console.log(eval(num)); // eval string sonni raqamga convert qiladi

// let num=2.4;

// console.log(num.toString(2)); // bu binaryga o'tkazish;
// console.log(parseInt("101", 2)); // decimal numberga o'tkazish
// console.log(Math.abs(num)); // basolyut raqam chiqaradi

// console.log(Math.round(num)); // yaxlitlash kattasiga qarab 5 dan yuqorisiga qarab yaxlitlaydi
// console.log(Math.floor(1.99)); // faqat butun qismini oladi
// console.log(Math.ceil(10.700)); // kattasiga qarab yaxlitlaydi

/* ! eslab qol
 floor va trunc ni faqri 
    floor kattasiga qarab yaxlitlaydi 
    trunc kasr qismini tashlab yuboradi faqat 
    butun qismini oladi
*/

// console.log(Math.trunc(Math.random()*10)); // random tasodifiy sonni chqarish

// console.log(Math.min(1, 2, 3, 5));   // min rqamni topish
// console.log(Math.max(1, 2, 3, 5));  // max raqamni topish

// console.log(Math.pow(2, 5)); // darajaga ko'tarish

// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));

/* OBTIONAL CHAINING  
?- BU BELGI BILAN NESTED OBJECTLARDA ISHLATILADI

let names =  {
    name: "akmal",
    name2 : {
        dog: "reks"
    }
}

console.log(names.name2?.dog);*/

