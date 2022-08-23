class Productlist {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts()
        this.render()
    }
    _fetchProducts(){
        this.goods = [
            {id:1 ,title: 'Notebook' ,price:2000},
            {id:2 ,title: 'Mouse' ,price:200},
            {id:3 ,title: 'Keyboard' ,price:200},
            {id:4 ,title: 'Gamepad' ,price:50},
        ]
    }
    render() {
        const block = document.querySelector(this.container);
        for ( let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
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
            <h2 class="heading2">${this.title}</h2>
            <p class="value">${this.price}</p>
            <button class="btn">Купить</button>
        </div>`;
    }
    getSum() {
        let i = 0;
        this.goods.array.forEach(item => {
            i += product.price;
        });
        console.log(i)
    }
}


let list = new ProductList();
list.render();
list.getSum();

class Basket{
    addItem(){

    }

    removeItem(){

    }

    render(){

    }
}

class BasketElement {
    render(){

    }
}











// const products = [
//     {id:1 ,title: 'Notebook' ,price:2000},
//     {id:2 ,title: 'Mouse' ,price:1000},
//     {id:3 ,title: 'Keyboard' ,price:2500},
//     {id:4 ,title: 'Phone' ,price:15000},
// ];
.



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


