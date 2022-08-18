const products = [
    {id:1 ,title: 'Notebook' ,price:2000},
    {id:2 ,title: 'Mouse' ,price:1000},
    {id:3 ,title: 'Keyboard' ,price:2500},
    {id:4 ,title: 'Phone' ,price:15000},
];



const renderProduct = (products) => 
    `<div class="card">
        <img src="img/card1.svg" alt="#">
        <h2 class="heading2">${products.title}</h2>
        <p class="value">${products.price}</p>
        <button class="btn">Купить</button>
    </div>`;

const renderPage = list => {
    document.querySelector('.products').innerHTML = 
        (list.map(product => renderProduct(product)))
};
    

renderPage(products);


