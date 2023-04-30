window.addEventListener("DOMContentLoaded", (event) => {
  const btnBurger = document.querySelector('.js-open-menu');
  const btnBurgerClose = document.querySelector('.js-close-menu');
  const mainBody = document.querySelector('.body');
  const topPanelBtn = document.querySelector('.js-top-panel');
  const topPanel = document.querySelector('.top-panel');
  const infoCloseBtn = document.querySelector('.js-close-info');
  const infoPopup = document.querySelector('.js-info-block');

  if (btnBurger) {
    btnBurger.addEventListener('click', function() {
      mainBody.classList.add('opened-menu');
    });
  }
  if (btnBurgerClose) {
    btnBurgerClose.addEventListener('click', function() {
      mainBody.classList.remove('opened-menu');
    });
  }
  if (topPanelBtn) {
    topPanelBtn.addEventListener('click', function() {
      topPanel.classList.remove('is-active');
    });
  }

  infoCloseBtn.addEventListener('click', function() {
    infoPopup.classList.remove('is-active');
  });

});