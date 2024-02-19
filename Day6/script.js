function fact(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
}

function checkFact() {
  var num = parseInt(document.getElementById("num").value);

  document.getElementById("fact").innerHTML =
    "The Factorial of " + num + " is " + fact(num);
}

function clearResult() {
  document.getElementById("num").value = "";
  document.getElementById("fact").innerHTML = "";
}
