import Bagpack from "./bagpack.js";

const personal1 = new Bagpack(
  "Suman",
  21,
  "21BTRCS271",
  "Blue",
  "Nepal",
  "Web Developer"
);
const personal2 = new Bagpack(
  "Somnath",
  21,
  "21BTRCS271",
  "Blue",
  "Nepal",
  "Web Developer"
);

// Creating instance 1 of the class

document.getElementById("instance1").innerHTML =
  "<span class='label'>Name:</span> " +
  personal1.name +
  "<br><br>" +
  "<span class='label'>Age:</span> " +
  personal1.age +
  "<br><br>" +
  "<span class='label'>USN:</span> " +
  personal1.usn +
  "<br><br>" +
  "<span class='label'>FavColor:</span> " +
  personal1.color +
  "<br><br>" +
  "<span class='label'>Country:</span> " +
  personal1.country +
  "<br><br>" +
  "<span class='label'>Dream:</span> " +
  personal1.dream +
  "<br>";

// Creating instance 2 of the class

document.getElementById("instance2").innerHTML =
  "<span class='label'>Name:</span> " +
  personal2.name +
  "<br><br>" +
  "<span class='label'>Age:</span> " +
  personal2.age +
  "<br><br>" +
  "<span class='label'>USN:</span> " +
  personal2.usn +
  "<br><br>" +
  "<span class='label'>FavColor:</span> " +
  personal2.color +
  "<br><br>" +
  "<span class='label'>Country:</span> " +
  personal2.country +
  "<br><br>" +
  "<span class='label'>Dream:</span> " +
  personal2.dream;
