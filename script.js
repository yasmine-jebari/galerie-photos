const DEFAULT_TEXT =
  "Passez la souris ou naviguez avec la touche Tab sur une image ci-dessous pour l'afficher ici.";

// Affiche l'image survolée ou ciblée dans la grande zone d'aperçu
function upDate(previewPic) {
  const preview = document.getElementById("image");
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
  preview.innerHTML = previewPic.alt;
}

// Remet la zone d'aperçu dans son état initial
function unDo() {
  const preview = document.getElementById("image");
  preview.style.backgroundImage = "none";
  preview.innerHTML = DEFAULT_TEXT;
}

// Ajoute tabindex à chaque image pour l'accès au clavier
function addTabFocus() {
  console.log("Page chargée : ajout des tabindex");
  const images = document.querySelectorAll("figure img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

window.addEventListener("load", addTabFocus);
