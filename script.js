const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const shareSection = document.getElementById("share-section");

btnOpen.addEventListener("click", function () {
  shareSection.style.display = "flex";
  btnOpen.style.display = "none";
});

btnClose.addEventListener("click", function () {
  shareSection.style.display = "none";
  btnOpen.style.display = "initial";
});
