const form = document.querySelector(".container__form"),
  emailField = form.querySelector(".email__field"),
  emailInput = emailField.querySelector(".form__email"),
  passwordField = form.querySelector(".password__field"),
  passwordInput = passwordField.querySelector(".form__password"),
  cpasswordField = form.querySelector(".cpassword__field"),
  cpasswordInput = cpasswordField.querySelector(".form__cpassword");

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailInput.value.match(emailPattern)) {
    emailInput.focus();
    emailInput.borderColor = "red";
    document.querySelector(".error-text").innerHTML =
      "Please enter a valid email";
    // return emailField.classList.add("invalid"); //adding invalid class if email doesnot match with pattern
  }
  // emailField.classList.remove("invalid"); //removing invalid class if email match with pattern
  else {
    document.querySelector(".error-text").innerHTML = "";
  }
}

const eyeIcons = document.querySelectorAll(".eye-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pinput = eyeIcon.parentElement.querySelector("input");

    if (pinput.type == "password") {
      eyeIcon.src = "images/show.png";
      return (pinput.type = "text");
    }
    eyeIcon.src = "images/hide.png";
    pinput.type = "password";
  });
});

//callingfunction on create password
function createPassword() {
  const passwordPattern = /^[A-Za-z]\w{7,14}$/;
  if (!passwordInput.value.match(passwordPattern)) {
    passwordInput.focus();
    passwordInput.borderColor = "red";
    return passwordField.classList.add("invalid");
  }
  passwordField.classList.remove("invalid");
}

//calling function on confirm password
function confirmPassword() {
  if (cpasswordInput.value != passwordInput.value) {
    cpasswordInput.focus();
    cpasswordInput.borderColor = "red";
    return cpasswordField.classList.add("invalid");
  }
  cpasswordField.classList.remove("invalid");
}

//   calling function on keyup
emailInput.addEventListener("keyup", checkEmail);
passwordInput.addEventListener("keyup", createPassword);
cpasswordInput.addEventListener("keyup", confirmPassword);

// calling function on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent from submitting
  checkEmail();
  createPassword();
  confirmPassword();

  if (
    !emailField.classList.contains("invalid") &&
    !passwordField.classList.contains("invalid") &&
    !cpasswordField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
