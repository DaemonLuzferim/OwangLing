/* ======================================================
   themes.js
   SISTEMA DE TEMA OSCURO / CLARO
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    // Aplicar tema guardado
    if (savedTheme === "light") {
        body.classList.add("light");
    }

    // Crear botón
    const btn = document.createElement("button");
    btn.textContent = "o / x";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.background = "crimson";
    btn.style.color = "#fff";
    btn.style.borderRadius = "50%";

    document.body.appendChild(btn);

    // Cambiar tema
    btn.addEventListener("click", () => {
        body.classList.toggle("light");

        if (body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});
