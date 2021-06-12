import productsData from './productsData.js';

const ProductsList = {

    addToCart: () => {
        document.getElementById("add-to-cart-btn").addEventListener("click",
        (e) => {
            console.log(e.target.value)
        })
    },
 
	render: () => {

		const products = productsData.productsData;

		return `<ul class="boxes__boxes-list">
                ${products.map(product =>
                    `<li key="${product.id}" class="boxes__box-item">
                        <div class="boxes__box-photo">
                            <div class="boxes__box-item--photo-container" style="background: url('../${product.photo}')">
                            </div>
                        </div>
                        <div class="boxes__box-description">
                            <h2>${product.name}</h2>
                            <p>${product.description}</p>
                            <div class="boxes__box-price"><p>${product.price} PLN</p>
                                <button class="add-to-cart-btn">ZAMÓW</button>
                            </div>
                        </div>
                    </li>`
                )}
            </ul>
        `;
	}
}



export default ProductsList;