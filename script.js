const btns = document.querySelectorAll(".btns");
const input = document.querySelector("#input");
const equalSign = document.querySelector(".equalSign");
const allClear = document.querySelector(".allClear");
const lastDelete = document.querySelector(".lastDelete");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    getValue(e);
  });
});

function getValue(e) {
  const targetValue = e.target.innerText;
  input.value += targetValue;
}

function calculateValue() {
  const calculatedValue = eval(input.value);
  input.value = calculatedValue;
}

equalSign.addEventListener("click", calculateValue);
allClear.addEventListener("click", () => {
  input.value = "";
});
lastDelete.addEventListener("click", () => {
  input.value = input.value.toString().slice(0, -1);
});
