let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (!isNaN(num1) && !isNaN(num2)) {
  let sum = num1 + num2;

  document.getElementById("adding").innerHTML = "The sum is: " + sum;
} else {
  document.getElementById("adding").innerHTML =
    "Invalid input. Please enter numbers.";
}
