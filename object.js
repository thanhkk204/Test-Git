console.log("hello vietnam");

var myInfor = {
  myName: "Nguyễn Minh Hoàng",
  age: 32,
  address: "Bắc Giang",
  mssv: "PH12345",
  email: "hoangnm62@gmail.com",
  position: "Bảo vệ và trông xe",
};

// Gợi ý:
/**
 * Bước 1: Lấy element trong DOM ra.
 * Bước 2: Dùng createElement để tạo ra element mới.
 * Bước 3: Thêm nội dung cho element mới này bằng innerText, innerHTML
 * Bước 4: Dùng appendChild để thêm phần tử đó vào DOM.
 */

var inforElement = document.getElementsByClassName("infor")[0]; // Bước 1
console.log(inforElement);

var inforHTML = document.createElement("div"); // Bước 2
inforHTML.innerText = myInfor.myName; // Bước 3
inforElement.appendChild(inforHTML);
