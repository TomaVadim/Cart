import * as burger from "./modules/burger.js";
import * as cart from "./modules/cart.js";
import "./scss/style.scss";
import "./scss/null.scss";
import "./scss/cart.scss";

const burgerNav = document.querySelector(".burger-nav");

burgerNav.addEventListener("click", burger.setActiveBurger);

cart.creatingObjectPurchase();

document.addEventListener("DOMContentLoaded", () => {
  cart.creationDocumentFragmentArray(
    (el) => cart.createDocumentFragment(el),
    cart.renderPictures()
  );
});
