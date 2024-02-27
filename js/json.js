const shop = {
    name: 'imran',
    address: {
        street: 'malir hat',
        road: 'kaptai',
        city: 'chittagong'
    },
    products: ['laptop', 'keyboard', 'mouse', 'ssd'],
    invest: 700000,
    isopen: false,
    isnew: true
}

const stringified = JSON.stringify(shop);
console.log(stringified);
const parsed = JSON.parse(stringified);
console.log(parsed);