window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    const hero = document.getElementById("hero");

    setTimeout(() => {
        loader?.classList.add("is-hidden");
        hero?.classList.add("is-visible");
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const swatches = document.querySelectorAll(".swatch");
    swatches.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(12px)";
        el.style.transition = "opacity 0.5s ease, transfomr 0.5s ease";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    swatches.forEach(el => observer.observe(el));
}
