const images = [
  'src/images/enchente1.png',
  'src/images/enchente2.png',
  'src/images/enchente3.png'
];

let currentIndex = 0;

function changeBackground(hero) {
  currentIndex = (currentIndex + 1) % images.length;
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function initSlideshow() {
  const hero = document.querySelector('header.hero');
  hero.style.backgroundImage = `url('${images[0]}')`;
  setInterval(() => changeBackground(hero), 8000);
}

document.addEventListener('DOMContentLoaded', initSlideshow);
