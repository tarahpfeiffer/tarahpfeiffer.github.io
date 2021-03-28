const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");

const nav = document.getElementById("navbar");

openNavbar.addEventListener("click", function() {
    nav.style.visibility="unset";
})

closeNavbar.addEventListener("click", function() {
    nav.style.visibility="hidden";
})