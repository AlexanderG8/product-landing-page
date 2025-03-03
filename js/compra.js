document.addEventListener('DOMContentLoaded', () => {
    const quantity = document.getElementById('quantity');
    const decrease = document.getElementById('decrease');
    const increase = document.getElementById('increase');
    const quantityDisplay = document.getElementById('quantity-display');
    const totalPrice = document.getElementById('total-price');
    const whatsappButton = document.getElementById('whatsapp-button');
    const basePrice = 299;

    // Función para actualizar el precio total
    function updatePrice() {
        const total = basePrice * parseInt(quantity.value);
        quantityDisplay.textContent = quantity.value;
        totalPrice.textContent = `S/${total}`;
    }

    // Evento para el botón de disminuir cantidad
    decrease.addEventListener('click', () => {
        if (parseInt(quantity.value) > 1) {  // No permite cantidades menores a 1
            quantity.value = parseInt(quantity.value) - 1;
            updatePrice();
        }
    });

    // Evento para el botón de aumentar cantidad
    increase.addEventListener('click', () => {
        if (parseInt(quantity.value) < 10) {  // Limita la cantidad máxima a 10
            quantity.value = parseInt(quantity.value) + 1;
            updatePrice();
        }
    });

    // Validar cambios directos en el input de cantidad
    quantity.addEventListener('change', () => {
        if (quantity.value < 1) quantity.value = 1;    // Mínimo 1
        if (quantity.value > 10) quantity.value = 10;  // Máximo 10
        updatePrice();
    });

    // Botón de WhatsApp
    whatsappButton.addEventListener('click', () => {
        // Obtengo los valores seleccionados
        const size = document.getElementById('size').value;
        const color = document.querySelector('input[name="color"]:checked')?.value || 'natural';
        const qty = quantity.value;
        const total = basePrice * parseInt(qty);

        // Mensaje
        const message = `Hola, me interesa comprar EcoProduct con las siguientes especificaciones:
- Tamaño: ${size}
- Color: ${color}
- Cantidad: ${qty}
- Total: $${total}`;

        // Codifico el mensaje y abre WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/525555555555?text=${encodedMessage}`, '_blank');
    });

    // Funcionalidad de la galería de imágenes
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-grid img');

    // Permite intercambiar las imágenes al hacer clic en las miniaturas
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const tempSrc = mainImage.src;
            mainImage.src = thumb.src;
            thumb.src = tempSrc;
        });
    });

    function showSlide(index) {
        const carousel = new bootstrap.Carousel(document.getElementById('productCarousel'));
        carousel.to(index);
    }
});