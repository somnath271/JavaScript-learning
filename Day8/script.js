function showContent(contentId) {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    content.style.display = "none";
  });

  var contentToShow = document.getElementById(contentId);
  if (contentToShow) {
    contentToShow.style.display = "block";
  }
}
// odd or even
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

function recheckNumber() {
  document.getElementById("numberInput").value = "";
  document.getElementById("result").innerHTML = "";
}

//factorial

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

// Generate random number

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
  document.getElementById("rand").innerHTML =
    "The random number is " + generateRandomNumber(min, max);
}

function regenNum() {
  document.getElementById("max").value = "";
  document.getElementById("min").value = "";
  document.getElementById("rand").innerHTML = "";
}
