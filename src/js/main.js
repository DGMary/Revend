$(document).ready(function () {
  let $body = $('body');

  closeMobMenu();
  openMobMenu();
  closeTopPanel();
  closeBottomPanel()

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