// Selecting elements
let container = document.getElementById("container");
let heading = document.querySelector("h1");

// Modifying elements
heading.textContent = "Hello, JavaScript!";

// Adding elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
container.appendChild(newParagraph);

// Removing elements
let paragraphToRemove = document.querySelector("p");
container.removeChild(paragraphToRemove);
