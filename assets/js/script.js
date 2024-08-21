const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne comportamiento por defecto

  // Valores ingresados por el usuario
  const email = event.target.variableEmail.value;
  const password = event.target.variablePassword.value;
  const check = event.target.variableCheck.value;

  if (password == "") {
    alert("Debes llenar el campo Password");
    event.target.variablePassword.focus();
  }
});
