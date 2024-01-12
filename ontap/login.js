function validationForm(user) {
  if (!user.email || !user.password) {
    alert("Khong duoc de trong!");
    return false;
  }
  if (user.password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return false;
  }
  return true;
}
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    email,
    password,
  };
  if (validationForm(user)) {
    var usersData = JSON.parse(localStorage.getItem("users"));
    if (usersData && usersData.length > 0) {
      usersData.some((item) => {
        if (item.email === email && item.password === password) {
          alert("Dang nhap thanh cong!");
          return;
        }
      });
    }
  }
}
