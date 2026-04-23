// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const texto = link.textContent.toLowerCase();

            let destino;

            if (texto.includes("inicio")) {
                destino = document.querySelector("header");
            } 
            else if (texto.includes("sobre")) {
                destino = document.querySelectorAll("section")[0];
            } 
            else if (texto.includes("servicios")) {
                destino = document.querySelectorAll("section")[1];
            } 
            else if (texto.includes("contacto")) {
                destino = document.querySelector("footer");
            }

            destino.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.style.color = "white");
            link.style.color = "#facc15";
        });
    });


    setTimeout(() => {
        alert("Bienvenido a mi sitio web 👋");
    }, 1000);


    const articulos = document.querySelectorAll("article");

    articulos.forEach(art => {
        art.addEventListener("mouseenter", () => {
            art.style.transform = "scale(1.03)";
            art.style.transition = "0.3s";
        });

        art.addEventListener("mouseleave", () => {
            art.style.transform = "scale(1)";
        });
    });
});