const url = "https://kea-alt-del.dk/t7/api/products";

// fetch the data
fetch(url)
  // simplify > .then((res) => res.json())
  .then(function (res) {
    return res.json();
  })
  // simplify > .then((data) => showProduct(data));
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // grab the template
  const template = document.querySelector("#productTemplate").content;
  // clone it
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(
    "img"
  ).alt = `${product.brandname} ${product.productdisplayname}`;
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  copy.querySelector(".price span").textContent = product.price;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent =
      "DKK " + (product.price - product.price / product.discount).toFixed();
    copy.querySelector(".discounted p:nth-child(2)").textContent =
      product.discount + "%";
  }
  // grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
