
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
/*
let number = [1,2,3,5,6,7];
Array.prototype.remove = function(n){
    let res = this.filter((value) => value !== n);
    console.log(res);
}
number.remove(1)
*/

// __proto__ va prototype ni Dave dan you tube dan o'rganish:
/*
const person = {
    alieve: true
}

const musician = {
    plays: true
}

Object.setPrototypeOf(person,musician)
console.log(Object.getPrototypeOf(musician));
*/

const car = {
    doors: 2,
    seats: "charm",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material){
        this.seats = material;
    }
}

const luxuryCar = {};

Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
/*
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);
console.log(luxuryCar.valueOf());*/

            // object ni key larini olish usllari
// 1 usul, 
console.log(Object.keys(luxuryCar));

// 2 usul 
Object.keys(luxuryCar).forEach(key=>{
    console.log(key);
})

// 3-usul 
// for ...in loop includes inherited props
for(let key in luxuryCar){
    console.log(key);
}