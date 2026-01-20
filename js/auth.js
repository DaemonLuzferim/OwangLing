/* ===============================
   CONFIGURACIÓN BACKEND
================================ */
const API_URL = "https://rabbitwars.onrender.com";
const STORAGE_KEY = "auth_user";

/* ===============================
   UTILIDADES
================================ */
function saveSession(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function showMsg(text, ok = false) {
    let msg = document.getElementById("msg");
    if (!msg) {
        msg = document.createElement("div");
        msg.id = "msg";
        document.body.appendChild(msg);
    }
    msg.textContent = text;
    msg.className = ok ? "msg success" : "msg error";
}

/* ===============================
   LOGIN
================================ */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("loginUser").value.trim();
        const password = document.getElementById("loginPass").value.trim();

        if (!email || !password) {
            showMsg("Completa los campos");
            return;
        }

        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            showMsg(data.msg || "Usuario o contraseña incorrectos");
            return;
        }

        saveSession(data);
        showMsg("Login exitoso", true);

        setTimeout(() => {
            window.location.href = "muro_perfil/index.html";
        }, 800);
    });
}

/* ===============================
   REGISTRO
================================ */
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("regUser").value.trim();
        const password = document.getElementById("regPass").value.trim();

        if (!email || !password) {
            showMsg("Completa los campos");
            return;
        }

        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            showMsg(data.msg || "Error en el registro");
            return;
        }

        showMsg("Registro exitoso, ahora inicia sesión", true);
    });
}
