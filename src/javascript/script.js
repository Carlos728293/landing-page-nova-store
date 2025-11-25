const prevBtn = document.querySelector(".hero__arrow--prev");
const nextBtn = document.querySelector(".hero__arrow--next");
const list = document.querySelector(".hero__list");
const items = document.querySelectorAll(".hero__item");
const dots = document.querySelectorAll(".hero__dot");
const numberIncation = document.querySelector(".hero__indicators-numbers");

const total = items.length;
let active = 0;
let timer;

const update = (direction) => {
    const itemActive = document.querySelector(".hero__item-active");
    const dotActive = document.querySelector(".hero__dot-active");

    itemActive.classList.remove("hero__item-active");
    dotActive.classList.remove("hero__dot-active");

    if (direction > 0){
        active++;

        if (active === total){
            active = 0;
        }
    } else{
        active--;

        if (active < 0){
            active = total - 1
        }
    }

    numberIncation.innerHTML = `0${active + 1}`

    items[active].classList.add("hero__item-active")
    dots[active].classList.add("hero__dot-active");
};

const resetTimer = () => {
    clearInterval(timer)

    timer = setInterval(() => {
        update(1)        
    }, 6500);
};

resetTimer();

prevBtn.addEventListener("click", () => {
    update(-1);
    resetTimer();
});

nextBtn.addEventListener("click", () => {
    update(1);
    resetTimer();
});


// Menu mobile
const menuBtn = document.querySelector(".header__menu-btn");
const mobileMenu = document.querySelector(".header__mobile-menu");
const closeBtn = document.querySelector(".header__menu-close");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("header__mobile-menu-active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("header__mobile-menu-active");
});