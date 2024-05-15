

// 14 May, 2024

// curry function bu ichida boshqa 
// funksiyalarni kotarib yuradigan 
// funksiya.
        /* masalan:
        function noName(a) {
            return (b)=>{
                return (c)=>{
                    console.log(a + b + c);
                }
            }
        }
        noName(1)(1)(1)
        */

// curry function arrow function misolida: 

const operation = (type)=>{
    return (a)=>(b)=>(c)=>{
        switch (type) {
            case "add":
                return a + b + c;                
                break;
            case "divide":
                return a / b / c;                
                break;
            case "multiply":
                return a * b * c;                
                break;
            default:
                break;
        }
    }
}

const math = operation("multiply");
console.log(math(1)(2)(3));

/* example 2:
// Regular function to add three numbers
function add(a, b, c) {
    return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Usage of the regular add function
console.log(add(2, 3, 4)); // Output: 9

// Usage of the curried add function
console.log(curriedAdd(2)(3)(4)); // Output: 9
*/
