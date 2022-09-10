import books from "../../DataBase/Data.js";
import productMaker from "../defaultScript.js";

const rating = books().sort(function (a, b) {
  let rateA = a.rating,
    rateB = b.rating;
  return rateB - rateA;
});
productMaker(rating);
