/* 16 - APRIL, SCOPE VA CLOSURE */

/* scope ni bilishnima uchun kerak - code ni tezroq ishlashi uchun kerak scopeni ichidagi malumotlarni garbage collection remove qiladi,
shunda code tez ishlaydi */

// var va let ni farqi 

// eslatma: let faqat  shu {} skopni ichida ishlaydi, var esa scope bi tashqarisida ham ishlayveradi.
/* masalan : 
console.log(a);
let a = 1;  
output: ReferenceError: Cannot access 'a' before initialization chiqadi. Nega chunki, code qatori tartibsiz yozilgan ammo variable borligi ma'lum.
*/
/* 2 masala: 
console.log(a); output: ReferenceError: a is not defined chiqadi, sababi umuman variable yo'q shuning uchun not defined */


/* lexical environment nima ? A lexical environment in JavaScript is a data structure 
that stores the variables and functions that are defined 
in the current scope and all of the outer scopes.*/

/* lex. env. has two parts: environment record and reference to outer lexical environment */

/* 
Environment Reocrd  - an object stores all local variables / local memory 
reference to outer lexical environment - associated with outer code draw callstack
*/

// masalan: 
 /* let name  = "webbrain"; // bu esa outer scope dagi ma'lumot
function getName() {
    // local memory
    let b = 'wba';
    console.log(name);
    return function(b) {
        console.log(name, b);
    };
} 
*/

// closure nima - bu o'zini tashqarisidagi variable ni ishlatishi closure deyiladi
// masalan: 
// let name  = "webbrain"; outer variable
/*
function getName() { 
    console.log(name);// funksiya tashqi variableni chaqiryabdi
}
*/

/* garbage collection nima - bu lexical environment is removed 
after function call ends.
*/








