document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('productDetails');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(product => {
                const detailsDiv = document.createElement('div');
                detailsDiv.classList.add('product-details-container');

                detailsDiv.innerHTML = `
                    <div class="product-info">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <h2>${product.title}</h2>
                        <p><strong>Price:</strong> $${product.price}</p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                    </div>
                `;

                productDetails.appendChild(detailsDiv);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    } else {
        console.error('Product ID not found in URL parameters');
    }
});

function goBack() {
    window.history.back();
}
