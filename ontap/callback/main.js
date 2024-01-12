function dongHocPhi(soTien) {
  if (soTien >= 15000000) {
    console.log("Dong hoc phi!");
  }
}

function xinTienMe() {
  console.log("Năn nỉ mẹ cho tiền!");
  setTimeout(() => {
    console.log("Xin duoc tien me!");
    return 10000000;
  }, 5000);
  // console.log("Xin duoc tien me!");
}

xinTienMe();
