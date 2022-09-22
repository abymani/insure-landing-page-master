const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const body = document.querySelector("body");



menuBtn.addEventListener('click', (e) => {
    let visibilty = menuBtn.getAttribute("data-visibilty");
    if (visibilty  == "false")
    {
        nav.setAttribute("aria-expanded","true");
        menuBtn.setAttribute("data-visibilty","true");
        body.setAttribute("data-nav-menu","true");
    }
    else {
        nav.setAttribute("aria-expanded","false");
        menuBtn.setAttribute("data-visibilty","false");
        body.setAttribute("data-nav-menu","false");
    }
});