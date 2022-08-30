const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }
    _getProducts() {
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
            block.insertAdjacentHTML('beforeend',productObj.render)
        }
    }
    
}   



class ProductItem{
    constructor(product){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
            <img src="img/card1.svg" alt="#">
            <div class="desc">
                <h3 class="heading3">${this.title}</h3>
                <p class="value">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>
        </div>`;
    }
}

let list = new ProductsList();

class Basket{
    constructor (container = '.cart-block') {    
        this.container = container;
        this.goods = [];
        this._clickBasket()
        this._getBasketItem()
            .then(data =>{
                this.goods = data.contents;
                this.render ();
            })
    }

    _getBasketItem() {
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

    _clickBasket () {
        document.querySelector(".btn-cart").addEventListener('ckick', () =>{              
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }
}

class BasketItem {
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


