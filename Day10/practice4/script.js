const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  accordion.addEventListener("mouseover", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
