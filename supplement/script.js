const selectElement = document.querySelector(".weight");
const loved = document.querySelector(".loved");
const lovebtn = document.querySelector(".lovebtn")

selectElement.addEventListener('change', (event) => {
    const price = document.querySelector(".price");
    price.textContent = `${event.target.value}`;
});

lovebtn.addEventListener("click", e => {
    loved.classList.toggle("filled");
})