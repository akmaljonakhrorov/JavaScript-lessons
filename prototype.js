
//                  23 april, 2024
/* prototype dan foydalanib array yoki object ichidagi 
malumotni o'chirish (yoki update)qilish. */

//  let arr = [1,2,3,4,5];

/*remove ga misol 
Array.prototype.remove = function (n) {
    let res = this.filter((value)=> value !== n);
    console.log(res);
};

arr.remove(4);
arr.remove(1)
*/

//          object ga object qo'shish
/*
// 1-usul, object.assign() dan foydalanish:
let user1 = {name: "webbrain"};
let user2 = {title: "academy"};
Object.assign(user1, user2)
console.log(user1);
*/

// 2-usul, __proto__ dan foydalanish
/*
let user1 = {name: "webbrain"};
let user2 = {title: "academy"};

user1.__proto__ = user2
console.log(user1.title);
*/
//              prototype orqali object ichidagi valuelarni 
/*
let user = {
    name: "Webbrain",
    last: "Academy"
}

Object.prototype.fullName = function () {
    console.log(this.name, this.last);
    return this;
}
user.fullName()
*/
//                      prototype ni array bilan qo'llash

let number = [1,2,3,5,6,7];
Array.prototype.remove = function(n){
    let res = this.filter((value) => value !== n);
    console.log(res);
}
number.remove(1)

