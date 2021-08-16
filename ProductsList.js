import productsData from '/Praga-niezwykla/productsData.js';

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
                            <div class="boxes__box-item--photo-container" style="background-image: url('/Praga-niezwykla/images/${product.photo}')">
                            </div>
                        </div>
                        <div class="boxes__box-description">
                            <h2>${product.name}</h2>
                            <p>${product.description}</p>
                            <div class="boxes__box-price"><p>${product.price} PLN</p>
                                // <button class="add-to-cart-btn">ZAMÓW</button>
                                <a class="add-to-cart-btn" href="/Praga-niezwykla/pages/contact.html"></a>
                            </div>
                        </div>
                    </li>`
                )}
            </ul>
        `;
	}
}



export default ProductsList;