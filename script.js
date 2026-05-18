const button = document.getElementById("change-btn");
const text = document.getElementById("hello-text");

button.addEventListener("click", () => {
  text.textContent = "GitHub Pages Works!";
});