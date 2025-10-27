function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validateForm() {
  const emailField = document.getElementById("email");
  const errorMessage = document.getElementById("emailError");

  if (!validateEmail(emailField.value)) {
    errorMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }

}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

