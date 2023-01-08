const faders = document.querySelectorAll(".fade-in");

// fade in effect on project cards
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
