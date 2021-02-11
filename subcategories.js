//fetch data
fetch("http://kea-alt-del.dk/t7/api/subcategories")
  .then((res) => res.json())
  .then(gotData);

//loop through
function gotData(data) {
  data.forEach(showSubCategory);
}

function showSubCategory(item) {
  console.log(item.subcategory);
  //grab
  const template = document.querySelector("template").content;
  //clone
  const copy = template.cloneNode(true);
  //change
  copy.querySelector("a").textContent = item.subcategory;

  //parent
  const topParent = document.querySelector("#letter_a");
  const elemParent = topParent.querySelector("ol");
  //append
  elemParent.appendChild(copy);
}
