function isEven(number) {
  return number % 2 === 0;
}

function checkNumber() {
  var number = parseInt(document.getElementById("numberInput").value);

  if (isNaN(number)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid number.";
  } else {
    if (isEven(number)) {
      document.getElementById("result").innerHTML = "The number is even.";
    } else {
      document.getElementById("result").innerHTML = "The number is odd.";
    }
  }
}
