// Navbar responsive animation

//Select hamburger button and animate menu and hamburger button

document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
    this.classList.toggle("active");
})

