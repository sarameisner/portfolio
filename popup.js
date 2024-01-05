// henter id'et
var modal = document.getElementById("myModal");

// henter knappen der åbner pop up vinduet
var btn = document.getElementById("myBtn");

// henter id'en der hedder close som lukker pop up vinduet
var span = document.getElementById("close");

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
  // to lig med betyder at den spørger om det er den samme, og fordi det er den så siger den display none
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
