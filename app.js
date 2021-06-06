import ProductsList from './ProductsList.js';

const productsListDisplay = () => {
    const products = document.getElementById("boxes");
    products.innerHTML = ProductsList.render();
};

window.addEventListener("load", productsListDisplay());