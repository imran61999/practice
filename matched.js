const numbers = [38, 399, 39,49,46 , 37, 35];
 
for(i=0 ; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

//  for of loop
 for(const i of numbers){
    console.log(i);
 }

 const some = [
    {id: 36 , name: "walton", price: 7000},
    {id: 46 , name: "redmi", price: 7000},
    {id: 26 , name: "node 5", price: 7000},
    {id: 76 , name: "redmi", price: 7000},
    {id: 96 , name: "sumsung", price: 7000},
    {id: 06 , name: "htc", price: 7000},
    {id: 16 , name: "vivo", price: 7000},
    {id: 396 , name: "node 5", price: 7000},
    {id: 360 , name: "shympony", price: 7000}
 ]

 for(const i of some){
    // console.log(i);
 }

 function matchedsome(some , search){
    const matched = []
    for(const i of some){
        if(i.name.includes(search)){
            matched = matched.push(i);
        }
    }
 }

const result = matchedsome(some , "name");
console.log(result);