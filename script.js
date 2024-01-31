const btns = document.querySelectorAll(".btns");
const input = document.querySelector("#input");
const equalSign = document.querySelector(".equalSign");
const allClear = document.querySelector(".allClear");
const lastDelete = document.querySelector(".lastDelete");
const popUp = document.querySelector(".popUp");
const popDltBtn = document.querySelector(".fa-xmark");

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

equalSign.addEventListener("click", () => {
  if (input.value === "") {
    popUp.classList.add("showPop");
    // input.value = "";
  } else {
    calculateValue();
  }
});
allClear.addEventListener("click", () => {
  input.value = "";
});
lastDelete.addEventListener("click", () => {
  input.value = input.value.toString().slice(0, -1);
});

popDltBtn.addEventListener("click", () => {
  popUp.classList.remove("showPop");
});
