const url = "https://kea-alt-del.dk/t7/api/products/";

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
  console.log(product);
  //grab the template
  const template = document.querySelector("#productTemplate").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("h2").textContent = `${product.productdisplayname}`;
  copy.querySelector(".price").textContent = `${product.price}`;
  copy.querySelector(".subtle").textContent = `${product.articletype}`;

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
