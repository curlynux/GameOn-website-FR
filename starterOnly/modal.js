// Ouverture/Fermeture du menu Responsive
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Elements de la fenêtre modale
const modalBackground = document.getElementsByClassName(".bground");
const registerButton = document.getElementsByClassName(".register-btn");
const closeButton = document.getElementsByClassName(".close");

// Ouverture modale
registerButton.forEach((button) =>
	button.addEventListener("click", launchModal)
);

function launchModal() {
	modalBackground.style.display = "flex";
}

// Fermeture modale
closeButton.addEventListener("click", closeModal);

function closeModal() {
	modalBackground.style.animationPlayState = "running";
	setTimeout(() => {
		modalBackground.style.display = "none";
		modalBackground.style.animationPlayState = "paused";
	});
}

// Validation du formulaire
// Récupération des données du formulaire
const form = document.getElementById("#inscriptionForm");
const confirmationModal = document.getElementById("#confirmModal");
const firstName = document.getElementById("#firstName");
const lastName = document.getElementById("#lastName");
const email = document.getElementById("#email");
const birthdate = document.getElementById("#birthdate");
const quantity = document.getElementById("#quantity");
const locationsContainer = document.getElementById("#locationsContainer");
const locations = locationsContainer.getElementById('[name="location"]');
const terms = document.getElementById("#checkbox1");

const firstNameError = document.getElementById("#firstNameError");
const lastNameError = document.getElementById("#lastNameError");
const emailError = document.getElementById("#emailError");
const birthdateError = document.getElementById("#birthdateError");
const quantityError = document.getElementById("#quantityError");
const locationError = document.getElementById("#locationError");
const termsError = document.getElementById("#termsError");

// Validation du prénom
function checkFirstName() {
	if (firstName.value == "") {
		firstNameError.innerHTML = "<p>Vous devez renseigner un Prénom.</p>";
		firstNameErrorValue = true;
	} else {
		if (firstName.value.length < 2) {
			firstNameError.innerHTML =
				"<p>Le Prénom doit faire plus de 2 caractères.</p>";
			firstNameErrorValue = true;
		} else {
			firstNameError.innerHTML = "";
			firstNameErrorValue = false;
		}
	}
}

firstName.addEventListener("input", checkFirstName);

// Validation du nom
function checkLastName() {
	if (lastName.value == "") {
		lastNameError.innerHTML = "<p>Vous devez renseigner un Nom.</p>";
		lastNameErrorValue = true;
	} else {
		lastNameError.innerHTML = "";
		lastNameErrorValue = false;
	}
}

lastName.addEventListener("input", checkLastName);

// Validation de l'email
var defaultRegexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]$/;
var regexEmail =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

function checkEmail() {
	if (email.value == "") {
		emailError.innerHTML = "<p>Vous devez renseigner une adresse email.</p>";
		emailErrorValue = true;
	} else {
		if (!regexEmail.test(email.value)) {
			emailError.innerHTML =
				"<p>L'adresse mail doit respecter ce format : monmail@email.com</p>";
			emailErrorValue = true;
		} else {
			emailError.innerHTML = "";
			emailErrorValue = false;
		}
	}
}

email.addEventListener("input", checkEmail);

// Validation de la Date de naissance
function checkBirthdate() {
	if (birthdate.value == "") {
		birthdateError.innerHTML =
			"<p>Vous devez renseigner une date de naissance.</p>";
		birthdateErrorValue = true;
	} else {
		birthdateError.innerHTML = "";
		birthdateErrorValue = false;
	}
}

birthdate.addEventListener("input", checkBirthdate);
