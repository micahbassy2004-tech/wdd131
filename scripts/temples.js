// temples.js

// Hamburger toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambutton.textContent = mainnav.classList.contains('open') ? '✖' : '☰';
});

// Footer dynamic info
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
