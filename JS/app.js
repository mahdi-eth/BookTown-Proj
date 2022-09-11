let listOfProducts = [];

export default window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart ") {
    return listOfProducts.push(el.target.parentElement.parentElement);
}});
