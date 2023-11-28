// get the current year
const currentYear = new Date().getFullYear();

// update the footer with the current year
document.getElementById("currentYear").textContent = currentYear;



/*** Accordion start shere ***/
let accordion = document.querySelectorAll('.accordion');
let accordionHeader = document.querySelectorAll('.accordion-header');

let accordionHeaderSpan = document.querySelectorAll('.accordion-header-span');
let accordionBody = document.querySelectorAll('.accordion-body');

let accordionArray = Array.prototype.slice.call(accordion);
let accordionHeaderArray = Array.prototype.slice.call(accordionHeader);

let accordionHeaderSpanArray = Array.prototype.slice.call(accordionHeaderSpan);
let accordionBodyArray = Array.prototype.slice.call(accordionBody);

accordionHeaderArray.forEach((e, i) => {
	e.addEventListener('click', () => {
		accordionArray[i].classList.toggle('accordion-dropped');
		accordionHeaderSpanArray[i].classList.toggle('accordion-minus');
		accordionBodyArray[i].classList.toggle('accordion-body-active');
	});
});
/*** Accordion ends here ***/

/** FAQ start shere */
let dropdownDiv = document.querySelectorAll(".faq-section-dropdown");
let question = document.querySelectorAll(".faq-h2-question");

let span = document.querySelectorAll(".faq-h2-span");
let faqDiv = document.querySelectorAll(".faq-div-answer");

let dropdownArray = Array.prototype.slice.call(dropdownDiv);
let questionArray = Array.prototype.slice.call(question);

let spanArray = Array.prototype.slice.call(span);
let faqDivArray = Array.prototype.slice.call(faqDiv);

questionArray.forEach((e, i) => {
  e.addEventListener("click", () => {
    // To keep one always open and close the one is already open
    // dropdownArray.forEach((e) => {
    //   e.classList.contains("faq-section-dropdown-dropped")
    //     ? e.classList.remove("faq-section-dropdown-dropped")
    //     : "";
    // });
    // spanArray.forEach((e) => {
    //   e.classList.contains("faq-minus") ? e.classList.remove("faq-minus") : "";
    // });

    // faqDivArray.forEach((e) => {
    //   e.classList.contains("faq-div-active")
    //     ? e.classList.remove("faq-div-active")
    //     : "";
    // });

    dropdownArray[i].classList.toggle("faq-section-dropdown-dropped");
    spanArray[i].classList.toggle("faq-minus");
    faqDivArray[i].classList.toggle("faq-div-active");
  });
});

/**  FAQ ends here */



/** Header and Index */
// Access to html elements
const header = document.getElementsByTagName("header")[0];
const logo = document.getElementsByClassName("logo")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuCross = document.getElementsByClassName("menu-x")[0];
const navLinks = document.getElementsByClassName("nav-items")[0];
const subNav = document.getElementsByClassName("sub-nav")[0];
const subMenu = document.getElementsByClassName("sub-menu")[0];

// This piece of code handles events on functionality of the menu icon
const menuEvents = ["click", "focus"];
menuEvents.forEach(function (event) {
  menu.addEventListener(event, function () {
    navLinks.classList.add("show");
    menuCross.classList.add("show");
    menu.classList.add("hide");
    logo.classList.add("hide");
    header.classList.add("header-md");
  });
});

// This piece of code handles mouse moves on the menu icon
const mouseMoveEvents = ["mouseover", "mouseout"];
mouseMoveEvents.forEach(function (event) {
  menu.addEventListener(event, function (event) {
    if (event.type === "mouseover") {
      menu.src = "./images/menu-x.png";
    } else {
      menu.src = "./images/menu.png";
    }
  });
});

// This piece of code handles events on funnctionanlity of the cross menu icon
const menuCrossEvents = ["keydown", "click"];
menuCrossEvents.forEach(function (event) {
  menuCross.addEventListener(event, function (event) {
    if (
      event.type == "click" ||
      event.key === "Enter" ||
      event.key === "Escape"
    ) {
      navLinks.classList.remove("show");
      menuCross.classList.remove("show");
      menu.classList.remove("hide");
      logo.classList.remove("hide");
      header.classList.remove("header-md");
    }
  });
});

//   This peice of code handles events on the sub nav of the main nav
const subNavEvents = ["mouseover", "mouseout", "focus", "focusin", "focusout"];
subNavEvents.forEach(function (event) {
  subNav.addEventListener(event, function () {
    if (event === "mouseout" || event === "focusout") {
      subNav.classList.remove("sub-nav-area");
      subMenu.classList.remove("show");
      header.classList.remove("header-lg");
      header.classList.add("header-md");
    } else {
      subNav.classList.add("sub-nav-area");
      subMenu.classList.add("show");
      header.classList.add("header-lg");
    }
  });
});

// This peice of code handles the slider
let slideIndex = 1;

const showSlide = function (number) {
  const slides = document.getElementsByClassName("home-slide");
  if (number > slides.length) {
    slideIndex = 1;
  } else if (number < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};

showSlide(slideIndex);

const nextSlide = function (index) {
  showSlide((slideIndex += index));
};

/********************************************************************* */


