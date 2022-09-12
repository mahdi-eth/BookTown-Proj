// send data to cart section

let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null){
  dataState = [];
}


window.addEventListener("mouseenter", () => {
  location.reload();
})


window.addEventListener("click", (el) => {
  console.log(el);
  if (el.target.innerText == "Add to Cart ") {
    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: el.target.parentElement.parentElement.children[1].children[0]
        .innerText,
      price:
        el.target.parentElement.parentElement.children[1].children[2]
          .children[1].innerText,
      lastprice: (() => {
        if (
          el.target.parentElement.parentElement.children[1].children[2]
            .children[0].innerText
        ) {
          return el.target.parentElement.parentElement.children[1].children[2]
            .children[0].innerText;
        }
      })(),
    };
    dataState.push(data);
    localStorage.setItem("data", JSON.stringify(dataState));
  }
});


// added to cart , alert section

window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart "){
    alert(`${el.target.parentElement.children[0].innerText} Added to cart!`);
}});