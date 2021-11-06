
/* recuperación de elementos input */
const $forma = document.querySelector("#forma");
const $profileName = document.querySelector("#profile-name");
const $firstName = document.querySelector("#first-name");
const $fatherName = document.querySelector("#father-name");
const $motherName = document.querySelector("#mother-name");
const $email = document.querySelector("#email");
const $pass = document.querySelector("#pass");
const $pass_confirm = document.querySelector("#pass_confirm");
/* elementos del HTML donde indican los mensajes */
const $alertProfileName = document.querySelector("#profile-name");
const $alertFirstName = document.querySelector("#warning_name");
const $alertFatherName = document.querySelector("#warning_father-name");
const $alertMotherName = document.querySelector("#warning_mother-name");
const $alertEmail = document.querySelector("#warning_email");
const $alertPass = document.querySelector("#warning_pass");
const $alertPassConfirm = document.querySelector("#warning_pass_confirm");

/* el evento submit ejecuta la función */
$forma.addEventListener("submit", e => {
  e.preventDefault();
  /* strings vacios para resetear cada mensaje */
  let warningProfileName = "";
  let warningFirstName = "";
  let warningFatherName = "";
  let warningMotherName = "";
  let warningEmail = "";
  let warningPass = "";
  let warningPassConfirm = ""; 
  //let invalido = false;
  /* expresión regular para validar email */
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  /* validaciones */
  /* se  evalua la longitud del nombre de perfil */
  if($profileName.value.length < 4){
    warningProfileName += "Mínimo cuatro carácteres";
    $alertProfileName.innerHTML = warningProfileName;
    //invalido = true;
  }
  //evaluación de longitud de nombre del usuario
  if($firstName.value.length == 0){
    warningFirstName += "Completa el campo por favor";
    $alertFirstName.innerHTML = warningFirstName;
  }
  //evalucion de longitud del apellido paterno
  if($fatherName.value.length == 0){
    warningFatherName += "Completa el campo por favor";
    $alertFatherName.innerHTML = warningFatherName;
  }
  
  //evalucion de longitud del apellido materno
  if($motherName.value.length == 0){
    warningMotherName += "Completa el campo por favor";
    $alertMotherName.innerHTML = warningMotherName;
  }
  /* evalua que el email sea valido */
  if(!regexEmail.test($email.value)){
    warningEmail += "Email inválido";
    $alertEmail.innerHTML = warningEmail;
    //invalido = true;
  }
  /* evalua la longitud de la contraseña */
  if($pass.value.length < 8){
    warningPass = "Mínimo ocho carácteres";
    $alertPass.innerHTML = warningPass;
    //invalido = true;
  }
  if($pass.value !== $pass_confirm.value){
    warningPassConfirm = "La contraseña no coincide";
    $alertPassConfirm.innerHTML = warningPassConfirm;
    //invalido = true;
  }
  
});