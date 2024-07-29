document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(product => {
            console.log('Producto en el carrito:', product);

            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image || 'default-image.jpg'}" alt="${product.title}">
                <div>
                    <h4>${product.title}</h4>
                    <p>Precio: $${product.price.toFixed(2)}</p>
                    <p>Cantidad: ${product.quantity}</p>
                    <button onclick="removeFromCart('${product.id}')">Eliminar</button>
                </div>
            `;
            cartItems.appendChild(productElement);
        });

        // Mostrar el botón de proceder al pago si hay productos en el carrito
        checkoutButton.style.display = 'block';
    }
});

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Recargar la página para actualizar la vista
}
