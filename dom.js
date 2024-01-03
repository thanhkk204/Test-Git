console.log("chao ca lop!");
// Có bao nhiêu cách lấy thẻ h1 với js?
var h1Element1 = document.getElementsByClassName("title")[0];
var h1Element2 = document.getElementById("tieuDe");
var h1Element3 = document.querySelector("h1#tieuDe.title");
var h1Element4 = document.querySelectorAll("h1#tieuDe.title")[0];
var h1Element5 = document.getElementsByTagName("h1")[0];
// console.log(h1Element1);
// console.log(h1Element2);
// console.log(h1Element3);
// console.log(h1Element4);
console.log(h1Element5);
console.log(typeof h1Element5);

var document1 = {
  html: {
    head: {
      title: {
        content: "Tieu de",
      },
    },
    body: {
      h1: {
        content: "Tieu de cua trang",
      },

      div: {
        div: {
          div: {},
        },
      },
    },
  },
};

console.log(document1);
console.log(typeof document1);
