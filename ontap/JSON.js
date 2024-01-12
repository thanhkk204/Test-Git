const myInfor = {
  name: "hoang",
  age: 32,
};

// const myString = "{sdsdsdscnjkdfd{{{{]]]]";
// console.log(JSON.parse(myString));

console.log(myInfor);

const stringMyInfor = JSON.stringify(myInfor);

console.log(stringMyInfor);

console.log(JSON.parse(stringMyInfor));

/** Getter và setter
 * localStorage.setItem()
 * localStorage.getItem()
 *
 */

// console.log(localStorage.removeItem("users"));
