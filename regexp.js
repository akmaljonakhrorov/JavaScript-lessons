

let str1 = "web brain acadrmy";
//          1-usul
// let regexp = new RegExp("brain");


//      2-usul

let reg = /brain/
console.log(str1.match(reg));

// 3-usul

let num = "99890 500 20 20";

// let regexp = /^\d\d/g; // boshida raqam bormi tekshiradi
// let regexp = / \d\d\d/g; // uch xonali raqam borligini tekshiradi
// let regexp = /\s/g; // string ichida bo'sh joy bormi shuni tekshiradi
// let regexp = /./g; // string ichidagi belgilarni ham chiqarib beradi
// let regexp = /\p{Pc}/g; // underscore ni chiqarib beradi
// let regexp = /\d$/g; // stringni oxiri raqam bilan tugaganmi

console.log(num.match(regexp));

