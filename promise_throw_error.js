

// 04/05/2024
                                // Promise is used for requesting from the server
/*
BUGUNGI DARSDA QUYIDAGILAR O'RGANILADI:
promise 
throw error
finally 
facebook login example

promise: .then, .catch,.finally
promise chaining
promise All,
*/

// const webInternet  = true;

// const getData  = ()=> {
//     return new Promise((resolve, reject)=>{

//         if(webInternet) {
//             resolve("there is the Internet")
//         } else {
//             reject("no connection")
//         }
//     })
// }

// getData().then((exist)=>{
//     console.log(exist);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("finished");
// })

                                // promise All -- bu bir necha promise larni qabul qiladi va array ko'rinishida qabul qiladi
/*
let user = Promise.all([
    new Promise((resolve, reject)=>{

        if(webInternet){
            resolve("there is Internet")
        } else {
            reject('no connection')
        }
    }),
    new Promise((resolve, reject)=>{
        if(webInternet){
            resolve("I need it" )
        } else {
            reject("find the Internet for me")
        }
    })

]);

user.then((result)=>{
    console.log(result);
}).catch(output => console.log(output))
*/
                        /* synchronous vs asynchronous */

/* synchronous va asynchronous function lar decloration, 
expression va arrow functionlar bilan har xil yoziladi
*/
// maslan: 
/*
async function get(){} // function decloration da yozilishi
const asychrFunc = async()=>{} // arrow functionda yozilishi
*/

const webInternet  = true;
let user = new Promise((resolve, reject)=>{

        if(webInternet){
            resolve("there is Internet")
        } else {
            reject('no connection')
        }
})

/* asych funks  ichidagi variable await bilan kutiladi,  
yani awaitga tenglanadi, awaitdan keyin promise yoziladi.*/

const get = async () =>{
    let res = await user;
    console.log(res);
    console.log("finished");
}
get();
