const productItemsList = document.getElementById("productItemsList");
const parsedData = JSON.parse(localStorage.getItem("data"));

parsedData.forEach((product) => {
        const cartCard = `<tr>
        <th scope="row">
          <div class="d-flex align-items-center">
            <img
              src="${product.cover}"
              class="img-fluid rounded-3"
              style="width: 120px"
              alt="Book"
            />
            <div class="flex-column ms-4">
              <p class="mb-2">${product.name}</p>
            </div>
          </div>
        </th>
        <td class="align-middle">
          <p class="mb-0" style="font-weight: 500">Paperback</p>
        </td>
        <td class="align-middle">
          <div class="d-flex flex-row">
            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i class="fas fa-minus"></i>
            </button>
        
            <input
              id="form1"
              min="0"
              name="quantity"
              value="1"
              type="number"
              class="form-control form-control-sm"
              style="width: 50px"
            />
        
            <button
              class="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </td>
        <td class="align-middle">
          <p class="mb-0" style="font-weight: 500">${product.price}<strike class="ms-3">${product.lastprice || ""}</strike></p>
        </td>
        </tr> `
        productItemsList.innerHTML += cartCard;
    });

