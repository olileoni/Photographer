const burgerBtn = document.querySelector('.header__burger');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open')
})