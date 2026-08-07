const words = [
    "Computer Engineering Student",
    "Frontend Web Developer",
    "Future Full Stack Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
// =========================
// ACTIVE NAVBAR LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =========================
// SCROLL REVEAL
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
// =========================
// PROFESSIONAL MOBILE NAVBAR
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

    if (mobileNav.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

    } else {

        menuToggle.innerHTML = "☰";

    }

});

navItems.forEach(item => {

    item.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});