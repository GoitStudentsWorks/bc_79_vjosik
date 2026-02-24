const openBtn = document.querySelector('.mobil-menu-btn')
const closeBtn = document.querySelector('.menu-close-btn');   
const menuContent = document.querySelector('.mobile-menu'); 
const links = document.querySelectorAll('.menu-item');

openBtn.addEventListener('click', () => {
  menuContent.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menuContent.classList.remove('is-open'); 
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menuContent.classList.remove('is-open');
    document.body.classList.remove('no-scroll'); 
  });
});