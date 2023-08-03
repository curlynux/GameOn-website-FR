/**
 * Dans un premier temps je vais appeler tous les élements dont je vais avoir besoin
 * Ici on appel le formulaire, ses élements, et les erreurs potentiel.
 */

const formulary = document.getElementById('form');
const modalValidate = document.getElementById('modal-validate');
const formFirst = document.getElementById('first');
const errorFirst = document.getElementById('errorFirst');
const formLast = document.getElementById('last');
const errorLast = document.getElementById('errorLast');
const formEmail = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');
const formBirthdate = document.getElementById('birthdate');
const errorBirthdate = document.getElementById('errorBirthdate');
const formQuantity = document.getElementById('quantity');
const errorQuantity = document.getElementById('errorQuantity');
const errorLocation = document.getElementById('errorLocation');
const errorCondition = document.getElementById('errorCondition');

/**
 * La fonction validationFirst va controler le champ prénom
 * Si le prénom donné est inférieur a 2 caractère, ou s'il est composé d'autre chose qu'une lettre, alors il sera refusé
 * Dans le cas ou tout est bon, nous mettrons la fonction sur true pour plus tard
 * @returns
 */

function validationFirst() {
  if (
    formFirst.value.length < 2 ||
    !formFirst.value.match(/^[A-Za-z-éèêàâäiîçô\s]{2,}$/)
  ) {
    errorFirst.style.display = 'block';
    formFirst.classList.add('error-border');
    return false;
  } else {
    errorFirst.style.display = 'none';
    formFirst.classList.remove('error-border');
    return true;
  }
}

/**
 * Nous avons exactement la même chose pour le nom que pour le prénom
 * @returns
 */

function validationLast() {
  if (
    formLast.value.length < 2 ||
    !formLast.value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)
  ) {
    errorLast.style.display = 'block';
    formLast.classList.add('error-border');
    return false;
  } else {
    errorLast.style.display = 'none';
    formLast.classList.remove('error-border');
    return true;
  }
}

/**
 * Ici nous vérifions le mail, on inclu donc une regex qui a pour but de demander certains caractère précis
 * Pour que le mail soit valide il doit y avoir au moins un @ et un . comme dans toutes les adresses mail
 * Exemple : xxxxx@xx.xx
 * @returns
 */

function validationEmail() {
  if (
    !formEmail.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
  ) {
    errorEmail.style.display = 'block';
    formEmail.classList.add('error-border');
    return false;
  } else {
    errorEmail.style.display = 'none';
    formEmail.classList.remove('error-border');
    return true;
  }
}

/**
 * Ici nous devons renseigner notre age, une regex comme pour les mails plus haut est mise en place
 * Celle ci présente une date
 * @returns
 */

function validationBirthdate() {
  if (
    !formBirthdate.value.match(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    errorBirthdate.style.display = 'block';
    formBirthdate.classList.add('error-border');
    return false;
  } else {
    errorBirthdate.style.display = 'none';
    formBirthdate.classList.remove('error-border');
    return true;
  }
}

/**
 * Ici nous avons besoin d'une quantité, comprise entre 0 et 100
 * L'addEventListener nous permet de prendre seulement les chiffres
 * Ensuite le value === '' force l'utilisateur a remplir le champ
 * Enfin les value < 0 et > 100 permette de cibler le chiffre voulu
 * Slice permet de limiter le nombre de caractère a 2 maximum
 * @returns
 */

function validationQuantity() {
  formQuantity.addEventListener('input', function (e) {
    formQuantity.value = this.value.slice(0, 2).replace(/[^0-9]/g, '');
  });
  if (
    formQuantity.value === '' ||
    formQuantity.value < 0 ||
    formQuantity.value > 100
  ) {
    errorQuantity.style.display = 'block';
    formQuantity.classList.add('error-border');
    return false;
  } else {
    errorQuantity.style.display = 'none';
    formQuantity.classList.remove('error-border');
    return true;
  }
}

/**
 * Ici nous allons chercher tous les input de nom location
 * Et on demande qu'au moins un champ soit valide pour passer en true
 * @returns
 */

function validationLocation() {
  const formlocations = document.querySelectorAll(
    'input[name="location"]:checked'
  );
  if (formlocations.length > 0) {
    errorLocation.style.display = 'none';
    return true;
  } else {
    errorLocation.style.display = 'block';
    return false;
  }
}

/**
 * Ici nous avons la même chose que la fonction au dessus
 * Sauf qu'elle vise les input de nom condition
 * @returns
 */

function validationCondition() {
  const formCondition = document.querySelectorAll(
    'input[name="condition"]:checked'
  );
  if (formCondition.length > 0) {
    errorCondition.style.display = 'none';
    return true;
  } else {
    errorCondition.style.display = 'block';
    return false;
  }
}

/**
 * Ici nous allons retirer le comportement par défaut de submit
 * En effet lorsque la modal est complètement valide, l'envoi du formulaire ferme la modale automatiquement
 * Et on en a besoin pour le message de remerciement
 */

formulary.addEventListener('submit', function (ev) {
  ev.preventDefault();
});

/**
 * Ici nous allons prends toutes les fonctions plus haute qui concerne le formulaire
 * Nous allons les appeler une par une et dans le return donner le resultat de chacune
 * Sachant que chaque fonction est indépendante nous ne ferons ici qu'un regroupement
 * @returns
 */

function validate() {
  let checkIsFirstnameValid = validationFirst();
  let checkIsLastnameValid = validationLast();
  let checkIsEmailValid = validationEmail();
  let checkIsBirthdateValid = validationBirthdate();
  let checkIsQuantityValid = validationQuantity();
  let checkIsLocationValid = validationLocation();
  let checkIsConditionValid = validationCondition();

  return (
    checkIsFirstnameValid &&
    checkIsLastnameValid &&
    checkIsEmailValid &&
    checkIsBirthdateValid &&
    checkIsQuantityValid &&
    checkIsLocationValid &&
    checkIsConditionValid
  );
}

/**
 * Enfin la dernière fonction présente lors du clic de validation du formulaire dans l'html
 * Nous fait parvenir la fonction validate
 * Si tout est bon nous aurons le message de remerciement qui apparaitra et le contenu de la modale disparaitra
 */

function checkValidation() {
  if (validate()) {
    // Masquer la modale
    formulary.style.visibility = 'hidden';
    // Afficher l'élément souhaité à la place de la modale

    modalValidate.style.display = 'flex';
  }
}
