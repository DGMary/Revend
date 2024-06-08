$(document).ready(function () {
  let $body = $('body');

  closeMobMenu();
  openMobMenu();
  closeTopPanel();
  closeBottomPanel();   
  $('#video') && playVideo();
  AOS.init();
});

function closeMobMenu() {
  let $body = $('body');
  $(document).on('click', '.js-close-menu', function (e) {
    e.preventDefault();
    $body.removeClass('opened-menu');
  });
}

function openMobMenu() {
  let $body = $('body');
  $(document).on('click', '.js-open-menu', function (e) {
    e.preventDefault();
    $body.addClass('opened-menu');
  });
}

function closeTopPanel() {
  let $topPanel = $('.top-panel');
  $(document).on('click', '.js-top-panel', function (e) {
    e.preventDefault();
    $topPanel.removeClass('is-active');
  });
}

function closeBottomPanel() {
  let $bottomPanel = $('.js-info-block');
  $(document).on('click', '.js-close-info', function (e) {
    e.preventDefault();
    $bottomPanel.removeClass('is-active');
  });
}

function playVideo() {
  $(document).on('click', '.js-play', function (e) {
    e.preventDefault();
    $('#video').trigger('play');
    $('.video-holder').addClass('video-play');
    $('#video').attr("controls","controls");
  });
}

window.addEventListener('load', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.22,
    spaceBetween: 16,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });
})