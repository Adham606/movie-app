const form = document.querySelector(".form");

document.addEventListener("click", function (event) {
if (form.contains(event.target)) {
    form.classList.add("active");
} else {
    form.classList.remove("active");
}
});