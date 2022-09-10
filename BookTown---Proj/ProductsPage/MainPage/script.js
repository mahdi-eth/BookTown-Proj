import books from "../../DataBase/Data.js";
import productMaker from "../defaultScript.js";
import { sortElement } from "../defaultScript.js";


function defaultCondition() {
    if (sortElement.innerHTML == " : Newest Books") {
      const date = books().sort(function (a, b) {
        let dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB;
      });
      productMaker(date);
    }
  }
  defaultCondition();
  