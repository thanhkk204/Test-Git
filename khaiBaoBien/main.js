/* var let va const
 * Var = variant
 * 1. Có thể khai báo lại
 * 2. Có thể gán lại
 * 3. Có phạm vi hoạt động là global-scope và block-scope, function-scope.
 * 4. Hỗ trợ hoisting
 */
console.log(infor); // hoisting
var infor = "hoang"; // -> var infor; infor = "hoang"
console.log(infor);

var infor = "iphone";
console.log(infor);
infor = "fpoly";
console.log(infor);
// console.log(tygia);
function doiTien(usd) {
  var tygia = 25000;
  return tygia * usd;
}
// console.log(tygia);

{
  // block-scope
  var myInfor = "hoang";
}

console.log(myInfor);

doiTien(2);

/**
 * let
 * 1. Không khai báo lại được
 * 2. Có gán lại được
 * 3. Phạm vi hoạt động: block-scope, function-scope
 * 4. Không hỗ trợ hoisting
 */

/**
 * cont = constant (hằng số)
 * 1. Không khai báo lại được
 * 2. Không gán lại được.
 * 3. Phạm vi hoạt động: block-scope, function-scope
 * 4. Không hỗ trợ hoisting
 */

{
  console.log(myStudent);
  let myStudent = "Dong";
  myStudent = "Dinh";
}
// console.log(myStudent);
