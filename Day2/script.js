const personal = {
  name: "Suman",
  age: 21,
  usn: "21BTRCS271",
  favColor: ["red", "blue"],
  country: "Nepal",
  dream: "Web Developer",
};
document.getElementById("details").innerHTML =
  "<span class='label'>Name:</span> " +
  personal.name +
  "<br><br>" +
  "<span class='label'>Age:</span> " +
  personal.age +
  "<br><br>" +
  "<span class='label'>USN:</span> " +
  personal.usn +
  "<br><br>" +
  "<span class='label'>FavColor:</span> " +
  personal.favColor.join(", ") +
  "<br><br>" +
  "<span class='label'>Country:</span> " +
  personal.country +
  "<br><br>" +
  "<span class='label'>Dream:</span> " +
  personal.dream;
