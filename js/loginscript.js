const loginForm = document.querySelector("form.login");

const signupForm = document.querySelector("form.signup");

const loginBtn = document.querySelector("label.login");

const signupBtn = document.querySelector("label.signup");

const signupLink = document.querySelector(".signup-link a");

const loginText = document.querySelector(".title-text .login");

const signupText = document.querySelector(".title-text .signup");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
};

$('button, .arrow').on('click', function(){
  var $arrowContainer = $('.arrow-container');
  $arrowContainer.removeClass('-expand-arrows-animation');
  $arrowContainer[0].offsetWidth;
  $arrowContainer.addClass('-expand-arrows-animation');
});

let nav = document.querySelector("nav");

  function toggleNav() {
      nav.classList.toggle("active");
  }