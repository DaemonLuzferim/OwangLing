/* ======================================================
   header.js
   SOLO UI (scroll + botones)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#000";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
            header.style.height = "45px";
        } else {
            header.style.background = "transparent";
            header.style.boxShadow = "none";
            header.style.height = "50px";
        }
    });
});

/* ======================================================
   Mostrar botones según sesión (visual)
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".btn-login");
    const logoutBtn = document.querySelector(".btn-logout");

    const user = localStorage.getItem("auth_user");

    if (!loginBtn || !logoutBtn) return;

    loginBtn.style.display = user ? "none" : "inline-block";
    logoutBtn.style.display = user ? "inline-block" : "none";
});
