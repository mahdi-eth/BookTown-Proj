import books from "../../DataBase/Data.js";
import productMaker from "../defaultScript.js";

function defaultCondition() {
  const getBooks = books().filter((product) =>
    product.categorie.includes("self-dev")
  );
  productMaker(getBooks);
}
defaultCondition();
