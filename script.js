var swiper = new Swiper('.swiper-container', {
    loop: true,  // Habilitar bucle infinito
    autoplay: {
        delay: 3000,  // Intervalo de tiempo entre las transiciones automáticas (en milisegundos)
        disableOnInteraction: false,  // Permitir que el desplazamiento automático continúe incluso si el usuario interactúa con el slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Permitir hacer clic en la paginación para navegar directamente a una imagen específica
    },
});