const mainSwiper = new Swiper('.swiper-main', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
    
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