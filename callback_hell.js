
// example callback hell

function callbackHell(){
    setTimeout(()=>{
        let string= "hello";
        console.log(string);
        setTimeout(()=>{
            console.log("how are you doing...");
        },2000)
    },1000)
}

callbackHell()