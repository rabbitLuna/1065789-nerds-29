// Open modal
// переменная(хранилище значений), после = это то, что мы в него помещаем 
const modal = document.querySelector('.modal')
const button = document.querySelector('.map-form-button')
const buttonClose = document.querySelector('.modal-close')

//чтобы кнопка стала реагировать ее нужно подписать на события 
button.addEventListener('click', function () {
  modal.classList.add('modal-visible')
})


buttonClose.addEventListener('click', function () {
  modal.classList.remove('modal-visible')
})

// remove

// slider 

const sliderButtonOne = document.querySelector('.slider-controls-one')
const sliderButtonTwo = document.querySelector('.slider-controls-two')
const sliderbuttonThree = document.querySelector('.slider-controls-three')

const sliderOne = document.querySelector('.slider-info-one')
const sliderTwo = document.querySelector('.slider-info-two')
const sliderThree = document.querySelector('.slider-info-three')

sliderButtonOne.addEventListener('click', function () {
  sliderOne.classList.add('slider-info-active')
  sliderTwo.classList.remove('slider-info-active')
  sliderThree.classList.remove('slider-info-active')

  sliderButtonOne.classList.add("slider-controls-active")
  sliderButtonTwo.classList.remove('slider-controls-active')
  sliderbuttonThree.classList.remove('slider-controls-active')
})
sliderButtonTwo.addEventListener('click', function () {
  sliderOne.classList.remove('slider-info-active')
  sliderTwo.classList.add('slider-info-active')
  sliderThree.classList.remove('slider-info-active')


  sliderButtonOne.classList.remove("slider-controls-active")
  sliderButtonTwo.classList.add('slider-controls-active')
  sliderbuttonThree.classList.remove('slider-controls-active')

})
sliderbuttonThree.addEventListener('click', function () {
  sliderOne.classList.remove('slider-info-active')
  sliderTwo.classList.remove('slider-info-active')
  sliderThree.classList.add('slider-info-active')


  sliderButtonOne.classList.remove("slider-controls-active")
  sliderButtonTwo.classList.remove('slider-controls-active')
  sliderbuttonThree.classList.add('slider-controls-active')
})

