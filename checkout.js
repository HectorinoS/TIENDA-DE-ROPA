document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkoutForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const creditCardDetails = document.getElementById('creditCardDetails');

    // Manejo del cambio en el método de pago
    paymentMethodSelect.addEventListener('change', (event) => {
        if (event.target.value === 'creditCard') {
            creditCardDetails.style.display = 'block';
        } else {
            creditCardDetails.style.display = 'none';
        }
    });

    // Manejo del envío del formulario
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Aquí puedes agregar lógica para procesar el pago

            // Limpiar el carrito
            localStorage.removeItem('cart');

            // Mostrar el mensaje de confirmación
            form.style.display = 'none';
            confirmationMessage.style.display = 'block';
        });
    }
});
