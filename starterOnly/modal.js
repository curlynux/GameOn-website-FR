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
