const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".accept-btn");
const declineButton = document.querySelector(".decline-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

declineButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 1000);

document.querySelector(".clear").addEventListener("click", clearStorage);
function clearStorage() {
  localStorage.clear();
  window.location.reload();
}
