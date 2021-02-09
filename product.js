const urlParams = new URLSearchParams(window.location.search);
//grab URL in id and store its value in id
const id = urlParams.get("id");
console.log(id);

//const id = 1163;
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//fetch data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate page

function showProduct(product) {
  console.log(product);

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}

/*
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

//const id = 1163;
const url = "https://kea-alt-del.dk/t7/api/products/2801" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".product_info .productName").textContent =
    product.productdisplayname;
  document.querySelector(".product_info .colour").textContent =
    product.basecolour;

  //image changes
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector("img.productImage").alt = product.productdisplayname;
}

*/
