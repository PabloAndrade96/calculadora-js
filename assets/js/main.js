const pre_value = document.querySelector("#pre-value");
const cur_value = document.querySelector("#cur-value");
const buttons = document.querySelectorAll(".calculator__button");

window.addEventListener("load", () => loadDarkmode());

buttons.forEach((btn) => {
  btn.addEventListener("click", ({ target }) => {
    const btn = target.id;

    if (btn === "=") {
      calculate();
    } else if (btn === "delete") {
      de();
    } else if (btn === "clear") {
      clear();
    } else if (btn === "darkmode") {
      darkmode(btn);
    } else {
      showDisplay(btn);
    }
  });
});

/* Functions */

const showDisplay = (btn) => {
  if (btn === "*") {
    cur_value.innerHTML += `&#10005;`;
  } else if (btn === "/") {
    cur_value.innerHTML += `&#247;`;
  } else {
    cur_value.textContent += btn;
  }
};

const clear = () => {
  pre_value.textContent = "";
  cur_value.textContent = "";
};

const de = () => (cur_value.textContent = cur_value.textContent.slice(0, -1));

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

const darkmode = (btn) => {
  const body = document.querySelector("body");
  const icon = document.querySelector(`#${btn} i`);

  body.classList.toggle("darkmode");

  if (icon.classList.contains("bi-moon")) {
    icon.classList.replace("bi-moon", "bi-sun");
  } else {
    icon.classList.replace("bi-sun", "bi-moon");
  }

  storeDarkmode(body.classList.contains("darkmode"));
};

const loadDarkmode = () => {
  const darkmode = localStorage.getItem("darkmode");

  if (!darkmode) {
    storeDarkmode("false");
  } else if (darkmode === "true") {
    document.body.classList.add("darkmode");
  }
};

const storeDarkmode = (value) => localStorage.setItem("darkmode", value);
