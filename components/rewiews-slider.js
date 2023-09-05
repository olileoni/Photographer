const swiper = new Swiper('.slider-reviews', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function(number) {
        return '0' + number
      },
      formatFractionTotal:function(number)
      {
        return '0' + number
      },
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });