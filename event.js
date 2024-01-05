function register() {
  /**
   * Lấy dữ liệu khi ấn nút đăng ký lưu vào một object tên là user
   * Lưu thông tin đăng ký vào localStorage
   */

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPass = document.getElementById("confirmPass").value;
  var user = {
    email,
    password,
    confirmPass,
  };
  // console.log({ user });

  // console.log({ userJSON: typeof JSON.stringify(user) });
  // BOM = Browser Object Model
  localStorage.setItem("userInfor", JSON.stringify(user));
  // JSON = Javascript Object Notation
}
