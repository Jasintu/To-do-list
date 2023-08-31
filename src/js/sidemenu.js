"use strict";
let menuBtn = document.getElementById("menu");
let main = document.querySelector("main");
let menu = document.querySelector(".menuFuncNone");
let footer = document.querySelector("footer");
let showMenu = 0;
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", function () {
    if (showMenu === 0) {
        menu.classList.add('menuFunc');
        menu.classList.remove('menuFuncNone');
        menu.style.animation = "menuSide 0.3s";
        main.style.marginLeft = "70px";
        main.style.animation = "main 0.3s";
        footer.style.marginLeft = "150px";
        footer.style.animation = "footer 0.3s";
        showMenu = 1;
    }
    else {
        menu.style.animation = "menuSideReverse 0.3s";
        main.style.animation = "mainReverse 0.3s";
        footer.style.animation = "footerReverse 0.3s";
        setTimeout(() => {
            menu.classList.add('menuFuncNone');
            menu.classList.remove('menuFunc');
            main.style.marginLeft = "0px";
            footer.style.marginLeft = "0px";
        }, 190);
        showMenu = 0;
    }
});
