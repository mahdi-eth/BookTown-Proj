function books(){
    return [
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL254_SR254,254_.jpg",
            name: "Verity",
            price: "$11.26",
            date: 1,
            stars: "a-icon a-icon-star-small a-star-small-4-5 aok-align-top" 
        },
        {
            cover: "https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg",
            name: "It Starts with Us: A Novel (2) (It Ends with Us)",
            price: "$11.26",
            date: 2
        },
    ]
}

// Newest books sorting
console.log(books().sort(function (a, b) {
	let dateA = new Date(a.date), dateB = new Date(b.date)
	return dateA - dateB
}));


// Looping
books().forEach( (book) => {
    let p = document.createElement("p");
    p.innerHTML = book.name;
    let img = document.createElement("img");
    img.src = book.cover;
    document.body.appendChild(img)  
    document.body.appendChild(p)  
})
