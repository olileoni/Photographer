window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }

    resizableSwiper(
      '(max-width: 1100px)',
      '.price-slider-1',
      {
        spaceBetween: 20,
        slidesPerView: 3,
        pagination: {
          type: 'progressbar',
          el: '.swiper-scrollbar',
          clickable: true,
          draggable: true,
        },
      }
    );
    resizableSwiper(
      '(max-width: 320px)',
      '.price-slider-1',
      {
        spaceBetween: 20,
        slidesPerView: 1.5,
        pagination: {
          type: 'progressbar',
          el: '.swiper-scrollbar',
          clickable: true,
          draggable: true,
        },
      }
    );

    resizableSwiper(
      '(max-width: 640px)',
      '.price-slider-2',
      {
        spaceBetween: 20,
        slidesPerView: 2,
        pagination: {
          type: 'progressbar',
          el: '.swiper-scrollbar',
          clickable: true,
          draggable: true,
        },
      }
    );

    resizableSwiper(
      '(max-width: 640px)',
      '.price-slider-3',
      {
        spaceBetween: 20,
        slidesPerView: 2,
        pagination: {
          type: 'progressbar',
          el: '.swiper-scrollbar',
          clickable: true,
          draggable: true,
        },
      }
    );
  });
  