function add(a , b , c){
    // console.log(arguments)
    // console.log(arguments[2])
    const args=[...arguments]
    console.log(args);
    const result = a + b + c ;
    return result;
}

const argu = add(5 , 67, 3 , 3, 6, 34);
// console.log(argu);
console.log(add.length);