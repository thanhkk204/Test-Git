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

/**
 * Các giá trị khi bị ép kiểu sẽ trở thành falsy:
 * 1. False
 * 2. Null
 * 3. Undefined
 * 4. 0
 * 5. NaN
 * 6. ""
 * 7. -0
 */

/**
 * Đăng nhập với username, password:
 * Khớp 1 account có sẵn trong localStorage thì báo "Đăng nhập thành công!"
 */
