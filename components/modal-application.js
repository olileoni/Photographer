const applicationBtn = document.querySelector('.application__button');
const modal = document.querySelector('.modal-application');
const priceCards = document.querySelectorAll('.main-price__item');
const priceCardsSecond = document.querySelectorAll('.price__item')
const modalClose = document.querySelector('.modal-close');
const modalCloseBtn = document.querySelector('.modal-close__close');
const closeBtn = document.querySelector('.modal-application__close');
const submitBtn = document.querySelector('.modal-application__button');

priceCards.forEach((el) => {
    el.addEventListener('click', () => {
        modal.classList.add('open')
    body.classList.add('lock');
    })
})

priceCardsSecond.forEach((el) => {
    el.addEventListener('click', () => {
        modal.classList.add('open')
    body.classList.add('lock');
    })
})

applicationBtn.addEventListener('click', () => {
    modal.classList.add('open')
    body.classList.add('lock');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    body.classList.remove('lock');
})


submitBtn.addEventListener('click', () => {
    modalClose.classList.add('open');
    body.classList.add('lock');
})

modalCloseBtn.addEventListener('click', () => {
    modalClose.classList.remove('open');
    modal.classList.remove('open');
    body.classList.remove('lock');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('open');
        body.classList.remove('lock');
    }
});

document.querySelector('.modal-application .modal-application__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
    body.classList.remove('lock');
});

modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('lock');
})

document.querySelector('.modal-close .modal-close__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
    modal.classList.remove('open');
    body.classList.remove('lock');
});

modalClose.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    modal.classList.remove('open');
    event.currentTarget.classList.remove('open');
    body.classList.remove('lock');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalClose.classList.remove('open');
        modal.classList.remove('open');
        body.classList.remove('lock');
    }
});
