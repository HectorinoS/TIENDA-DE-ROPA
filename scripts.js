document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el slider
    const slides = document.querySelectorAll('.carousel-slide');
    const wrapper = document.querySelector('.carousel-wrapper');
    let currentIndex = 0;
    const totalSlides = slides.length;

    const showSlide = (index) => {
        const offset = -index * 100; // Desplazamiento en porcentaje
        wrapper.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    };

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    showSlide(currentIndex); // Muestra la primera diapositiva

    // Inicializar el modal
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
});

function openProductModal(title, description, price, sizes, colors, imageSrc) {
    const modal = document.getElementById('productModal');
    document.getElementById('productImage').src = imageSrc;
    document.getElementById('productTitle').innerText = title;
    document.getElementById('productDescription').innerText = description;
    document.getElementById('productPrice').innerText = `Precio: ${price}`;

    const sizeSelect = document.getElementById('productSize');
    sizeSelect.innerHTML = '';
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        sizeSelect.appendChild(option);
    });

    const colorSelect = document.getElementById('productColor');
    colorSelect.innerHTML = '';
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        colorSelect.appendChild(option);
    });

    modal.style.display = 'block';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        // Opcional: Limpia el contenido del modal
        document.getElementById('productImage').src = '';
        document.getElementById('productTitle').innerText = '';
        document.getElementById('productDescription').innerText = '';
        document.getElementById('productPrice').innerText = '';
        document.getElementById('productSize').innerHTML = '';
        document.getElementById('productColor').innerHTML = '';
    }
}

function addToCart() {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    alert('Producto agregado al carrito');
    closeProductModal();
}
