import books from "../DataBase/Data.js";

const sortElement = document.querySelector(".sorted-by");
const dropdownItems = document.querySelectorAll("#dropdownItem");
const main = document.querySelector("#thumb");
console.log(main.innerHTML);

dropdownItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    sortElement.innerHTML = ` : ${e.target.innerHTML}`;
  });
});

function productMaker(bookData) {
	bookData.forEach((book) => {
    main.innerHTML += `<div class="thumb-wrapper d-flex flex-column shadow">
	<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
	<div class="img-box">
		<img src="${book.cover}" class="img-fluid" alt="book cover">
	</div>
	<div class="thumb-content">
		<h4>${book.name}</h4>
		<div class="star-rating">
			${book.stars}
		</div>
		<p class="item-price fs-18"><strike class="fs-16">${
      book.lastPrice || ""
    }</strike><b>$${book.price}</b></p>
		<a href="#" class="btn btn-danger  text-light">Add to Cart <i class="bi bi-bag"></i></a>
	</div>
	</div>`;
  });
}

function newCondition() {
  if (sortElement.innerHTML == " : Newest Books") {
    const date = books().sort(function (a, b) {
      let dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateA - dateB;
    });
    productMaker(date);
  }
}
newCondition();


dropdownItems.forEach((el) => {
	el.addEventListener("click", (e) => {
		main.innerHTML = "";
		if (sortElement.innerHTML == " : Cheapest to most expensive") {
			const price = books().sort(function (a, b) {
			  let priceA = a.price,
				priceB = b.price;
			  return priceA - priceB;
			});
			 productMaker(price);
		  }
	});
  });



$(document).ready(function () {
  $(".wish-icon i").click(function () {
    $(this).toggleClass("fa-heart fa-heart-o");
  });
});
