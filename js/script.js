const project = document.querySelectorAll(".project");
const overlay = document.getElementById("overlay");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".previewImg");
const modalHeading = document.querySelector(".modalHeading");
const modalText = document.querySelector(".modalText");
const previewBtn = document.querySelector("#previewCode");
const sourceBtn = document.querySelector("#srcCode");

project.forEach((item) => {
  item.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  const closeBtn = document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    closeModal(modal);
  });
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function clickedProject(event) {
  switch (event.target.id) {
    case "firstProj":
      modalImg.src = "/images/SuppleSport2.PNG";
      modalHeading.innerText = "Supplement Landing Page";
      modalText.innerText =
        "Front-End for a landing page for protein supplements with dynamically changing prices according to selection using JavaScript. Made using TailWindCSS. Highlights Front-End and design skills.";
      break;

    case "secondProj":
      modalImg.src = "/images/photogen.PNG";
      modalHeading.innerText = "Weather App with OWM API";
      break;

    case "thirdProj":
      modalImg.src = "/images/photogen.PNG";
      modalHeading.innerText = "Photo Generator with Pexels API";
      modalText.innerText =
        "A photo generator which takes data from the Pexels API and returns result to load images on demand. This project highlights my ability to work with APIs, asynchronous JavaScript and JavaScipt promises";
      break;
    case "fourthProj":
      modalImg.src = "/images/portfolioIMG.PNG";
      modalHeading.innerText = "Portfolio Website";
      modalText.innerText =
        "Personal portfolio, fully created and designed by me using vanilla JavaScript, HTML5, CSS3 and Swirl.JS for the effects on the page. ";
      previewBtn.href = "/";
      sourceBtn.href = "https://github.com/betadeveloper/portfolio";
      break;
    case "fifthProj":
      modalImg.src = "/images/CookieAlertIMG.PNG";
      modalHeading.innerText = "Cookie Alert";
      modalText.innerText =
        "A website I created that displays a cookie notification for the user. The user can either accept or decline the cookies and their preference is saved in the local storage. Useful for websites targeted towards EU citizens.";
      previewBtn.href = "/CookieAlert/index.html";
      sourceBtn.href = "https://github.com/betadeveloper/CookieNotification";
      break;
  }
}

let nav = document.querySelector("nav");

function toggleNav() {
  nav.classList.toggle("active");
}
