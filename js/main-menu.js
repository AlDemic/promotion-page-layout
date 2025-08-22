const optionMenu = document.querySelector(".header__menu"),
      selectBtn = optionMenu.querySelector("#header__menu-button"),
      options = optionMenu.querySelectorAll(".header__menu-option");

function updateAria(isOpen) {
  selectBtn.setAttribute("aria-expanded", isOpen);
  selectBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

selectBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isActive = optionMenu.classList.toggle("active");
  selectBtn.classList.toggle("active", isActive);
  updateAria(isActive);
});

//close menu after click at any links
options.forEach((option) => {
  option.addEventListener("click", () => {
    optionMenu.classList.remove("active");
    selectBtn.classList.remove("active");
    updateAria(false);
  });
});

//close menu by click at any place on page
document.addEventListener("click", (e) => {
  if (!optionMenu.contains(e.target)) {
    optionMenu.classList.remove("active");
    selectBtn.classList.remove("active");
    updateAria(false);
  }
});