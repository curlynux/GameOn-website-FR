function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelector('span.close');
const form = document.getElementById('form');
const finish = document.querySelector('.finish');
const hero = document.getElementById('hero');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  if (window.innerWidth < 500) {
    hero.style.display = 'none';
  }
}

modalClose.addEventListener('click', closeModal);
finish.addEventListener('click', closeModal);

/**
 * La fonction closeModal sert a fermer la modale au clic du boutton X
 * Elle retire les bordures rouge qui sont présente lors d'un mauvais remplissage de champ
 * Elle retire ce qui est mis dans les champs
 */

function closeModal() {
  const error = document.querySelectorAll('.error');
  error.forEach(function (element) {
    element.style.display = 'none';
  });
  formFirst.classList.remove('error-border');
  formLast.classList.remove('error-border');
  formEmail.classList.remove('error-border');
  formBirthdate.classList.remove('error-border');
  formQuantity.classList.remove('error-border');

  modalbg.removeAttribute('style');
  form.reset();
  formulary.style.visibility = 'visible';
  modalValidate.style.display = 'none';
  hero.style.display = 'grid';
}
