let total_value = document.getElementById("total_value");
let btn_c = document.getElementById("btn_c");
let btn_delete = document.getElementById("btn_delete");
let btn_division = document.getElementById("btn_division");
let btn_seven = document.getElementById("btn_seven");
let btn_eight = document.getElementById("btn_eight");
let btn_nine = document.getElementById("btn_nine");
let btn_multiplication = document.getElementById("btn_multiplication");
let btn_four = document.getElementById("btn_four");
let btn_five = document.getElementById("btn_five");
let btn_six = document.getElementById("btn_six");
let btn_subtract = document.getElementById("btn_subtract");
let btn_one = document.getElementById("btn_one");
let btn_two = document.getElementById("btn_two");
let btn_three = document.getElementById("btn_three");
let btn_sum = document.getElementById("btn_sum");
let btn_zero = document.getElementById("btn_zero");
let btn_point = document.getElementById("btn_point");
let btn_equal = document.getElementById("btn_equal");
let limit = 10;
let hasSign = false;

btn_zero.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 0;
  }
});
btn_one.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 1;
  }
});
btn_two.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 2;
  }
});
btn_three.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 3;
  }
});
btn_four.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 4;
  }
});
btn_five.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 5;
  }
});
btn_six.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 6;
  }
});
btn_seven.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 7;
  }
});
btn_eight.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 8;
  }
});
btn_nine.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += 9;
  }
});

btn_point.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit) {
    total_value.innerHTML += ".";
  }
});
btn_equal.addEventListener("click", function () {
    total_value.innerHTML = eval(total_value.innerHTML);
    hasSign = false;
});
btn_c.addEventListener("click", function () {
  total_value.innerHTML = 0;
  hasSign = false;
});
btn_delete.addEventListener("click", function () {
    let value = total_value.innerHTML;
    let newValue = value.slice(0, -1);
    total_value.innerHTML = newValue;
});
btn_division.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit && !hasSign) {
    total_value.innerHTML += "/";
    hasSign = true;
  }
});
btn_multiplication.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit && !hasSign) {
    total_value.innerHTML += "*";
    hasSign = true;
  }
});
btn_sum.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit && !hasSign) {
    total_value.innerHTML += "+";
    hasSign = true;
  }
});
btn_subtract.addEventListener("click", function () {
  if (total_value.innerHTML.length < limit && !hasSign) {
    total_value.innerHTML += "-";
    hasSign = true;
  }
});
