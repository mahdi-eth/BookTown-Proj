const productItemsList = document.getElementById("productItemsList");

let parsedData = JSON.parse(localStorage.getItem("data")) || [];

if (parsedData) {
  parsedData.forEach((product, number) => {
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
        </td>
        <td id="myAdderTd" class="align-middle">
        <button id="adderBtn" type="button" class="btn border-0 ms-4 mt-1 btn-outline-danger btn-sm" data-mdb-toggle="tooltip"
        title="Duplicate item">
        <i class="bi bi-plus-lg"></i>
        </button>
      </td>
        <td class="align-middle">
        <strike class="text-secondary">${product.lastprice || ""}</strike>
        <p class="mb-0" style="font-weight: 500">$${product.price}</p>
          </td>
          <td id="myTd" class="align-middle">
          <button id="deleterBtn" type="button" class="btn ms-4 mt-1 btn-outline-danger btn-sm" data-mdb-toggle="tooltip"
          title="Remove item">
          <i class="bi bi-trash"></i>
        <div class="d-none">${product.value}</div>
          </button>
        </td>
        </tr>
        `;

    productItemsList.innerHTML += cartCard;

    const deleterBtn = document.querySelectorAll("#deleterBtn");
    deleterBtn.forEach((el) => {
      el.addEventListener("click", () => {
        const elementValue =
          el.parentElement.parentElement.children[3].children[0].children[1]
            .innerHTML;
        const filtredElementByValue = parsedData.filter(
          (item) => item.value != elementValue
        );
        localStorage.setItem("data", JSON.stringify(filtredElementByValue));
        location.reload();
      });
    });

    const adderBtn = document.querySelectorAll("#adderBtn");
    adderBtn.forEach((el) => {
      el.addEventListener("click", () => {
        let data = {
          cover:
            el.parentElement.parentElement.children[0].children[0].children[0]
              .src,
          name: el.parentElement.parentElement.children[0].children[0]
            .children[1].innerText,
          price:
            el.parentElement.parentElement.children[2].children[1].innerText.slice(
              1
            ),
          value: Math.random() * 10e60,
          lastprice: (() => {
            if (el.parentElement.parentElement.innerText) {
              return el.parentElement.parentElement.children[2].children[0]
                .innerText;
            }
          })(),
        };
        console.log(data.value);
        parsedData.push(data);
        localStorage.setItem("data", JSON.stringify(parsedData));
        location.reload();
      });
    });
  });
}

// proceed to pay modal section

const modalBody = document.querySelector(".modal-body");
let totalPrice = 0;

parsedData.forEach((product) => {
  const productBody1 = `<div class="d-flex justify-content-between align-items-center py-3 pe-4">
  <div class="">
    <div class="d-flex align-items-center">
      <img
        src="${product.cover}"
        class="img-fluid rounded-3"
        style="width: 120px"
        alt="Book"
      />
      <div class="flex-column ms-4">
        <p class="mb-2 d-none d-sm-inline fs-10">${product.name}</p>
      </div>
    </div>
  </div>
  <div class="align-middle">
  </div>
  <div class="align-middle">
  <strike class="text-secondary">${product.lastprice || ""}</strike>
  <p class="mb-0" style="font-weight: 500">$${product.price}</p>
    </div>
    </div>`;
  modalBody.innerHTML += productBody1;
  totalPrice += Math.round(Number(product.price) * 100) / 100;
});

const modalBody2 = document.querySelector(".modal-body-2");

function modalBody2Creator() {
  totalPrice = Math.round(totalPrice * 100) / 100;
  const productBody2 = ` <div class="mb-5">
<div class="form-floating">
  <input type="number" class="form-control border border-danger border-opacity-25" id="form3Examplea2" placeholder="v">
  <label class="form-label" for="form3Examplea2">Enter your discount code (for e.g. Enter a number(1,70))</label>
</div>
</div>
<div class="d-flex justify-content-between">
<h5 class="text-uppercase">Total price : </h5>
<h5>$${totalPrice}</h5>
</div>`;

  modalBody2.innerHTML = productBody2;
}

modalBody2Creator();

// discount code process


const formControlDiscount = document.querySelector(".form-control");

formControlDiscount.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const discountNum = formControlDiscount.value;
    if (discountNum <= 70 && discountNum >= 1) {
      setTimeout(() => {
        totalPrice -= (totalPrice * discountNum) / 100;
        modalBody2Creator();
      }, 500);
    }
  }
});
