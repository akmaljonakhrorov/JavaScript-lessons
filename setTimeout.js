
/* 19 april, 2024 */
            // setTimeout() methodi haqida

 /* setTimeout(()=>{}, time, arg) 
// bu metod JS metodi emas va function, time (delay), arument qabulqiladi */
/* setTimeout(()=>{
    console.log("hello world");
 },5000) */

// qaysi biri birinchi chiqadi
 /* setTimeout(()=>{
    console.log(1);
 }, 1000)
 setTimeout(()=>{
    console.log(2);
 }, 0)
 setTimeout(()=>{
    console.log(3);
 }, 500)
 console.log(4);

 output: 
        4
        2
        3
        1
*/

// setTimeout ning argument qabul qilishi: 
/*
setTimeout((a,b)=> { // bunda a va b lar "wov", "wov" parameter qabul qildi
    console.log(2, a, b);
}, 2000,"wov", "wov") 
*/
                // setInterval(()
// setInterval(() vaqt interval qoyadi o'sha intervalda har safar code yuardi
 /* let id  = setInterval(()=>{
    let date  = new Date()
    console.log(`today: ${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`);
},1000)

clearInterval(id) - bu orqali settimeout va setinterval o'chiriladi.
*/
// taskni bajarish ucnun
let getName  = ()=> {
    return (name) => {
        console.log(`eyy ${name}`);
    }
}
/* FUNKSIYANICHAQRISH YO'LLARI */
// getName()("hey") 
// let call = getName()
// call("HEY")
                    // home task

/* 
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1) == 6;
sum(6)(-1) == 5;
sum(0)(1)(2)(3)(4)(5) == 15; */

/* 
answer 1, agar 2ta parametr bo'lsa
let sum = (num1)=> {
    return (num2 )=> {
        console.log("sum:", eval(num1 + num2));
    }
}
sum(1)(2) 

answer 2, agar ko'p parameter bo'lsa:
let sum = (a) => {
    return (b)=>{
        return (c)=>{
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3));
*/