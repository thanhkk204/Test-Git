import { validRegister } from "../validations/auth.valid";

var users = [];
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password,
    confirmPass,
  };

  if (validRegister(user)) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
  }
}

export default register;
