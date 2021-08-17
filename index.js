let personName;
let dob;
let decreased = false;
console.log(localStorage.getItem("name"));
if (localStorage.getItem("name") == null) {
  do {
    personName = prompt("Please enter your name: ");
  } while (
    personName  == null ||
    (personName.length < 1 || personName.split(" ").length < 1)
  );
  localStorage.setItem("name", personName);
}
let textName = document.createElement("P");
textName.innerHTML = ` Welcome ${localStorage.getItem("name")}`;
document.body.appendChild(textName);
if(!localStorage.getItem("dob")){
  do {
    dob = prompt("Enter your Date of Birht - MM/DD/YYYY");
  } while (dob.length !== 10);
  localStorage.setItem("dob", dob);
}
let dobDate = new Date(localStorage.getItem("dob"));
setInterval(() => {
  let currentDate = new Date();
  let SS = currentDate.getSeconds();
  let MM = currentDate.getMinutes();
  let HH = currentDate.getHours();
  let dd = currentDate.getDate() - dobDate.getDate();
  let mm = currentDate.getMonth() - dobDate.getMonth();
  if (dd < 0) {
    decreased = true;
    mm--;
    mm === 1 ||
    mm === 3 ||
    mm === 5 ||
    mm === 7 ||
    mm === 8 ||
    mm === 10 ||
    mm === 12
      ? (dd = dd + 31)
      : mm === 2
      ? (dd = dd + 28)
      : (dd = dd + 30);
  }
  let yyyy = currentDate.getFullYear() - dobDate.getFullYear();
  if (decreased && mm === 2 && yyyy % 4 === 0 && yyyy % 100 !== 0) {
    dd++;
  }
  if (mm < 0) {
    yyyy--;
    mm = mm + 12;
  }
  let text = document.createElement("P");
  text.innerHTML = ` Your age is ${yyyy} years ${mm} months ${dd} days ${HH} hours ${MM} minutes ${SS} seconds`;
  document.body.appendChild(text);
}, 1000);
