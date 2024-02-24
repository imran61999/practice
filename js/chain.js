const products ={
    count: 590,
    data: [
        {id: 89, name:'nokia mobile', price: 5000},
        {id: 99, name:'samsung mobile', price: 9000}
    ]
}
console.log(products.data[1].price);

// nested object
const student = {
    id: 90,
    name: 'imran',
    address:{
        city:'chittagong',
        parmanent:{
            first: 'rungonia',
            second: 'pomra',
            third: 'kondokar para'
        }
    }
}

console.log(student.address.parmanent.third)