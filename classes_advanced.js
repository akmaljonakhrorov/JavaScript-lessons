// 30 april, 2024

// static  classes and fcuntions, advanced 3/4
/* static holat
class webbrain {
    age=0;

    getAge(){
        console.log(++this.age);
    }
}

let st1 = new webbrain()
let st2 = new webbrain()

st1.getAge();
st1.getAge();
st2.getAge();

output: 
1
2
1 // 1 yana funksiya boshidan yana qaytaryabdi. Buni oldini olish uchun  nima qilish kerak:
*/
// static holatni oldini olish uchun quyidagicha o'zgartrish kiratamiz:
/*
class webbrain {
    age = 0;
    static year = 0;

    getYear(){
        console.log(++webbrain.year); // staticda class nomi o'zi beriladi
    }
    getAge(){
        console.log(++this.age); // bunda this bilan malumot olinadi
    }
}

let st1 = new webbrain();
let st2 = new webbrain();

st1.getYear()
st1.getYear()
st2.getYear()
console.log("============");
st1.getAge()
st1.getAge()
st2.getAge()

output: // natijaga etibot ber tartib bilan ortib borayabdi.
1
2
3 
*/

/*Agar class ni ichidagi variable va 
funktsiya static bo'lsa, u holda static function class
nomidan so'ng nuqta bilan chaqiriladi. masalan quyidagiga qarang */
/*
class webbrain {
    age = 0;
    static year = 0;

static getYear (){
    console.log(++this.year);
}
}

webbrain.getYear()
webbrain.getYear()
webbrain.getYear()
webbrain.getYear()
webbrain.getYear()
webbrain.getYear()
*/

// private classes and mixins 
/*public variable va protected variable ni farqi
shundaki publci variable ga class {}ni tashqarisida 
chaqirsa boladi, ammo protected variable ni chaqirib bo'lmaydi.
Va Syntaxis da public variable _name bilan yoziladi,
protected variable esa #protected korinishida yoziladi*/
/*
class webbrain {
    _name = "najot talim";
    #protected = "web";
    getName(){
        console.log(this.#protected);
    }
}

let pb = new webbrain();
console.log(pb.getName());
*/
/* protected variableni qiymatini (valuesini) setter va 
gtter orqali o'zgratirsa bo'ladi */
// masalan:
class webbrain {
    #protected = "dont touch it!"
    get getName(){
        console.log(this.#protected);
    }
    set getName(vl){
        this.#protected = vl;
    }
} 

let pr = new webbrain();
pr.getName
pr.getName = "I wanna touch it, what you can do man";
pr.getName
