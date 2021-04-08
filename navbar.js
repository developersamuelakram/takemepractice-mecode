// var menu = document.getElementById("menulist");

// menu.style.maxHeight = "0px";
// function toggleMenu() {
//   if (menu.style.maxHeight == "0px") {
//     menu.style.maxHeight = "500px";
//   } else {
//     menu.style.maxHeight = "0px";
//   }

//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//   }
// }

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
