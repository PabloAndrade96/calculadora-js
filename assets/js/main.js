const pre_value = document.querySelector("#pre-value");
const cur_value = document.querySelector("#cur-value");
const buttons = document.querySelectorAll(".calculator__button");

const showDisplay = (btn) => {
  if (btn === "*") {
    cur_value.innerHTML += `&#10005;`;
  } else if (btn === "/") {
    cur_value.innerHTML += `&#247;`;
  } else {
    cur_value.textContent += btn;
  }
};

const clear = (btn) => {
  if (btn === "clear") {
    pre_value.textContent = "";
    cur_value.textContent = "";
  }
};

const de = (btn) => {
  if (btn === "delete") {
    cur_value.textContent = cur_value.textContent.slice(0, -1);
  }
};

const calculate = () => {
  let new_value;

  pre_value.textContent = cur_value.textContent;

  if (cur_value.textContent.includes("✕")) {
    new_value = cur_value.textContent.replace("✕", "*");
  } else if (cur_value.textContent.includes("÷")) {
    new_value = cur_value.textContent.replace("÷", "/");
  } else {
    new_value = cur_value.textContent;
  }

  cur_value.textContent = eval(new_value);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", ({ target }) => {
    const btn = target.id;

    if (btn === "=") {
      calculate();
    } else if (btn === "delete") {
      de(btn);
    } else if (btn === "clear") {
      clear(btn);
    } else {
      showDisplay(btn);
    }
  });
});
