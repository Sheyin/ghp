const choiceButtons = Array.from(document.getElementsByClassName("splash-button"));

// These are constants dedicating which experience maps to which page
const experiences = {
	employer: "employer.html",
	applicant: "applicant.html",
};

choiceButtons.forEach(button => button.addEventListener("click", visitorTypeSelection));
const defaultExperienceType = "applicant";
let experienceType = localStorage.getItem("experiencetype") || defaultExperienceType;

// if none defined, maybe change to redirect to splash screen with only the choice
// maybe a modal popup?
function visitorTypeSelection(event) {
	console.log(event);
	const buttonPressed = event.target.name || applicant;
	if (buttonPressed === "employer") {
		localStorage.setItem("experiencetype", "employer");
		experienceType = "employer";
	} else {
		localStorage.setItem("experiencetype", "applicant");
		experienceType = "applicant";
	}
}

// load the correct experience in the iframe
function loadExperience() {
	// Mostly temporary to redirect to splash screen
	document
		.getElementById("ghplogo")
		.addEventListener("click", () => (document.location = "index.html"));

	const iframe = document.getElementById("mainframe");
	iframe.src = experiences[experienceType];
}

//setStringsBasedOnExperience();

/*
const strings = {
	employer: {
		banner1: "Top-notch nurses are waiting for you!",
		chooseDirObject: "us",
		chooseReasons: [
			"Our nurses have been carefully chosen based on both skill and attitude",
			"We provide a support network for our nurses",
			"We value compassion",
		],
		whoAreWeText: `So, this text only shows up when "employer" is selected at the top. It will switch to "nurse" specific text if that button is clicked. By default, it should show nurse-specific text.
		
		Maybe add some testimonials or credentials here?`,
	},
	nurse: {
		banner1: "Welcoming candidates as family.",
		chooseDirObject: "Boston",
		chooseReasons: [
			"Big city - but not too large.",
			"Large educated population",
			"Safe place to raise a family",
		],
		whoAreWeText: `This text only shows up when "nurse" is selected, and will switch to employer-specific text if that option is selected.  By default this should be shown.
		
		Maybe add some testimonials from nurses here?`,
	},
};





function setStringsBasedOnExperience() {
	const newText = strings[experienceType];
	document.getElementById("banner1").innerText = newText.banner1;
	document.getElementById("visitor-choose-direct-object").innerText = newText.chooseDirObject;

	// Replace "Who are we" body text
	document.getElementById("who-are-we-text").innerText = newText.whoAreWeText;

	// Create / replace "why choose us" list nodes
	const newNodes = new Set();
	newText.chooseReasons.forEach(listItem => {
		const newNode = document.createElement("li");
		newNode.innerText = listItem;
		newNodes.add(newNode);
	});
	document.getElementById("visitor-choose-reasons").replaceChildren(...newNodes);
}
*/
