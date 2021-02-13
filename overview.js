//create navigation
//        <li><a href="#letter_a">A</a></li>
const letters = "abcdefghijklmnopqrstuvwxyz";

const letterArray = letters.split("");
console.log("letterArray");
letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLink(letter);
  //creat section
  createBrandSection(letter);
}

function createBrandSection(letter) {
  const template = document.querySelector("#sectionTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = letter;
  clone.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".categories").appendChild(clone);
}

function createNavLink(letter) {
  //create nav link
  const temp = document.querySelector("#linkTemplate").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".letterLinks ol").appendChild(copy);
}

//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  data.forEach(showBrand);
}

function showBrand(brand) {
  //console.log(brand.brandname);
  const template = document.querySelector("#linkTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;
  const firstLetter = brand.brandname[0].toLowerCase();
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");
  elemParent.appendChild(copy);
}
//loop through it

//grab template, clone it, grab parent, append
