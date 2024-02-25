let heading = document.querySelector("h1");
let count = 0;
let currentIndex = 0;
let select = document.getElementById("button1");
let increase = document.getElementById("increase");

select.addEventListener("click", function () {
  count++;
  increase.textContent = "The count is: " + count;
});

let colors = ["red", "green", "yellow", "orange"];
button1.addEventListener("click", function () {
  heading.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});
