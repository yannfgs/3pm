// Seção 1: Banner Rotativo
let currentImgIndex = 0;
const images = document.querySelectorAll('.banner-img');

function rotateImages() {
  images[currentImgIndex].style.display = 'none';
  currentImgIndex = (currentImgIndex + 1) % images.length;
  images[currentImgIndex].style.display = 'block';
}

images[0].style.display = 'block'; // Mostrar a primeira imagem
setInterval(rotateImages, 3000); // Mudar a imagem a cada 3 segundos
