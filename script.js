
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

const modeBtn = document.getElementById("mode-toggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "Light Mode";
    } else {
        modeBtn.textContent = "Dark Mode";
    }
});


const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", handleReveal);
handleReveal();
