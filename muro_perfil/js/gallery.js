/* ======================================================
   gallery.js
   GALERÍA INTERACTIVA (VISOR DE IMÁGENES)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".grid img");

    // Crear modal
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    // Abrir imagen
    images.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });

    // Cerrar modal
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
