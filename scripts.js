// Función para abrir el modal con los detalles del producto
function openProductModal(name, description, price, sizes, colors) {
    document.getElementById('product-name').innerText = name;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;

    // Aquí deberías cargar la imagen del producto en el modal
    // Reemplaza '' con la URL de la imagen del producto
    document.getElementById('product-image').src = '';

    const sizeSelect = document.getElementById('product-size');
    sizeSelect.innerHTML = '';
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        sizeSelect.appendChild(option);
    });

    const colorSelect = document.getElementById('product-color');
    colorSelect.innerHTML = '';
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        colorSelect.appendChild(option);
    });

    document.getElementById('product-modal').style.display = 'block';
}

// Función para cerrar el modal
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Función para simular agregar al carrito
function addToCart() {
    alert('Producto agregado al carrito');
    closeProductModal();
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                slide.classList.add('active');
            } else {
                slide.style.display = 'none';
                slide.classList.remove('active');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    showSlide(currentIndex);
});
