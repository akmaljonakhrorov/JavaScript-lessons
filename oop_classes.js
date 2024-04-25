
// 25 april, 2024 year
// class lar bilan ishlash 
/*
class users {
    fullName(name){
        console.log(`hi ${name}`);
    }
}
 let usr1 = new users()
 let usr2 = new users()
 usr1.fullName("webbrain")
*/
/*
 class users {
    age = 0;
    fullName(name){
        console.log(++this.age);
    }
}

let user1 = new users();
let user2 = new users();

user1.fullName()
user1.fullName()
user1.fullName()
*/
// class constructor bilan ishlash. Constructor har doim birinchi ishlaydi, oxirgi line da yozilsa ham birinchi ishlaydi
/*
class users {
    constructor(title){
        console.log(title);
    }
    age = 0;
    fullName(name){
        console.log(++this.age);
    }
}

let user1 = new users();
let user2 = new users();
*/
//      class larga access qilish
/*
class users {
    constructor(title){
        this.title = title
        console.log(this.title);
    }

    welcomeMsg(){
        console.log(`his ${this.title}, welcome to webbrain`);
    }
}

let user1 = new users("eshmat");
let user2 = new users("toshmat");
user1.welcomeMsg()
user2.welcomeMsg()
*/

//  class larni set va get bilan ishlatish
/*
class users {
    constructor(title){
        this.title = title
        console.log(this.title);
    }

    set welcomeMsg(value){
        console.log(value);
        // console.log(`his ${this.title}, welcome to webbrain`);
    }
    get welcomeMsg(){
        console.log(`his ${this.title}, welcome to webbrain`);
    }
}

let user1 = new users("eshmat");
let user2 = new users("toshmat");
user1.welcomeMsg;
user2.welcomeMsg;
*/

//  class larda computed name 
class users {
    ["aa"+"bb"](title){ // ["aa"+"bb"] -- bu funcsiya hisoblanadi
        console.log(title);
    }
}

let usr1 = new users()
usr1.aabb("webbrain")