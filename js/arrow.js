// function declaration
function add(a,b){
    const sum = a + b;
    return sum;
}

// function expretion
const add2 = function(a,b){
    const sum = a +b;
    return sum;
}

// arrow function
const add3 = (a , b , c) => a + b + c
const sum =add3(48, 36, 46);
console.log(sum);