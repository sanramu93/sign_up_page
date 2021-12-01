const btnUp = document.querySelector(".btn-up");
const btnIn = document.querySelector(".btn-in");

const textIn = document.querySelector(".text-in");
const textUp = document.querySelector(".text-up");

console.log(textIn, textUp);

const activeBtn = (el) => {
  el.classList.add("btn--active");
};

const hideBtn = (el) => {
  el.classList.remove("btn--active");
};

const activeText = (el) => {
  el.classList.add("text--active");
};

const hideText = (el) => {
  el.classList.remove("text--active");
};

btnIn.addEventListener("click", () => {
  activeBtn(btnIn);

  hideBtn(btnUp);

  activeText(textIn);
  hideText(textUp);
});

btnUp.addEventListener("click", () => {
  activeBtn(btnUp);

  hideBtn(btnIn);

  activeText(textUp);
  hideText(textIn);
});
