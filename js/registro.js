const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");
      btnSignUp1 = document.getElementsByClassName("button-register")
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})
btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})
btnSignUp1[0].addEventListener("click", e =>{
    e.preventDefault();
    formRegister.classList.add("hide")
    formLogin.classList.remove("hide")
})

function citaEliminada() {
    alert("Cita Cancelada");
}

function formEnviado() {
    alert("Formulario Enviado con Éxito");
}

function citaProgramada() {
    alert("Cita Programada");
}