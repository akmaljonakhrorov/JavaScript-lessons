
// 17 may, 2024 year.

        /* 
        You create a Proxy with two parameters:
        target: the original object 
        which you want to proxy
        handler: an object that 
        defines which operations will be intercepted 
        and how to redefine intercepted operations.
        */
// 1-example:
const target = {
    message1: "hello",
    message2: "everyone",
}

const handler1 ={};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);
console.log("===========");
// 2-example: 

const handler2 = {
    get(target, prop, receiver){
        return "world";
    },
};

const proxy2 = new Proxy(target, handler2);

console.log(proxy2.message1);
console.log(proxy2.message2);