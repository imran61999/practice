const addproduct = () => {
    const productfield = document.getElementById('product-name');
    const quantitydfield = document.getElementById('product-quantity');

    const product  =productfield.value;
    const quantity = quantitydfield.value;

    productfield.value = '';
    quantitydfield.value = '';

    displayProduct(product , quantity);
    saceproducttolocalstorage(product ,quantity);
}

const displayProduct = (product , quantity) =>{
    const ul= document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getstoedshoppingcart = () => {
    let cart = {};
    const storedcart = localStorage.getItem('cart');
    if(storedcart){
        cart =JSON.parse(storedcart);
    }
    return cart;
}

const saceproducttolocalstorage = (product , quantity) => {
    const cart = getstoedshoppingcart();
    cart[product] = quantity;
    const cartstringified = JSON.stringify(cart);
    // console.log(cartstringified);

    localStorage.setItem('cart', cartstringified)
}

const displayproductsfromlocalstorage = () =>{
    const savecart =getstoedshoppingcart();
    console.log(savecart);
}

displayproductsfromlocalstorage();