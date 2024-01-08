// slideIndex holder styr på det aktuelle billede i karusellen
let slideIndex = 0;
// viser det første billede i karusellen
showSlides(slideIndex);
// funktion til at skifte frem og tilbage i billederne
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // henter alle billeder
  const slides = document.querySelectorAll(".slides img");
  // hvis n er større end antallet af billeder, sættes slideIndex til 0 for at karusellen starter forfra
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // hvis n er mindre end 0, sættes slideIndex til det sidste billede
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // dette sikrer at ingen billeder er synlige før det aktuelle billede er bestemt / klar
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // viser det aktuelle billede
  slides[slideIndex].style.display = "block";
}
