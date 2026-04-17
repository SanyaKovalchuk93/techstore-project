const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-mobile-menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--open');
  burger.classList.toggle('active');
});

document.querySelectorAll('.js-dropdown').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('mobile-menu__item--active');
  });
});