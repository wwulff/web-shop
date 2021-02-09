const url = "https://kea-alt-del.dk/t7/api/products/2801";
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page
function showProduct(product) {
  console.log(product);
  document.querySelector(".product_info h2").textContent =
    product.productdisplayname;
  document.querySelector(".product_info .colour").textContent =
    product.basecolour;

  //image changes
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productImage").alt = product.productdisplayname;
}
