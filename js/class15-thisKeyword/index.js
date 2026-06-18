"use strict";

// 1. Global
// console.log(this);

// 2. Inside Object
function test() {
  console.log(this);
}

// test();

// 3. Inside Func of an Object
var obj = {
  name: "Aman",
  age: 29,
  fn: function () {
    console.log(this);
  },
};

obj.fn();

// 4. Nested Function
var obj2 = {
  name: "Aman",
  age: 29,
  fn: function () {
    let nestedFunc = function () {
      console.log(this);
    };
    nestedFunc();
  },
};

obj2.fn();
