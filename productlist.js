const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
console.log(brandname);
document.querySelector("h1").textContent = brandname;

const url = "https://kea-alt-del.dk/t7/api/products/?brandname=" + brandname;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h2").textContent = `${product.productdisplayname}`;
  copy.querySelector(".price").textContent = `${product.price}`;
  copy.querySelector(".subtle").textContent = `${product.articletype}`;
  copy.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("sale");
    copy.querySelector(".discount p").textContent =
      product.price / product.discount;
  }

  //grab parent
  const parent = document.querySelector("main");

  //append it
  parent.appendChild(copy);
}
