 /* 7 may, 2024 year
today, we will learn following things:
-generator function 
-loop with generator function
-generator instance
-id generating with generator function
*/

/* generator function -- bu funksiya malumbir vaqt ishlab malum bir vaqt 
to'xtab turadigan funksiya
*/

// generator function * bilan yoziladi
/*
function* getData(){
    yield 1; // yield bu return ga o'xshagan buyruq
    yield 2;
}

const generator = getData();
const gr = getData();
console.log(generator.next());
console.log(gr.next());
*/
// generator functionni for loop qilsa bo'ladi, masalan:
/*
for(vl of generator){
    console.log(vl);
}
*/
// generator functionni array ni spread operatori bilan ishlatsa boladi, masalan [...generator]:
/*console.log(...generator); */

            // generatorga malumotni qo'shish va o'chirishdagi muammolarni hal etish:
// maslan array ichidagi objectdan malumotni o'chirish:

let users = [
    {id:1,name : "aaaa"},
    {id:2,name : "bbbb"},
    {id:3,name : "cccc"},
    {id:4,name : "dddd"},
];
/*
malumot o'chirishga msiol :
const onDelete = (id)=>{
    let res = users.filter((vl)=> vl.id !==id);
    users = res
}

onDelete(1);
console.log(users);
*/

/* malumot qo'shish: */
/*
function* getData(){
    yield 1; // yield bu return ga o'xshagan buyruq
    yield 2;
}

const generator = getData();
const gr = getData();
console.log(generator.next());
console.log(gr.next());

const add = (usr)=>{
   users =  [...users, {id:generate.next().value, name: usr}]
}

add("Gulbashakar1");
add("Gulbashakar2");
add("Gulbashakar3");
console.log(users);
*/

//                      users dagi id larni avtomatik generate qilish usuli
/*
function* getData(){
    let id = users.length;
    while(true){
        yield ++id;
    }  
}

const generate = getData();
console.log(users);
*/

// SAvol: generator function nima uchun kerak? 
/* JAvob: function ichidagi codelarni navbatma navbat orasida pauza bilan ishlatish uchun kk.
masalan: */

/*
 function* generatorFunc(){
    yield 1;
    yield 2;
    yield 3;
}

const generatorObject = generatorFunc();
const generatorObject2 = generatorFunc();
console.log(generatorObject.next());
console.log(generatorObject.next()); 
 */


/* yana bir misol: 

function* genFunction2(){
    let id = 1;
    while(true){
        yield id
        id++
    }
}
const obj = genFunction2()
console.log(obj.next());
*/

/* 2 misol, increment yasash: 
function* generateFunc(){
    let id = 1;

    while(true){
        const increment = yield id;

        if(increment != null){
            id+=increment
        }else{
            ++id
        }
    }
}

let objGen = generateFunc()
console.log(objGen.next());
console.log(objGen.next(10));
*/