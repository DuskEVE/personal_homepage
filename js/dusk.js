const navBar = document.querySelector(".navbar");
const navPlaceholder = document.querySelector(".nav-placeholder");

function navbarFixed(){
    if (window.scrollY > window.innerHeight*0.3) {
        navBar.classList.add("fixed-top");
        navPlaceholder.setAttribute("style", "height: 56.8px");
    } else {
        navBar.classList.remove("fixed-top");
        navPlaceholder.setAttribute("style", "height: 0px");
    }
}

addEventListener('scroll', navbarFixed);