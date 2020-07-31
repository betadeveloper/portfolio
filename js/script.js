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
      modalImg.src = "/images/SuppleSport.PNG";
      modalHeading.innerText = "Supplement Landing Page";
      modalText.innerText =
        "Front-End for a landing page for protein supplements with dynamically changing prices according to selection using JavaScript. Made using TailWindCSS. Highlights Front-End and design skills.";
      previewBtn.href = "/supplement/";
      sourceBtn.href = "https://github.com/betadeveloper/Supplements";
      break;

    case "secondProj":
      modalImg.src = "/images/WeatherAppIMG.PNG";
      modalHeading.innerText = "Weather App using OWM API";
      modalText.innerText =
        "A Weather app that takes your current location and displays the weather that it retrieves from the Open Weather Map API. Includes a search bar to search for a city in the world and get weather data from it. Clicking the temperature displays the fahrenheit equivalent.";
      previewBtn.href = "/weatherapp/";
      sourceBtn.href = "https://github.com/betadeveloper/WeatherApp";
      break;

    case "thirdProj":
      modalImg.src = "/images/photogen.PNG";
      modalHeading.innerText = "Photo Generator using Pexels API";
      modalText.innerText =
        "A photo generator which takes data from the Pexels API and returns result to load images on demand. This project highlights my ability to work with APIs, asynchronous JavaScript and JavaScipt promises";
      previewBtn.href = "/photogenerator/";
      sourceBtn.href = "https://github.com/betadeveloper/PhotoGenerator";
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
      previewBtn.href = "/CookieAlert/";
      sourceBtn.href = "https://github.com/betadeveloper/CookieNotification";
      break;
    case "sixthProj":
      modalImg.src = "/images/ColorGenIMG.PNG";
      modalHeading.innerText = "Color Palette Generator";
      modalText.innerText =
        "A web app that creates a random color palette that you can save and the palette gets stored in the local storage. This web app is quite useful when creating websites or generating color ideas for projects.";
      previewBtn.href = "/ColorGen/";
      sourceBtn.href = "https://github.com/betadeveloper/ColorPalleteGenerator";
  }
}

let nav = document.querySelector("nav");

function toggleNav() {
  nav.classList.toggle("active");
}
