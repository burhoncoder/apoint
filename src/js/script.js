const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const servicesItem = document.querySelectorAll('.services__item');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.modal__close');
const consultBtn = document.querySelector('.services__help');
consultBtn.addEventListener('click', (e) => {
  const id = consultBtn.closest('.services__inf').dataset.id;
  document.querySelector(`div[data-id="${id}"]`).classList.add('modal--active');
  modalOverlay.classList.add('modal__overlay--active');
});
servicesItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    document
      .querySelector(`div[data-id="${item.dataset.id}"]`)
      .classList.add('modal--active');
    modalOverlay.classList.add('modal__overlay--active');
  });
});
closeBtn.forEach((close) => {
  close.addEventListener('click', (e) => {
    console.log('asfd');
    modals.forEach((modal) => {
      modal.classList.remove('modal--active');
    });
    modalOverlay.classList.remove('modal__overlay--active');
  });
});
modalOverlay.addEventListener('click', (e) => {
  modalOverlay.classList.remove('modal__overlay--active');
  modals.forEach((modal) => {
    modal.classList.remove('modal--active');
  });
});
