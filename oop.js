

// 26 april, 2024 yil
/*
    ushu variable lari va funksiyasi alohida bo'lgan code ni OOP ko'rinishida yozish kk.
let baseSalary = 30_000;
let overtime = 10;
let rate  = 20;

function getWate(baseSalary,overtime,rate ){
    return baseSalary + (overtime*rate);
}
*/

/* yuqoridagi code ni OOP ko'rinishida quyidagicha yoziladi.

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWate(baseSalary,overtime,rate ){
        return baseSalary + (overtime*rate);
    }
};
employee.getWate();
*/

/*
// factory function 
function createCircle(radius) {
    return {
        radius, //radius=radius
        draw: function(){
            console.log("draw");
        }
    };
}


const circle = createCircle(1);
// circle.draw();
*/
// constructur dan foydalanib object yaratamiz.
// constructor bu funksiya.
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);
*/
// constructor property
/*
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3 ... 
*/
/*
class animals {
    speed (velocity) {
        console.log(`runs ${velocity}km per hour`);
    }
}

class rabbit {
    info(name){
        console.log(`${name}ni 2ta qulog'i bor`);
    }
}

let animal = new animals();
let rb = new rabbit()
animal.speed(12)

rb.info("quyon")

class cars {
    info(color){
        console.log(`the color is ${color} `);
    }

}

let car  = new cars()
car.info("black")
*/
                // 27 april, 2024

// Animal ichidagi malumotlarni rabbit va car ichiga extends key word orqali olamiz.
/*
class animals {
    constructor(name){
        this.name = name;
    }
    parent(){ // bu parent code 
        console.log(`U r calling parent`); 
    }
    speed (velocity) {
        console.log(`runs ${velocity}km per hour`);
    }
}

class rabbit  extends animals{
    child(){ // bu child code 
        console.log("u r calling child");
    }
    
    info(name){
        this.child();  // bu key word orqali child functionni chaqirish
        super.parent(); // super key word orqali paernt functiondagi(animalsdagi) parent() chaqiririlyabdi
        console.log(`${name}ni 2ta qulog'i bor`);
    }
}

let animal = new animals();
let rb = new rabbit()
animal.speed(12)
rb.info("quyon")

class cars extends animals{
    info(color){
        console.log(`the color is ${color} `);
    }
}
let car  = new cars()
car.info("black");
*/
// ...args nima 
class animals {
    constructor(name){
        this.name = name;
    }
}

class rabbit  extends animals{
    constructor(...args){
        super(...args)
    }
   
}

let rb = new animals("Quyon")
