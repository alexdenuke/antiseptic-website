const mainSwiper = new Swiper('.swiper-main', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-main-pagination',
  },

  navigation: {
    nextEl: '.swiper-main-button-next',
    prevEl: '.swiper-main-button-prev',
  },

  scrollbar: {
    el: '.swiper-main-scrollbar',
  },
});

const partnersSwiper = new Swiper('.swiper-partners', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-partners-pagination',
  },

  navigation: {
    nextEl: '.swiper-partners-button-next',
    prevEl: '.swiper-partners-button-prev',
  },

  scrollbar: {
    el: '.swiper-partners-scrollbar',
  },
});

  console.log(partnersSwiper);