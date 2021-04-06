var menu = document.getElementById("menulist");

menu.style.maxHeight = "0px";
function toggleMenu() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "500px";
  } else {
    menu.style.maxHeight = "0px";
  }

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
