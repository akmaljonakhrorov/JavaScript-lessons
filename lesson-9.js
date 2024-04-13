            /* string bilan ishlash */

// let string1 = "webbrain";

// let string2 = new String("webbrain") // yangi string hosil qiladi
// console.log(string2 === "webbrain"); // false qaytaradi chunki new String() konstruktor ichidagi string korinishida o'qiydi

 /* console.log(string1.localeCompare(string2)); // 0 qaytaradi, localeCompare string o'xshashm yoki harfllari ichida bormi teshiradi 
va -1,0,1 qaytaradi.*/
 /* let str1 = "webbraain";
console.log(str1[1]); // []-bu faqat positive number qabul qiladi
console.log(str1.at(-1)); // .at() faqat - minus qabul qiladi
console.log(str1.charAt()); // faqat 1ni oladi */

/* let str = 123456;
console.log(`${str1}`.toUpperCase()); 
bacj tik raqamni ham string holatga o'tkazadi keyin string method ni qo'llasa boladi.
*/

/* let str = "webbrain"
console.log(str.toLowerCase()); // bu oddiy english alfavit boyciha ishlaydi
console.log(str.toLocaleLowerCase()); // bu qavs ichi () bo'sh bo'lsa default bo'ladi. 
agar til yozilsa ('en-US') */

/* 
let str = "webbrain academy";
console.log(str.indexOf("bb", 5)); 
// 5 indexdan boshlab tekshiradi "bb" bo'lmasa -1 qaytaradi.
*/

/*  oxiridan bsohlab 7ta sanaydi va berilgan harf indexni chiqaradi
let str = "webbrain academy";
console.log(str.lastIndexOf("n", 7)); 
*/

/* 
string qaysi harf bilan boshlanganini tekshiring
console.log(str.startsWith("web")); 
console.log(str.endsWith("web")); 
*/

/* let str = "webbrain academy";
stringga "." ni boshi yoki oxiriga qo'shish
console.log(str.padEnd(22, ".")); 
console.log(str.padStart(22, ".")); 
*/

/*
slice() va substring()
slice() - bu stringdan korsatilgan indexdan boshlab kesib oladi.
va bu minus qiymat qabul qiladi slice(-2);
substring()- bu minus qabul qilmaydi, 
lekin qavs ichida index taribi noto'g'ri berilsa ham o'zi to'g'irlab oladi, 
masalan substring(2, 0) birinchi 0 ni keyin 2 o'qiydi.
*/

/* 
eval() --bu arifmetik amal bajaradi
masalan: console.log(eval(2+2));
agar amal ichida harf bolsa invalid error qaytaradi
*/

/* 
split ma'lumotlarni errayga otakzib beradi
*/

/* 
valueOf() valyusini oladi
masalan : 
let str = "asdsdsdsa"
let str2 = new String("asdsdsdsa") // bu konstructordan string object qaytadi
console.log(str2.valueOf());
*/ 

/* 
replace() -- matni boshqasiga o'zgartiradi
let str = "aaaa bbbb"
console.log(str.replace("aaaa", "AAA"));
*/

/* 
for of metodi bilan ishlash, bu stringning har bir xarfiga kirib chiqadi

let str = "aaaa bbbb"
for ( char of str) {
    console.log(char);
} */

 /* 
 split() - bu string ichidagi elementni kesib oladi 
va array qilib qaytaradi array qilib qaytaradi.
masalan: let str = "web nbnb bnbnnb vvvvvvvv"
console.log(str.split(" ", 3)); // chiqadi: [ 'web', 'nbnb', 'bnbnnb' ];
*/








