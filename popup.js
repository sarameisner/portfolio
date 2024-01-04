// henter id'et
var modal = document.getElementById("myModal");

// henter knappen der åbner pop up vinduet
var btn = document.getElementById("myBtn");

// henter "<span>" som lukker pop up vinduet
var span = document.getElementsByClassName("close")[0];

// gør at når der klikkes så åbner pop up vinduet
btn.onclick = function () {
  modal.style.display = "block";
};

// når der klikkes på <span> (x) så lukker vinduet
span.onclick = function () {
  modal.style.display = "none";
};

// når der bliver klikket uden fra pop up vinduet lukkes det
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
