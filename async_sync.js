/* 
                06/05/2024
 Async vs. Sync
 The problem with Async
 Convert to Callback
 Convert to Promises
 Different phases of a Promise
 How to use a Promise
 Why do we like Promises? Chaining
 Benefits of Promises over Callbacks
 Error handling, REJECT and .catch()
 Real world example with fetch()
 Summary

*/




// promise va async functionni birga ishlashi
/*
const data  = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        reslove("worked")
    },1000)
});

const getData = async ()=> {
    let res = await data; 
    console.log(res, "testing");
}

getData()
console.log("code running");
*/
                       