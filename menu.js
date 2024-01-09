// gør så man kan klikke på den der hedder menu
document.querySelector("#menu").addEventListener("click", toggleMenu);
function toggleMenu() {
  // finder id'et menudrop
  let x = document.getElementById("menudrop");
  // her tjekker den om menuen allerede er synlig, hvis den er, skjuler denne kode menuen. hvis den ikke er synlig, vises menuen
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
