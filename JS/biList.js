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