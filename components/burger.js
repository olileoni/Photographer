const burgerBtn = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const body = document.body

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open')
    body.classList.toggle('lock')
})