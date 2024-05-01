                // 01/05/2024
                // advanced class
/* Mixins bu -- class ichiga object ichidagi code larni ko'chirish, masalan quyifagiga qarang: */
class users {
    getName(){
        console.log("no name");
    }
};

let obj = {
    info(){
    console.log("Im frontend developer");
    }
};

Object.assign(users.prototype, obj) // users ni ichiga prototype qilib ko'chiriladi.
let usr = new users();
usr.info();