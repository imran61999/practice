// function buy() {
    

//     console.log("your function active");
//     // buyBtn.parentNode.parentNode.childNodes
//     const descriptionBuy = document.getElementById('description');
//     descriptionBuy.innerText = 'successed you function';
//     const li = document.createElement('p');
//     li.append()

// }

// document.getElementById('buy-btn').addEventListener('click', function(){
//     const container =document.getElementById('description');
//     const p = document.createElement('p');
//     p.innerText = 'successed your function';
//     p.appendChild('container');
// })

const cards = document.querySelectorAll('card-body');

for( let index =0; index<cards.length; index++){
    const element = cards[index];
    console.log(element);
}
