document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const checkoutButtonContainer = document.getElementById('checkoutButtonContainer');
    const totalAmountElement = document.getElementById('totalAmount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(product => {
            const price = product.price ? product.price.toFixed(2) : '0.00';
            const quantity = product.quantity || 1;
            totalAmount += (product.price || 0) * quantity;

            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image || 'default-image.jpg'}" alt="${product.title}">
                <div>
                    <h4>${product.title}</h4>
                    <p>Precio: $${price}</p>
                    <p>Cantidad: ${product.quantity}</p>
                    <button onclick="removeFromCart('${product.id}')">Eliminar</button>
                </div>
            `;
            cartItems.appendChild(productElement);
        });

        // Mostrar el botón de proceder al pago si hay productos en el carrito
        checkoutButtonContainer.style.display = 'block';

        // Mostrar el total
        if (totalAmountElement) {
            totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
        }
    }
});

function removeFromCart(productId) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto del carrito?')) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
}

function showCheckoutForm() {
    document.getElementById('checkoutForm').style.display = 'block';
    document.getElementById('checkoutButtonContainer').style.display = 'none';
}
