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
const modalBground = document.getElementsByClassName(".bground");
const registerBtn = document.getElementsByClassName(".register-btn");
const closeBtn = document.getElementsByClassName(".close");
