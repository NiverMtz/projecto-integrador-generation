/* recuperación de elementos input */
const $forma = document.querySelector("#forma");
const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $pass = document.querySelector("#pass");
const $pass_confirm = document.querySelector("#pass_confirm");
/* elementos del HTML donde indican los mensajes */
const $alertName = document.querySelector("#warning_name");
const $alertEmail = document.querySelector("#warning_email");
const $alertPass = document.querySelector("#warning_pass");
const $alertPassConfirm = document.querySelector("#warning_pass_confirm");

/* el evento submit ejecuta la función */
$forma.addEventListener("submit", e => {
  e.preventDefault();
  /* strings vacios para resetear cada mensaje */
  let warningName = "";
  let warningEmail = "";
  let warningPass = "";
  let warningPassConfirm = "";
  /* expresión regular para validar email */
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  /* validaciones */
  /* se  evalua la longitud del nombre */
  if($name.value.length < 4){
    warningName += "Nombre inválido";
    $alertName.innerHTML = warningName;
  }
  /* evalua que el email sea valido */
  if(!regexEmail.test($email.value)){
    warningEmail += "Email inválido";
    $alertEmail.innerHTML = warningEmail;
  }
  /* evalua la longitud de la contraseña */
  if($pass.value.length < 8){
    warningPass = "Contraseña inválida";
    $alertPass.innerHTML = warningPass;
  }
  if($pass.value != $pass_confirm.value){
    warningPassConfirm = "Las contraseñas no coinciden";
    $alertPassConfirm.innerHTML = warningPassConfirm;
  }
  console.log("sdasdasd")
  window.location.replace("./registro_exitoso.html");
  console.log("Hola")
});