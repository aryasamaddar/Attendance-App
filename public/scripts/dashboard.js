document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navMenu = document.getElementById("nav-menu");

  menu.addEventListener("click", function (e) {
    console.log(e, "click");
    navMenu.style.display =
      navMenu.style.display === "block" ? "none" : "block";
  });
});
