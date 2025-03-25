// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrossel (Home)
const images = document.querySelectorAll('.carousel img');
if (images.length > 0) {
    let currentImage = 0;
    function nextImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }
    images[0].classList.add('active');
    setInterval(nextImage, 5000);
}

// Botões expansíveis (Serviços)
const buttons = document.querySelectorAll('.servico button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const detalhes = button.nextElementSibling;
        detalhes.style.display = detalhes.style.display === 'block' ? 'none' : 'block';
    });
});