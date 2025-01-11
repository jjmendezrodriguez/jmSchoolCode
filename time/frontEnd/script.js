const singUp = document.querySelector(".singup-section");
const singIn = document.querySelector(".singin-section");
const body = document.querySelector("body");

function showSingup() {
  (singUp.style.display = "flex"), (singIn.style.display = "none");
}

function showSingin() {
  (singIn.style.display = "flex"), (singUp.style.display = "none");
}
