const itemCircles = document.querySelectorAll(".item-circle");
const sortOptions = document.querySelectorAll(".sort-option");
const loginAction = document.querySelector(".login");
const registerAction = document.querySelector(".register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const closeFormBtn = document.querySelector(".close-form-btn");
const form = document.querySelector(".form");
const headerUser = document.querySelector(".header-user");

itemCircles.forEach((itemCircle) => {
  itemCircle.addEventListener("click", function () {
    itemCircle.classList.toggle("active");
  });
});

sortOptions.forEach((sortOption) => {
  sortOption.addEventListener("click", function () {
    const sortOptionDropdown = sortOption.querySelector(
      ".sort-option-dropdown"
    );
    sortOptionDropdown.classList.toggle("active");
    sortOptionDropdown.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

loginAction.addEventListener("click", function () {
  loginAction.classList.add("active");
  registerAction.classList.remove("active");
  formLogin.classList.add("active");
  formRegister.classList.remove("active");
});

registerAction.addEventListener("click", function () {
  registerAction.classList.add("active");
  loginAction.classList.remove("active");
  formRegister.classList.add("active");
  formLogin.classList.remove("active");
});

closeFormBtn.addEventListener("click", function () {
  form.style.display = "none";
});

headerUser.addEventListener("click", function () {
  form.style.display = "block";
});
