

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
const login = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      email,
      password,
    };
    if (validationForm(user)) {
      fetch("http://localhost:3000/login" , {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(data => data.json()).then(data =>console.log(data)).catch((err) => console.log(err))
    }
  }
  export default login