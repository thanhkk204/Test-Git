var users = [];
function validationForm(user) {
  if (!user.email || !user.password || !user.confirmPass) {
    alert("Khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return false;
  }
  if (user.confirmPass !== user.password) {
    alert("Mat khau nhap lai khong khop!");
    return false;
  }
  // validate
  return true;
}
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password,
    confirmPass,
  };

  if (validationForm(user)) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Dang ky thanh cong!");
  }
}
