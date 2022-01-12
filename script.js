let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("counter");
let count = 0;

updateDisplay();

minus.addEventListener("click", function () {
  count--;
  updateDisplay();
});

plus.addEventListener("click", function () {
  count++;
  updateDisplay();
});

function updateDisplay() {
  counter.innerHTML = count;
}
