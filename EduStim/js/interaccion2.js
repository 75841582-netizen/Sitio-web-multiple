const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(
    "section, .card, .sens-card, .post"
).forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});

document.querySelectorAll(".card img, .sens-card img, .post img")
    .forEach(img => {
        img.style.transition = "transform .4s ease, box-shadow .4s ease";

        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.07)";
            img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });

const btnUp = document.createElement("div");
btnUp.innerHTML = "↑";
btnUp.classList.add("btn-up");
document.body.appendChild(btnUp);

btnUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btnUp.classList.add("show");
    } else {
        btnUp.classList.remove("show");
    }
});