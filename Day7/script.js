function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genNum() {
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max)) {
    //   alert("Please enter a valid number");
    document.getElementById("rand").innerHTML = "Please enter a valid number";
    return;
  }
  if (min >= max) {
    document.getElementById("rand").innerHTML =
      "Minimum number must be less than maximum number.";
    return;
  }
  document.getElementById("rand").innerHTML = generateRandomNumber(min, max);
}

function regenNum() {
  document.getElementById("max").value = "";
  document.getElementById("min").value = "";
  document.getElementById("rand").innerHTML = "";
}
