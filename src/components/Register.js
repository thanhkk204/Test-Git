import { validRegister } from "../validations/auth.valid";

var users = [];
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password
  };

  if (validRegister({
    email,
    password,
    confirmPass
  })) {
    fetch("http://localhost:3000/register" , {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(data => data.json()).then(data =>console.log(data)).catch((err) => console.log(err))
  }
}

export default register;
