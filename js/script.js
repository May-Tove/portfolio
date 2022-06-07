const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".fade-in");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 70;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// showing menu when clicked on mobile version
const showMenu = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeMenuButton = document.querySelector(".close-menu");
  const mainMenu = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
  });

  menuBtn.addEventListener("onkeydown", () => {
    mainMenu.classList.toggle("show");
  });
};

showMenu();

//close menu
const closeMenu = () => {
  const closeMenuButton = document.querySelector(".close-menu");
  const mainMenu = document.querySelector(".nav-links");

  closeMenuButton.addEventListener("click", () => {
    mainMenu.classList.remove("show");
  });
};

closeMenu();
