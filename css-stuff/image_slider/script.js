const swiperEl = document.querySelector('swiper-container');
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');

swiperParam =  {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    loop: true,
};

nextBtn.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
});
prevBtn.addEventListener('click', () => {
    swiperEl.swiper.slidePrev();
});

Object.assign(swiperEl, swiperParam);

swiperEl.initialize();