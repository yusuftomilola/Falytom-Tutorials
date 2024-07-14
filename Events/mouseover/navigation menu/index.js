const menuItem = document.querySelector(".menu-item");
const subMenu = document.querySelector(".submenu");

menuItem.addEventListener("mouseover", () => {
  subMenu.style.display = "block";
});

menuItem.addEventListener("mouseout", () => {
  subMenu.style.display = "none";
});
