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

  //mostrar datos en "#contenidos" ingresados en el formulario 
  let contenido = document.querySelector('#contenido')
  contenido.innerHTML = `
      <hr>
      <br><strong>Nombre paciente: </strong> ${nombrePaciente}
      <br><strong>Motivo Consulta: </strong> ${motivoConsulta}
      <br><strong>Fecha Consulta: </strong> ${fechaConsulta}
      `

  //limpiar formulario
  formulario.reset()
});
