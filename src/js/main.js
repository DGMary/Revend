const btnBurger = document.querySelector('.burger-button');
const mainBody = document.querySelector('.body');

btnBurger.addEventListener('click', function() {
  mainBody.classList.toggle('opened-menu');
});