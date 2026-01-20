/* ======================================================
   roles.js
   PROTECCIÓN DE PÁGINAS PRIVADAS
====================================================== */

const STORAGE_KEY = "auth_user";

function isAuthenticated() {
    return !!localStorage.getItem(STORAGE_KEY);
}

document.addEventListener("DOMContentLoaded", () => {
    if (!isAuthenticated()) {
        window.location.replace("../login.html");
    }
});
