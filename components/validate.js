let validation = new JustValidate('.call-form__form')
let selector = document.querySelector('#tel')
let im = new Inputmask("+7 (999) 999 99 99")
im.mask(selector)

validation.addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Обязательное поле!'
    }
])