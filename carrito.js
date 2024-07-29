document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Contenido del carrito desde localStorage:', cart);

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

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    console.log('Intentando eliminar producto con ID:', productId);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Carrito antes de eliminar:', cart);

    cart = cart.filter(item => item.id !== productId);
    console.log('Carrito después de eliminar:', cart);

    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Recargar la página para actualizar la vista
}
