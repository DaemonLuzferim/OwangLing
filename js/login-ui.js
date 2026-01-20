/* ===============================
   SELECTORES
================================ */
const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
const btnRegistrarse = document.getElementById("btn__registrarse");

const contenedorLoginRegister = document.querySelector(".contenedor__login-register");
const formularioLogin = document.querySelector(".formulario__login");
const formularioRegister = document.querySelector(".formulario__register");
const cajaTraseraLogin = document.querySelector(".caja__trasera-login");
const cajaTraseraRegister = document.querySelector(".caja__trasera-register");

/* ===============================
   MOSTRAR LOGIN
================================ */
btnIniciarSesion.addEventListener("click", () => {
    formularioLogin.style.display = "block";
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";

    cajaTraseraLogin.style.opacity = "0";
    cajaTraseraRegister.style.opacity = "1";
});

/* ===============================
   MOSTRAR REGISTRO
================================ */
btnRegistrarse.addEventListener("click", () => {
    formularioRegister.style.display = "block";
    formularioLogin.style.display = "none";
    contenedorLoginRegister.style.left = "410px";

    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
});
