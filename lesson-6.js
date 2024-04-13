// 1-april
/* this dan yoydalanish */
// let user = {
//     name : "webbrain",

//     sayHay(){
//         console.log(this)
//         console.log(` hi, ${this.name}`)
//     }
// }

// user.sayHay()

// let id1 = sybol('id')
// let id2 = sybol('id')

// let obj = {
//     [id1]: "webbrain",
//     ["id2"]: "academy", // bunda key o'zgaradi
//     'id2': "academy",
//     id2: "academy",
//     [id2]: "academy" // bunda variable o'zgaradi
// }
// console.log();

//           destructure 

// let obj = {
//     name: "webbrain",
//     title: "It Center",
//     age: "34567",
//     chil: {
//         childname: "testing"
//     }
// }
// BUS destructure DEYILADI YANI OBJETC ICHIDAGI KEYLARNI HAR BIRINI YANGI OZGARUVCHI SIFATIDA AJRATIB OLISH
/* const {name, title, age} = obj; 

// agar ikkita bir xil variable bo'lsa masalan name va name u holda 
const {name: newName, newtitle, newage} = obj; */

/* agar object ichida object 
bolsa u ham destructura qilsa boldai masalan: 
const {name: newName, newtitle, newage, chil:{childname}} = obj; */

                        /* spread operator*/

/* ucha nuqata ... spread operator hisoblanadi bu copy degani */

// masalan : 
 const obj = {
    name: "webbrain",
    age:1
 };
console.log(obj);
 console.log({...obj, name:"it senter"});



