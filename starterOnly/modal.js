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
