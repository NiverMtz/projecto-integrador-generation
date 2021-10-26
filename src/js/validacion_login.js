/* recuperación de elementos HTML */
$inputEmail = document.querySelector("#input_email");
$forma = document.querySelector("#forma");
/* elementos HTML que renderizan mensajes */
$alertaEmail = document.querySelector(".warning-email");


/* el evento submit detona la función */
$forma.addEventListener("submit", e => {
  e.preventDefault();
  /* strings vacios para resetear cada mensaje */
  let warningEmail = "";
  /* expresión regular para validar email */
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  /* validaciones */
  if(!regexEmail.test($inputEmail)){
    warningEmail += "Email inválido";
    $alertaEmail = warningEmail;
  }
})