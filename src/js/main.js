const btnBurger = document.querySelector('.js-open-menu');
const btnBurgerClose = document.querySelector('.js-close-menu');
const mainBody = document.querySelector('.body');
const topPanelBtn = document.querySelector('.js-top-panel');
const topPanel = document.querySelector('.top-panel');

btnBurger.addEventListener('click', function() {
  mainBody.classList.add('opened-menu');
});
btnBurgerClose.addEventListener('click', function() {
  mainBody.classList.remove('opened-menu');
});
topPanelBtn.addEventListener('click', function() {
  topPanel.classList.remove('is-active');
});