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

function openProductModal(title, description, price, sizes, colors, mainImage, additionalImages, id) {
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

    // Store product ID in the modal
    modal.dataset.productId = id;

    modal.style.display = 'flex';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

function addToCart() {
    const modal = document.getElementById('productModal');
    const productId = modal.dataset.productId;
    const productTitle = document.getElementById('productTitle').textContent;
    const productPrice = parseFloat(document.getElementById('productPrice').textContent.replace('Precio: ', '').replace('$', '').replace(',', ''));
    const productSize = document.getElementById('productSize').value;
    const productColor = document.getElementById('productColor').value;
    const quantity = 1; // Puedes ajustar la cantidad según sea necesario

    const product = {
        id: productId,
        title: productTitle,
        price: productPrice,
        quantity: quantity,
        size: productSize,
        color: productColor,
        image: document.getElementById('productImage').src // Asegurarse de que la imagen esté incluida
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostrar el mensaje de notificación
    const notification = document.getElementById('notification');
    if (notification) {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000); // Ocultar el mensaje después de 3 segundos
    }
}
