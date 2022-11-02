import books from "../DataBase/Data.js";

// new books section

const newBooksCarouselItem1 = document.getElementById("newBooksCarouselItem1");
const newBooksCarouselItem2 = document.getElementById("newBooksCarouselItem2");
const newBooksCarouselItem3 = document.getElementById("newBooksCarouselItem3");

const newestBookFiltred1 = books().filter(book => book.date <= 4);
const newestBookFiltred2 = books().filter(book => book.date <= 8 && book.date > 4);
const newestBookFiltred3 = books().filter(book => book.date <= 12 && book.date > 8);

function cartCreator(book) {
    return `<div class="col-lg-3 col-sm-6">
    <div class="thumb-wrapper">
      <div class="img-box">
        <img src="${book.cover}" class="img-fluid" alt="book img">
      </div>
      <div class="thumb-content">
        <h4 class="book-name">${book.name}</h4>
            ${book.stars}
        <p class="item-price"><strike>${book.lastPrice || ""}</strike><b>$${book.price}</b></p>
        <button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
      </div>
    </div>`
}

newestBookFiltred1.forEach(book => {
    newBooksCarouselItem1.innerHTML += (cartCreator(book));
})

newestBookFiltred2.forEach(book => {
    newBooksCarouselItem2.innerHTML += (cartCreator(book));
})

newestBookFiltred3.forEach(book => {
    newBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// best books section

const bestBooksCarouselItem1 = document.getElementById("bestBooksCarouselItem1");
const bestBooksCarouselItem2 = document.getElementById("bestBooksCarouselItem2");
const bestBooksCarouselItem3 = document.getElementById("bestBooksCarouselItem3");

const sortedBooksPerRate = books().sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

const slicedSortedBooksPerRate1 = sortedBooksPerRate.slice(0, 4);
const slicedSortedBooksPerRate2 = sortedBooksPerRate.slice(4, 8);
const slicedSortedBooksPerRate3 = sortedBooksPerRate.slice(8, 12);

slicedSortedBooksPerRate1.forEach(book => {
    bestBooksCarouselItem1.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate2.forEach(book => {
    bestBooksCarouselItem2.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate3.forEach(book => {
    bestBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// best deals section

const bestDealsCarouselItem1 = document.getElementById("bestDealsCarouselItem1");
const bestDealsCarouselItem2 = document.getElementById("bestDealsCarouselItem2");
const bestDealsCarouselItem3 = document.getElementById("bestDealsCarouselItem3");

const dealedBooks = books().filter(book => book.deal);

dealedBooks.slice(0,4).forEach(book => {
    bestDealsCarouselItem1.innerHTML += (cartCreator(book));
})

dealedBooks.slice(4,8).forEach(book => {
    bestDealsCarouselItem2.innerHTML += (cartCreator(book));
})

dealedBooks.slice(8,12).forEach(book => {
    bestDealsCarouselItem3.innerHTML += (cartCreator(book));
})


// best of philosophy section

const bestOfPhilosophyCarouselItem1 = document.getElementById("bestOfPhilosophyCarouselItem1");
const bestOfPhilosophyCarouselItem2 = document.getElementById("bestOfPhilosophyCarouselItem2");

const philosophyBooks = books().filter(book => book.categorie.includes("philosophy"));

philosophyBooks.slice(0,4).forEach(book => {
    bestOfPhilosophyCarouselItem1.innerHTML += (cartCreator(book));
})

philosophyBooks.slice(4,8).forEach(book => {
    bestOfPhilosophyCarouselItem2.innerHTML += (cartCreator(book));
})


// best of self development section

const bestSelfDevCarouselItem1 = document.getElementById("bestSelfDevCarouselItem1");
const bestSelfDevCarouselItem2 = document.getElementById("bestSelfDevCarouselItem2");
const bestSelfDevCarouselItem3 = document.getElementById("bestSelfDevCarouselItem3");

const selfDevBooks = books().filter(book => book.categorie.includes("self-dev"));

selfDevBooks.slice(0,3).forEach(book => {
    bestSelfDevCarouselItem1.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(3,6).forEach(book => {
    bestSelfDevCarouselItem2.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(6,9).forEach(book => {
    bestSelfDevCarouselItem3.innerHTML += (cartCreator(book));
})

// best of snovels section

const bestNovelsCarouselItem1 = document.getElementById("bestNovelsCarouselItem1");
const bestNovelsCarouselItem2 = document.getElementById("bestNovelsCarouselItem2");
const bestNovelsCarouselItem3 = document.getElementById("bestNovelsCarouselItem3");

const novels = books().filter(book => book.categorie.includes("novel"));
const sortednovelsPerRate = novels.sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

sortednovelsPerRate.slice(0,4).forEach(book => {
    bestNovelsCarouselItem1.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(4,8).forEach(book => {
    bestNovelsCarouselItem2.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(8,12).forEach(book => {
    bestNovelsCarouselItem3.innerHTML += (cartCreator(book));
})

