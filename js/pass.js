const num1 = 8;
const num2 = 9;

function multi(a , b){
    const result = a * b;
    return result;
}
console.log(num1);
const output = multi(num1 , num2);
console.log(output);

// object and array of pass by referance

let student1 = {name: 'imran' ,partner: "raisa"}
let student2 = {name: 'hamid' ,partner: "totini"}

function makemove(couple1 , couple2){
    student1.name = 'joi'
}

console.log(student1 , student2)
makemove(student1 , student2)

console.log(student1 , student2)