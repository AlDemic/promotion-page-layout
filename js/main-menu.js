const optionMenu = document.querySelector(".header__menu"),
  selectBtn = optionMenu.querySelector("#header__menu-button"),
  options = optionMenu.querySelectorAll(".header__menu-option");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
  selectBtn.classList.toggle("active");
  const expanded = selectBtn.getAttribute("aria-expanded") === "true";
  selectBtn.setAttribute("aria-expanded", !expanded);
  if (expanded) {
    selectBtn.setAttribute("aria-label", "Open menu");
  } else {
    selectBtn.setAttribute("aria-label", "Close menu");
  }
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".header__menu-link").innerText;
    optionMenu.classList.remove("active");
  });
});