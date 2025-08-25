//get DOM elements
const optionMenu = document.querySelector(".header__menu"),
      selectBtn = optionMenu.querySelector("#header__menu-button"),
      options = optionMenu.querySelectorAll(".header__menu-option");

//check if elements are exist
if(!optionMenu || !selectBtn || options.length === 0) {
  console.error("Some elements aren't found in DOM");
} else {

    //aria-label update function for main menu
    function updateAria(isOpen) {
      selectBtn.setAttribute("aria-expanded", isOpen);
      selectBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    }

    //click on main menu button
    selectBtn.addEventListener("click", (e) => {
      e.stopPropagation(); //stop event by bubbling up to parent DOM
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
}