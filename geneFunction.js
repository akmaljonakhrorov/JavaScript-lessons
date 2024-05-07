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

function* getData(param){
while(true){
    let gn = yield ++i;
    if(gn) i += gn; 
    }
}
const generator = getData();
console.log(generator.next())
console.log(generator.next(3))
console.log(generator.next(4))