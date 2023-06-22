const choiceButtons = Array.from(document.getElementsByClassName("visitor-type-button"));

choiceButtons.forEach(button => button.addEventListener("click", visitorTypeSelection));
const defaultExperienceType = "nurse";
let experienceType = localStorage.getItem("experiencetype") || defaultExperienceType;

// if none defined, maybe change to redirect to splash screen with only the choice
// maybe a modal popup?
function visitorTypeSelection(event) {
	const buttonPressed = event.target.name || nurse;
	if (buttonPressed === "employer") {
		localStorage.setItem("experiencetype", "employer");
		experienceType = "employer";
	} else {
		localStorage.setItem("experiencetype", "nurse");
		experienceType = "nurse";
	}
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
