// Open modal
// переменная(хранилище значений), после = это то, что мы в него помещаем 
const modal = document.querySelector('.modal')
const button = document.querySelector('.map-form-button')
const buttonClose = document.querySelector('.modal-close')

//чтобы кнопка стала реагировать ее нужно подписать на события 
button.addEventListener('click', function() {
  modal.classList.add('modal-visible')
})


buttonClose.addEventListener('click', function() {
  modal.classList.remove('modal-visible')
})

// remove

