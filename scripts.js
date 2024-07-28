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

function openProductModal(title, description, price, sizes, colors, mainImage, additionalImages) {
    const modal = document.getElementById('productModal');
    const productImage = document.getElementById('productImage');
    const productTitle = document.getElementById('productTitle');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const productSize = document.getElementById('productSize');
    const productColor = document.getElementById('productColor');
    const productThumbnails = document.getElementById('productThumbnails');

    productImage.src = mainImage;
    productTitle.textContent = title;
    productDescription.textContent = description;
    productPrice.textContent = `Precio: ${price}`;

    // Clear previous options and thumbnails
    productSize.innerHTML = '';
    productColor.innerHTML = '';
    productThumbnails.innerHTML = '';

    // Add sizes
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        productSize.appendChild(option);
    });

    // Add colors
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        productColor.appendChild(option);
    });

    // Add thumbnail images
    additionalImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
        img.onclick = () => {
            productImage.src = image;
            document.querySelectorAll('.thumbnails img').forEach(thumb => thumb.classList.remove('selected'));
            img.classList.add('selected');
        };
        productThumbnails.appendChild(img);
    });

    // Set the first thumbnail as selected
    if (productThumbnails.firstChild) {
        productThumbnails.firstChild.classList.add('selected');
    }

    modal.style.display = 'flex';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

function addToCart() {
    // Add product to cart logic
    alert('Producto agregado al carrito');
}
