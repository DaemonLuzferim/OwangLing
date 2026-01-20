/* ======================================================
   guard.js
   PROTECCIÓN DEL MURO DE PERFIL
====================================================== */

const STORAGE_KEY = "auth_user";

/**
 * Verifica sesión en el muro
 */
function checkSession() {
    const user = localStorage.getItem(STORAGE_KEY);

    if (!user) {
        alert("Acceso denegado. Inicia sesión.");
        window.location.href = "../login.html";
        return;
    }
}

// Ejecutar verificación
document.addEventListener("DOMContentLoaded", checkSession);
