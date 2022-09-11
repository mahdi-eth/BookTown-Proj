let listOfProducts = [];

window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart ") {
    listOfProducts.push(el.target.parentElement.parentElement.innerHTML);
    localStorage.setItem("cart", JSON.stringify(listOfProducts));
  }
});
