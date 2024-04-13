// 6 april, 2024 yie.
/* array BASICS  */

// let ar = [11, 22, "webbrain", true, false, undefined];
// console.log(ar[ar.length - 1]); // oxirgi indeksni chiqarish un lengthdan foydalaniladi
// console.log(ar.at[-1]); // .at[] minus qiymat qabul qiladi. arrayni oxiridan ichidan value larni olish uchun ishlatiladi

// let ar = new Array(5) // agar raqam bolsa array ichida shuncha bosh item bor data bor deb chiqaradi
// let arr = new Array("5")// agar string bo'lsa array yasab beradi
// let ar = [];
// a[0] = 1 // o indexdagi bosh joyga 1 raqamli malumotni biritiradi
 
// array metodlar: 
/* 1. ar.toString()*/ // malumotni stringga o'tkazadi
// console.log(arrr.toString());
// 2. arr.join() // bu ( ) qavs ichida bo'sh joy tashlasak;
// join("") arraydagi malumotlarni alohida qilib beradi
// 3. concat arraylarni qo'shish: masalan: console.log(arr1.concat(arr1)),  console.log(arr1.concat(arr1, [], "yana nimadirlar qoshsa boladi")),  
// arrayni datatype Array.isArray([]) metodidan aniqalanadi

                                /* array ADVANCED,  6-april */ 

// arraylarni loop bilan ishlatish

// let ismlar  = ['akmal', 'brain', 'knock']

// for(let i = 0; i <= ismlar.length; i++){
//     console.log(ismlar[i]);
// }

 /* for( value of user) {    bu metod arrayning valuelarini alohida chiqarib beradi
    console.log(value);
} */

/* for( index in user) {     bu metod arrayning indexlarini chiqarib beradi
    console.log(index);
} */

/* aray methods: 
pop() --arrayni oxiridan o'chiradi
push()-oxiridan qo'shadi

shift()--boshidan o'chiradi
unshift()--boshidan qo'ashdi

splice() == arraydan datalarni ajratib oladi. BU arrayni asl holatini ham o'zgartiradi
slice()== arrayni asl holatini o'zgartirmaydi
*/ 

//          home 1-task arraydan
/* var wordsArray = ["webbrain", "academy"]; shu array ichidagi xar bir harf sanogini chiqaring */

// const countLetterFunction = (arr) => {
//     let countLetter = {};
//     for (let i = 0; i < arr.length; i++) {
//         let char  = arr[i];
//         for (let j = 0; j < char.length; j++) {
//             let word = char[j].toLowerCase();
//             if("a" <= word && "z">= word) {
//                 if(countLetter[word]){
//                     countLetter[word]++
//                 } else {
//                     countLetter[word] = 1;
//                 }
//             }    
//         }  
//     }

//     return countLetter;
// }

// let givenArray = ["webbrain", "academy"];
// console.log(countLetterFunction(givenArray));


// task 2

let arr1 = [1,2,3];
let sum = 0;

console.log(eval([1,2,3].join("+")));


