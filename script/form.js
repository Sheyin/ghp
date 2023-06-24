document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the form from submitting normally

	const formData = new FormData(this);

	const xhr = new XMLHttpRequest();
	xhr.open("POST", "contactmail.php", true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				const response = JSON.parse(xhr.responseText);
				if (response.success) {
					// Email sent successfully
					//window.location.href = 'user_page.php';
					console.log("Email sent successfully!");
				} else {
					// Error sending email
					alert("Error sending email.");
				}
			} else {
				// Error making the AJAX request
				alert("Error making the request.");
			}
		}
	};

	xhr.send(formData);
});
