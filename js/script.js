const project = document.querySelectorAll('.project');
const overlay = document.getElementById('overlay');
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".previewImg");
const modalHeading = document.querySelector(".modalHeading");
const modalText = document.querySelector(".modalText");

project.forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        openModal(modal);
    })
})

overlay.addEventListener("click", () =>{
    const modal = document.querySelector(".modal.active");
    closeModal(modal);
})


function openModal(modal) {
    if(modal == null) return;
    modal.classList.add('active');
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal')
            closeModal(modal);
        });
        overlay.classList.add("active");
}


function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove("active");
}

function clickedProject(event) { 
    switch(event.target.id) {
        case "firstProj":
        modalImg.src="SuppleSport2.PNG"
        modalHeading.innerText = "Supplement Landing Page"
        modalText.innerText = "Front-End for a landing page for protein supplements with dynamically changing prices according to selection using JavaScript. Made using TailWindCSS. Highlights Front-End and design skills."
      break;

      case "secondProj":
        modalImg.src = "/photogen.PNG"
        modalHeading.innerText = "Weather App with OWM API"
      break;

        case "thirdProj":
            modalImg.src = "/photogen.PNG"
            modalHeading.innerText = "Photo Generator with Pexels API"
            modalText.innerText = "A photo generator which takes data from the Pexels API and returns result to load images on demand. This project highlights my ability to work with APIs, asynchronous JavaScript and JavaScipt promises"
      break;
    }  
  }