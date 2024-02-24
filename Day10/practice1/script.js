const button = document.getElementById("toggleButton");
let isBlue = true;

button.addEventListener("click", function () {
  if (isBlue) {
    button.style.color = "red";
    isBlue = false;
  } else {
    button.style.color = "blue";
    isBlue = true;
  }
});
