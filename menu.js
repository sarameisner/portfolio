// gør så man kan klikke på den der hedder menu
document.querySelector("#menu").addEventListener("click", toggleMenu);
function toggleMenu() {
  // Finder id'et menudrop
  let x = document.getElementById("menudrop");
  // Her tjekker vi om menuen allerede er synlig, hvis den er, skjuler denne kode menuen. Hvis den ikke er synlig, viser koden menuen.
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
