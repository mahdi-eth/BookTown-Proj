(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
        userData = {
          firtsName:
            form.target.parentElement.parentElement.children[0].children[1].value,
        };
      
        localStorage.setItem("userData", JSON.stringify(userData));
      },
      false
    );
  });
})();

// onsubmit section

const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector(".needs-validation");

const userDataJson = JSON.parse(localStorage.getItem("userData")) || [];

let localState = false;

submitBtn.addEventListener("click", (event) => {

  localState = true;
  location.reload();
});

if (userDataJson.length > 0) {
  localState = true;
}
if (userDataJson.length < 1) {
  localState = false;
}

if (localState) {
  form.innerHTML = `<div class="text-center w-100 h-100 d-flex align-items-center justify-content-center"><span>You have Successfully signed up ${userDataJson.firtsName} </span><span class="text-danger"> !</span></div>`;
}

if (!localState) {
  form.innerHTML = ` <div class="col-md-4">
  <label for="validationCustom01" class="form-label">First name</label>
  <input
    type="text"
    class="form-control"
    id="validationCustom01"
    required
  />
  <div class="valid-feedback">Looks good!</div>
</div>
<div class="col-md-4">
  <label for="validationCustom02" class="form-label">Last name</label>
  <input
    type="text"
    class="form-control"
    id="validationCustom02"
    required
  />
  <div class="valid-feedback">Looks good!</div>
</div>
<div class="col-md-4">
  <label for="validationCustomUsername" class="form-label"
    >Username</label
  >
  <div class="input-group has-validation">
    <span class="input-group-text" id="inputGroupPrepend">@</span>
    <input
      type="text"
      class="form-control"
      id="validationCustomUsername"
      aria-describedby="inputGroupPrepend"
      required
    />
    <div class="invalid-feedback">Please choose a username.</div>
  </div>
</div>
<div class="col-md-4">
  <label for="validationCustom03" class="form-label">City</label>
  <input
    type="text"
    class="form-control"
    id="validationCustom03"
    required
  />
  <div class="invalid-feedback">Please provide a valid city.</div>
</div>
<div class="col-md-8">
  <label for="validationCustom05" class="form-label">Address</label>
  <textarea
    type="text"
    class="form-control"
    id="validationCustom05"
    required
  ></textarea>
  <div class="invalid-feedback">Please provide a valid Address.</div>
</div>
<div class="col-12">
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="invalidCheck"
      required
    />
    <label class="form-check-label" for="invalidCheck">
      Agree to terms and conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
</div>
<div class="d-flex gap-3">
  <button id="submitBtn" class="btn btn-danger" type="submit">Submit form</button>
  <button class="btn btn-outline-danger" type="reset">Reset</button>
</div>`;
}
