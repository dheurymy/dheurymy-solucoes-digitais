const navItem1 = document.getElementById("nav-item-1");
const navItem2 = document.getElementById("nav-item-2");
const navItem3 = document.getElementById("nav-item-3");

const secaoSobre = document.getElementById('sobre');
const secaoHabilidades = document.getElementById('habilidades');
const secaoProjetos = document.getElementById('projetos');

navItem1.addEventListener("click", () => {
  navItem1.classList.add("nav-item-active");
  navItem2.classList.remove("nav-item-active");
  navItem3.classList.remove("nav-item-active");
  secaoSobre.style.display = "flex";
  secaoHabilidades.style.display = "none";
  secaoProjetos.style.display = "none";

});

navItem2.addEventListener("click", () => {
  navItem1.classList.remove("nav-item-active");
  navItem2.classList.add("nav-item-active");
  navItem3.classList.remove("nav-item-active");
  secaoSobre.style.display = "none";
  secaoHabilidades.style.display = "flex";
  secaoProjetos.style.display = "none";
});

navItem3.addEventListener("click", () => {
  navItem1.classList.remove("nav-item-active");
  navItem2.classList.remove("nav-item-active");
  navItem3.classList.add("nav-item-active");
  secaoSobre.style.display = "none";
  secaoHabilidades.style.display = "none";
  secaoProjetos.style.display = "flex";
});

const menu = document.getElementById("menu");
const navMobile = document.getElementById("nav-mobile");

function toggleMenu() {
  menu.classList.toggle("open");
  if (navMobile.style.display === "flex") {
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "flex";
  }
}

const navItemMobile1 = document.getElementById("nav-item-mobile-1");
const navItemMobile2 = document.getElementById("nav-item-mobile-2");
const navItemMobile3 = document.getElementById("nav-item-mobile-3");

navItemMobile1.addEventListener("click", () => {
  navItemMobile1.classList.add("nav-item-mobile-active");
  navItemMobile2.classList.remove("nav-item-mobile-active");
  navItemMobile3.classList.remove("nav-item-mobile-active");
  toggleMenu();
  secaoSobre.style.display = "flex";
  secaoHabilidades.style.display = "none";
  secaoProjetos.style.display = "none";
});

navItemMobile2.addEventListener("click", () => {
  navItemMobile1.classList.remove("nav-item-mobile-active");
  navItemMobile2.classList.add("nav-item-mobile-active");
  navItemMobile3.classList.remove("nav-item-mobile-active");
  toggleMenu();
  secaoSobre.style.display = "none";
  secaoHabilidades.style.display = "flex";
  secaoProjetos.style.display = "none";
});

navItemMobile3.addEventListener("click", () => {
  navItemMobile1.classList.remove("nav-item-mobile-active");
  navItemMobile2.classList.remove("nav-item-mobile-active");
  navItemMobile3.classList.add("nav-item-mobile-active");
  toggleMenu();
  secaoSobre.style.display = "none";
  secaoHabilidades.style.display = "none";
  secaoProjetos.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.querySelector(".typewriter-text");

  setTimeout(() => {
    typewriterText.style.animation =
      "typing 4s steps(30, end) forwards, blink-caret 0.75s step-end 4s";
  }, 1000);

  setTimeout(() => {
    typewriterText.classList.add("typing-done");
  }, 4000);
});
