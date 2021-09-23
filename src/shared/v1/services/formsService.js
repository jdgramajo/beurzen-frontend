import { postCredentials, postPWDChange } from "../requests/auth";

// The event.target is the form submit button, bound to the function programmatically.
const login = async (event) => {
  event.preventDefault();

  const loginForm = document.getElementById("login-form");

  if (!loginForm.checkValidity()) {
    loginForm.classList.add("was-validated");
    console.log(`${loginForm.id} validation failed, dude.`);
    return false;
  }

  const username = document.getElementById("user-input").value;
  const password = document.getElementById("password-input").value;

  try {
    return await postCredentials(username, password);
  } catch (err) {
    console.log(err);
    return false;
  }
};

// The event.target is the form, bound to the function programmatically.
const changePWD = async (event) => {
  event.preventDefault();

  const changePasswordForm = document.getElementById("change-password-form");
  const newPasswordElement = document.getElementById(
    "new-password-group-input"
  );
  const confirmPasswordElement = document.getElementById(
    "confirm-password-group-input"
  );

  if (!changePasswordForm.checkValidity()) {
    newPasswordElement.setAttribute("invalid", "true");
    confirmPasswordElement.setAttribute("invalid", "true");
    changePasswordForm.classList.add("was-validated");
    console.log(`${changePasswordForm.id} validation failed, dude.`);
    return false;
  }

  if (newPasswordElement.value !== confirmPasswordElement.value) {
    newPasswordElement.setAttribute("invalid", "true");
    newPasswordElement.value = "";
    confirmPasswordElement.setAttribute("invalid", "true");
    confirmPasswordElement.value = "";
    console.log(`Passwords didn't match, dude.`);
    alert("Passwords didn't match.");
    return false;
  }

  try {
    const changePWDResponse = await postPWDChange(
      newPasswordElement.value,
      confirmPasswordElement.value
    );
    return changePWDResponse.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { login, changePWD };
