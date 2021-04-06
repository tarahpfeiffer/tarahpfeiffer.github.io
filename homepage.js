const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");

const navbar = document.getElementById("navbar");

openNavbar.addEventListener("click", function() {
    navbar.style.display = "block";
    navbar.style.visibility = "unset";
})

closeNavbar.addEventListener("click", function() {
    navbar.style.display = "none";
    navbar.style.visibility = "none";
})
