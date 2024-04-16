
// 15 april, 2024 yil

// RECURSION ni O'RGANISH:


// let res  = 0;
// const sum = (n) => {
//     if(n === 1) return (res = res + 1);
//     else {
//         res+= n;
//         return sum (n-1);
//     }
// };
// sum(4);
// console.log(res);



let company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Michael", salary: 1500 },
    ],

    development: {
        sities: [
            { name: "Peter", salary: 1000 },
            { name: "Michael", salary: 1000 },
        ],
        dev: [
            { name: "Peter", salary: 1000 },
            { name: "Michael", salary: 1000 },
        ],
        internals: [{ name: "Jack", salary: 1000 }],
    },
};

// answer 1 : 
/* const calculateTotalSalary = (department)=> {

    let totalSalary = 0;
    if(Array.isArray(department)){
        department.forEach((employee)=> {
            totalSalary += employee.salary;
        });
    } else {
        Object.values(department).forEach((deptSalary)=>{
            totalSalary += calculateTotalSalary(deptSalary)
        });
    }
    return totalSalary;
}

Object.entries(company).forEach(([dept, employees])=> {
    const totalSalary = calculateTotalSalary(employees);
    console.log(`total salary: ${dept}, ${totalSalary}`); 
}) */

// answer 2 :

/* function getCalc(company) {
    if(Array.isArray(company)) {
        return company.reduce((prev, current)=> prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(company)) {
            sum += getCalc(subdep);
        }
        return sum;
    }
}

console.log(getCalc(company));*/

// recursionga misollar youtube dan: 
// ESLATMA: funksiyani ichida yana o'sha funsiyani qaytarish recursion deyiladi.
/* function power(number, exponent) {
    if(exponent===1) return number;
    return number * power(number, exponent - 1)
}
console.log(power(2, 5)); */

// fibanacci number ga misol, recursion() funksiya bilan ishlash
/* ESLATMA: recursion bu bitta funksiya ichida yana o'zi chaqiriladigan funksiya */
//  masalan :

// factorial songa misol: 
/*
function factorial(n) {
    // 1 base condition:
    if(n==1 || n==0)
    return 1;
    // 2 recursive part of the function
    else
    return n * factorial(n-1);
}
console.log(factorial(4));
*/

// array ni index ni chiqaraduigna recursive funksiya:
/* function printNumber(index, arr){
    // write base condition (ya'ni qachondir tugashi kerak)
    if(index === arr.length) return;
    console.log(arr[index]);
    printNumber(index + 1, arr);
}
printNumber(0, [1,2,3,4,5]) 
*/

/* 2-misol: 
function fib(n) {
    if(n===2 || n===1) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(10)); 
*/
