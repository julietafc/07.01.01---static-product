// create navigation
// <li><a href="#letter_a">A</a></li>

const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArray = letters.split("");
console.log(letterArray);
letterArray.forEach(handleLetter);

function handleLetter(letter) {
  //create nav link
  createNavLink(letter);

  //create section
  createSubCatSection(letter);
}

function createSubCatSection(letter) {
  const template = document.querySelector("#sectionTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = letter;
  clone.querySelector("section").id = `letter_${letter}`;
  document.querySelector(".subcatList").appendChild(clone);
}

function createNavLink(letter) {
  const template = document.querySelector("#linkTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;
  document.querySelector(".index ol").appendChild(copy);
}

//fetch data
fetch("http://kea-alt-del.dk/t7/api/subcategories")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  data.forEach(showSubCategory);
}

function showSubCategory(item) {
  //   console.log(item.subcategory);
  //grab
  const template = document.querySelector("#linkTemplate").content;
  //clone
  const copy = template.cloneNode(true);
  //change
  copy.querySelector("a").textContent = item.subcategory;
  copy.querySelector(
    "a"
  ).href = `productlist.html?subcategory=${item.subcategory}`;
  //parent
  const firstLetter = item.subcategory[0].toLowerCase();
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("section ol");
  //append
  elemParent.appendChild(copy);
}
