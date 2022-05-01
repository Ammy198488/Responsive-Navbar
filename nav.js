const navlinks = document.querySelector('.navlinks');
const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navlinks.classList.toggle('active');
});
ul.addEventListener('click', () => {
    navlinks.classList.remove('active');
});