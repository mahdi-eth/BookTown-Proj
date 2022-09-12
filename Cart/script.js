const productItemsList = document.getElementById("productItemsList");
let parsedData = JSON.parse(localStorage.getItem("data"));

parsedData.forEach((product) => {
  const cartCard = `<tr>
        <td scope="row">
          <div class="d-flex align-items-center">
            <img
              src="${product.cover}"
              class="img-fluid rounded-3"
              style="width: 120px"
              alt="Book"
            />
            <div class="flex-column ms-4">
              <p class="mb-2 d-none d-sm-inline-block">${product.name}</p>
            </div>
          </div>
        </td>
        <td class="align-middle">
          <div class="d-flex flex-row">
            <button
              class="btn btn-link px-2 me-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i class="bi bi-dash-lg text-danger"></i>
            </button>
        
            <input
              id="form1"
              min="1"
              name="quantity"
              value="1"
              type="number"
              class="form-control form-control-sm"
              style="width: 50px"
            />
        
            <button
              class="btn btn-link px-2 ms-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i class="bi bi-plus-lg text-danger"></i>
            </button>
          </div>
        </td>
        <td class="align-middle">
        <strike class="text-secondary">${product.lastprice || ""}</strike>
        <p class="mb-0" style="font-weight: 500">${product.price}</p>
          </td>
          <td class="align-middle">
          <button id="deleterBtn" type="button" class="btn ms-4 mt-1 btn-outline-danger btn-sm" data-mdb-toggle="tooltip"
          title="Remove item">
          <i class="bi bi-trash"></i>
          </button>
        </td>`;
  productItemsList.innerHTML += cartCard;
  const deleterBtn = document.querySelectorAll("#deleterBtn");
  deleterBtn.forEach(el => {
  el.addEventListener("click", () => {
    const element = el.parentElement.parentElement.children[0].children[0].children[1].children[0].innerHTML;
    const filtredElement = parsedData.filter(item => item.name != element);
    localStorage.setItem("data", JSON.stringify(filtredElement));
    location.reload();
  })})
});

