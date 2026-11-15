// Navbar scroll effect & ScrollSpy active link
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle("scrolled", scrollY > 40);

    sections.forEach((sec) => {
        const top = sec.offsetTop - 160;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
            navItems.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// Mobile Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu() {
    const isOpen = hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    navOverlay.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburger.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            toggleMenu();
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
        toggleMenu();
    }
});

// Scroll Reveal Animation
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Open Week PDF on Card Click
document.querySelectorAll(".program-card").forEach((card) => {
    card.addEventListener("click", () => {
        const pdfPath = card.getAttribute("data-pdf");
        if (pdfPath) {
            window.open(pdfPath, "_blank");
        }
    });
});