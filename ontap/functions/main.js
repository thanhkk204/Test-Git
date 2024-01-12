// named function
function sum(a, b) {
  return a + b;
}

// anonymous function
setTimeout(function () {
  console.log("hello");
}, 3000); // Timing của WEB API

// expression function
const sum1 = function (a, b) {
  return a + b;
};

// arrow function
const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;
// ! Khi arrow function chỉ 1 câu lệnh duy nhất là return thì có thể bỏ qua {} và từ khoá "return"

const returnObj = () => ({
  name: "Hoang",
  age: 32,
}); // Dấu () thay cho từ khoá "return"

setTimeout(() => console.log("Xin chao ca lop!"), 3000);
