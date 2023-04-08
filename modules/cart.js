export {
  creatingObjectPurchase,
  creationDocumentFragmentArray,
  createDocumentFragment,
  renderPictures,
};

const buttons = document.querySelectorAll(".item__btn");

const creatingObjectPurchase = () => {
  buttons.forEach((item) => {
    item.addEventListener("click", ({ target }) => {
      const objectPurchase = {
        name: Array.from(target.value.split("/")[1]).join(""),
        price: Array.from(target.value.split("/")[0]).join(""),
        quantity: 1,
      };
      console.log(objectPurchase);
      function setToLocalStorage() {
        localStorage.setItem(
          `${objectPurchase.name}`,
          JSON.stringify(objectPurchase)
        );
      }
      item.addEventListener("click", setToLocalStorage());
    });
  });
};

const creationDocumentFragmentArray = (cb) => {
  const arrayAddedToLocalStorage = [];
  for (let i = 0; i < localStorage.key.length; i++) {
    if (localStorage.getItem("Phone")) {
      arrayAddedToLocalStorage.push(JSON.parse(localStorage.getItem("Phone")));
    }
    if (localStorage.getItem("Powerbank")) {
      arrayAddedToLocalStorage.push(
        JSON.parse(localStorage.getItem("Powerbank"))
      );
    }
    if (localStorage.getItem("Cover")) {
      arrayAddedToLocalStorage.push(JSON.parse(localStorage.getItem("Cover")));
    }
  }
  return cb(arrayAddedToLocalStorage);
};

const createDocumentFragment = (arrayFromLocalStorage) => {
  const images = [
    "./images/phone.jpg",
    "./images/powerbank.jpg",
    "./images/cover.jpg",
  ];

  const fragment = document.createDocumentFragment();
  const bodyCartColumn = document.querySelector(".body-cart__column");

  console.log(arrayFromLocalStorage);

  arrayFromLocalStorage.map((item) => {
    console.log(item);
    console.log(item.name);
    const str = `
        <div class="body-cart__row row-cart">
        <div class="row-cart__column">
            <div class="row-cart__describing describing-cart">
                <div class="describing-cart__image">
                    <img class="describing-img" src="" alt="">
                </div>
                <div class="describing-cart__text">
                    ${item.name}
                </div>
            </div>
        </div>
        <div class="row-cart__column">
            <div class="row-cart__prices prices-cart">
                <div class="prices-cart__changes">
                    <div class="prices-cart__btn">-</div>
                    <div class="prices-cart__quantity">${item.quantity}</div>
                    <div class="prices-cart__btn">+</div>
                </div>
            </div>
        </div>
    </div>`;
    bodyCartColumn.innerHTML += str;
  });
};

const renderPictures = () => {
  setTimeout(() => {
    const describingCarts = document.querySelectorAll(".describing-cart");

    describingCarts.forEach((item) => {

      if (item.children[1].innerText === "Powerbank") {
        item.children[0].children[0].src = "./images/powerbank.jpg";
      }
      if (item.children[1].innerText === "Cover") {
        item.children[0].children[0].src = "./images/cover.jpg";
      }
      if (item.children[1].innerText === "Phone") {
        item.children[0].children[0].src = "./images/phone.jpg";
      }
    });
  }, 0);
};
