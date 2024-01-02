function toggleMenu() {
  // Finder id'et menuContainer
  var x = document.getElementById("menuContainer");
  // Her tjekker vi om menuen allerede er synlig, hvis den er, skjuler denne kode menuen. Hvis den ikke er synlig, viser koden menuen.
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
