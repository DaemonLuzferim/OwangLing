/* ======================================================
   upload.js
   SUBIDA Y CARGA DE IMÁGENES DESDE BACKEND
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const uploadInput = document.querySelector("#uploadInput");
    const carousel = document.querySelector(".photo-carousel");

    // ================================
    // SUBIR IMAGEN
    // ================================
    if (uploadInput) {
        uploadInput.addEventListener("change", async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch(
                    "https://rabbitwars.onrender.com/upload",
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const result = await response.json();
                console.log("Upload:", result);

                if (result.success) {
                    loadImages();
                }

            } catch (error) {
                console.error("Error subiendo imagen:", error);
            }
        });
    }

    // ================================
    // CARGAR IMÁGENES
    // ================================
    async function loadImages() {
        if (!carousel) return;

        try {
            const response = await fetch(
                "https://rabbitwars.onrender.com/images"
            );
            const files = await response.json();

            files.forEach(file => {
                const exists = Array.from(
                    carousel.querySelectorAll("img")
                ).some(img => img.src.includes(file));

                if (!exists) {
                    const img = document.createElement("img");
                    img.src = `https://rabbitwars.onrender.com/uploads/${file}`;
                    img.alt = file;

                    // Modal viene de gallery.js
                    img.addEventListener("click", () => {
                        if (typeof openImageModal === "function") {
                            openImageModal(img.src);
                        }
                    });

                    carousel.appendChild(img);
                }
            });

        } catch (error) {
            console.error("Error cargando imágenes:", error);
        }
    }

    // Cargar al iniciar
    loadImages();
});
