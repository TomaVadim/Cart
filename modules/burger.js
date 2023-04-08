export {setActiveBurger};

const setActiveBurger = () => {
    const burgerNav = document.querySelector(".burger-nav");
    const activeMenu = document.querySelector(".active-menu");

    burgerNav.classList.toggle("_active");
    document.body.classList.toggle("_hidden");

    if (activeMenu.style.display === "block") {
        return activeMenu.style.display = "none";
    }

    activeMenu.style.display = "block";
};