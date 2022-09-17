// send data to cart section

let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null){
  dataState = [];
}

window.addEventListener("click", (el) => {
  if (el.target.innerText == "Add to Cart ") {
    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: el.target.parentElement.parentElement.children[1].children[0]
        .innerText,
      price:
        el.target.parentElement.parentElement.children[1].children[2]
          .children[1].innerText.slice(1),
          value: Math.random() * 10e60,
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



// bi-list section

const biList = document.querySelector(".bi-list");
const secondNavbarBiListClicked  = document.querySelector(".second-navbar-bi-list-clicked");
const closeListBtn  = document.querySelector(".close-list-btn");

biList.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "0rem";
})

closeListBtn.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "-40rem";
  setTimeout(() => {
    location.reload();
  }, 500);
})

