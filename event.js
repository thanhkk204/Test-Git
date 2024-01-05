function login() {
  console.log("Dang nhap thanh cong!");
}

var loginCach2 = document.getElementById("cach2");
console.log(loginCach2);
console.log(typeof loginCach2);

loginCach2.onclick = login;

var loginCach3 = document.getElementById("cach3");

loginCach3.addEventListener("click", login);
