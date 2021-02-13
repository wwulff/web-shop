const url = "https://kea-alt-del.dk/t7/api/products/2801";
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
// populate page

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(".productinfo .productname").textContent =
    product.productdisplayname;

  /*
     <img
        class="productimage"
        src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp"
        alt="product image view"
      />
    */

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}
