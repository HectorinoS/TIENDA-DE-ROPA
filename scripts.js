document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

    showSlide(currentIndex);
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
    modal.style.display = 'none';
}

function addToCart() {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    alert('Producto agregado al carrito');
    closeProductModal();
}
