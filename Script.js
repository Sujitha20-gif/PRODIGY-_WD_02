const navbar =

document.getElementById("navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

navbar.style.backgroundColor = "#222"; // Darker when scrolled

} else { navbar.style.backgroundColor = "#333"; // Default color }

});
