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

// Dùng template string chỉ cần 2 bước:
var inforElement = document.getElementsByClassName("infor")[0]; // Bước 1

inforElement.innerHTML = `
<div>
  <div>Tên: ${myInfor.myName}<div>
  <div>Tuổi: ${myInfor.age + 1}<div>
  <div>Địa chỉ: ${myInfor.address}<div>
  <div>mssv: ${myInfor.mssv}<div>
</div>
`; // Bước 2.

/**
 * `` = template string là một cú pháp của es6 để viết biểu thức trong chuỗi.
 * ${ // viet bieu thuc, bien vao day}
 */
