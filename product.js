const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch the data
fetch(url)
  .then((res) => res.json())

  .then((data) => showProduct(data));

// populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".index .brand").textContent = product.brandname;
  document.querySelector(".index .category").textContent = product.category;
  document.querySelector(".index .sub-category").textContent =
    product.subcategory;
  document.querySelector(".index .productname").textContent =
    product.productdisplayname;
  document.querySelector(".index .gender").textContent = product.gender;

  document.querySelector(".productInfo .price").textContent = product.price;
  document.querySelector(".productInfo .productname").textContent =
    product.productdisplayname;
  document.querySelector(".productInfo .info").textContent =
    product.description;
  document.querySelector(".productInfo .sub-category").textContent =
    product.subcategory;

  document.querySelector(
    "img.productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".productimg").alt = product.productdisplayname;
}
