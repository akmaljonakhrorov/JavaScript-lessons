
/* task-1, find the average element in array

const numbers = [1, 2, 3, 4, 5];
const average = numbers.reduce((total, num)=> total + num) / numbers.length;
console.log(average); */

/* task-2, flating the multi dimaensional array into a single dimensional array 

const numbers = [[1,2], [3,4],[5,6]]
const flated = numbers.reduce((total, nums)=> total.concat(nums), []); 
console.log(flated); */

/* task-3,Counting the occurance of a particular element in an array */
// bir xil raqam necha marta takrorlanadi:
/* const numbers = [1, 2, 3, 4, 5, 2, 3,2];
const count = numbers.reduce((total, nums)=> {
    if(nums === 2) {
        total++
    }
    return total;
}, 0)
console.log(count); */

/* task-4, Converting an array of objects into an object */
// type ni o'zgartir: 
/* const people  =  [
    {name: "john", age: 30},
    {name: "peter", age: 33},
    {name: "michael", age: 35},
]

const peolpleObj = people.reduce((obj, person)=> {
    obj[person.name] = person.age;
    return obj;
}, {});

console.log(peolpleObj); */


