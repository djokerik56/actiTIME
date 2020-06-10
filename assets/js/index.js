let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  });


document.querySelector('.header-wrapper__toogle-menu').onclick = function (e) {
    let nav = document.querySelector('.header-wrapper__bottom_mobile');
    nav.classList.toggle('header-wrapper__bottom_mobile-open');
    e.preventDefault();
}

document.querySelector('.sub-menu').onclick = function (e) {
    let spanList = document.querySelector('.span-list');
    let nav = document.querySelector('.menu-depth');
    nav.classList.toggle('menu-depth-open');
    spanList.classList.toggle('span-list-open');
    e.preventDefault();
}

let searchSliders = document.getElementsByClassName('content__slider_info')
let arraySliders = Array.from(searchSliders)
let lengthSliders = arraySliders.length

for(let i = 0; i < lengthSliders; i++){
    let numerSlide = document.createElement("span")
    numerSlide.classList.add('slide-number')
    numerSlide.innerHTML = `${i+1}`
    arraySliders[i].appendChild(numerSlide)
}
