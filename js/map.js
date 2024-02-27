// const numbers = [2, 4, 6, 8, 10];
// const result = [];

// for(const number of numbers){
//     const count= number *2 ;
//     result.push(count);
// }

// console.log(result);

const numbers = [2, 4, 6, 8, 10];

function doubleIt(num){
    return num*2;
}

const result = numbers.map(doubleIt);
// console.log(result);

// arrow function
const defult = numbers.map(n => n*2);

