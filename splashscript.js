const strings = {
	employer: {
		banner1: "Top-notch nurses are waiting for you!",
	},
	nurse: {
		banner1: "Welcoming candidates as family.",
	},
};

const choiceButtons = Array.from(document.getElementsByClassName("visitor-type-button"));
choiceButtons.forEach(button => button.addEventListener("click", visitorTypeSelection));
const defaultExperienceType = "nurse";
let experienceType = localStorage.getItem("experiencetype") || defaultExperienceType;
setStringsBasedOnExperience();

function visitorTypeSelection(event) {
	const buttonPressed = event.target.name || nurse;
	if (buttonPressed === "employer") {
		localStorage.setItem("experiencetype", "employer");
		experienceType = "employer";
	} else {
		localStorage.setItem("experiencetype", "nurse");
		experienceType = "nurse";
	}
	setStringsBasedOnExperience();
}

function setStringsBasedOnExperience() {
	document.getElementById("banner1").innerText = strings[experienceType].banner1;
}
