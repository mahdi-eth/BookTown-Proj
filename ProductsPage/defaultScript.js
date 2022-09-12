import books from "../DataBase/Data.js";

export const sortElement = document.querySelector(".sorted-by");
export const dropdownItems = document.querySelectorAll("#dropdownItem");
export const main = document.querySelector("#thumb");
export const categorieSelector = [
  ...document.querySelectorAll("#categorieSelector"),
];

dropdownItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    sortElement.innerHTML = ` : ${e.target.innerHTML}`;
  });
});

export default function productMaker(bookData) {
  bookData.forEach((book) => {
    main.innerHTML += `<div class="thumb-wrapper flex-column shadow">
	<div class="img-box">
		<img src="${book.cover}" class="img-fluid" alt="book cover">
	</div>
	<div class="thumb-content">
		<h4 class="book-name">${book.name}</h4>
		<div class="star-rating">
			${book.stars}
		</div>
		<p class="item-price"><strike class="">${book.lastPrice || ""}</strike><b>$${
      book.price
    }</b></p>
		<button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
	</div>
	</div>`;
  });
}

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
    } else if (sortElement.innerHTML == " : Most expensive to Cheapest") {
      const price = books().sort(function (a, b) {
        let priceA = a.price,
          priceB = b.price;
        return priceB - priceA;
      });
      productMaker(price);
    } else if (sortElement.innerHTML == " : Newest Books") {
      const date = books().sort(function (a, b) {
        let dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      productMaker(date);
    } else if (sortElement.innerHTML == " : Best Of BookTown") {
      const rating = books().sort(function (a, b) {
        let rateA = a.rating,
          rateB = b.rating;
        return rateB - rateA;
      });
      productMaker(rating);
    }
  });
});

categorieSelector.forEach((el) => {
  el.addEventListener("click", (e) => {
    main.innerHTML = "";
    if (e.target.innerHTML == "Self-Development") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("self-dev")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Philosophy") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("philosophy")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Newest Books") {
      const date = books().sort(function (a, b) {
        let dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      productMaker(date);
    } else if (e.target.innerHTML == "Novels") {
      const getBooks = books().filter((product) =>
        product.categorie.includes("novel")
      );
      productMaker(getBooks);
    } else if (e.target.innerHTML == "Best Of BookTown") {
      const rating = books().sort(function (a, b) {
        let rateA = a.rating,
          rateB = b.rating;
        return rateB - rateA;
      });
      productMaker(rating);
    }
  });
});
