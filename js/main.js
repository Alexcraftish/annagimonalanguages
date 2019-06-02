var typed = new Typed("#typed", {
  strings: ["&#161;buenos días!", "good day!", "guten tag!"],
  typeSpeed: 60,
  backDelay: 1500,
  backSpeed: 30,
  loop: true
});

//MENU SHOW/CLOSE
const menuBtn = document.querySelector(".menuBtn");
const mobileMenu = document.querySelector(".mobileMenu");
const navlinks = document.querySelectorAll(".navLink");
const closeBtn = document.querySelector(".closeBtn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

navlinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  })
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
})


//Language Desktop
const LanguageBtn = document.querySelector("#languageBtn");
const langaugeDesktop = document.querySelector(".desktopLanguage");

LanguageBtn.addEventListener("click", () => {
  if (langaugeDesktop.style.display == "inline-block") {
    langaugeDesktop.style.display = "none";
  }
  else {
    langaugeDesktop.style.display = "inline-block";
  }
});
