const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'

class Productlist {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }
    
}   

getProducts() {
    return fetch (`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
}

calcSum() {
    return this.goods.reduce((accum,item) => accum +=item.price, 0);
}


render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
        const productObj = new ProductItem(product);
        block.insertAdjacentHTML('beforeend', productObj.render());
    }
}


class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }
    render() {
        `<div class="card">
            <img src="img/card1.svg" alt="#">
            <div class="desc">
                <h2 class="heading2">${this.title}</h2>
                <p class="value">${this.price}</p>
                <button class="btn">Купить</button>
            </div>
        </div>`;
    }
}


let list = new ProductList();
list.render();
list.getSum();

class Basket{
    constructor (container = '.cart') {    
        this.container = container;
        this.goods = [];
        this.clickBasket()
        this.getBasketItem()
            .then(data =>{
                this.goods = data.contents
                this.render ();
            })
    }

    getBasketItem() {
        return fetch (`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error =>{
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    clickBasket () {
        document.querySelector(".button").addEventListener('ckick', () =>{              
            document.querySelector(this.container).classList.toggle('hidden');
        })
    }
}

class BasketElement {
    render(product){
        return `<div class = "cart-item" data-id="${product.id_product}">
                <div class = "product-bio">
                <img src="img/card1.svg" alt="#">
                <div class = "product-desc">
                <p class = "product-title">${product.product_name}</p>
                <p class = "product-quantity">Quantity: ${product.quantity}</p>
            <p class = "product-single-price">${product.price} each</p>
            </div>
            </div>
            <div class= "right-block>
                <p class = "product-price"> ${product.quantity * product.price} $</p>
                <button class = "del-btn" data-id="${product.id_product}">x</button>
            </div>
            </div>`
    }
}

let obj = new Basket ();











// const products = [
//     {id:1 ,title: 'Notebook' ,price:2000},
//     {id:2 ,title: 'Mouse' ,price:1000},
//     {id:3 ,title: 'Keyboard' ,price:2500},
//     {id:4 ,title: 'Phone' ,price:15000},
// ];




// const renderProduct = (product) => 
//     `<div class="card">
//         <img src="img/card1.svg" alt="#">
//         <h2 class="heading2">${product.title}</h2>
//         <p class="value">${product.price}</p>
//         <button class="btn">Купить</button>
//     </div>`;

// const renderPage = list => {
//     document.querySelector('.products').innerHTML = 
//         (list.map(product => renderProduct(product)))
// };
    

// renderPage(products);


