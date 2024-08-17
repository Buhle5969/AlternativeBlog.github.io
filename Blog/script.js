function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
})