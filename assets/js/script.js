const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne comportamiento por defecto

  // Valores ingresados por el usuario
  const nombrePaciente = document.getElementById("nombrePaciente").value;
  const motivoConsulta = document.getElementById("motivoConsulta").value;
  const fechaConsulta = document.getElementById("fechaConsulta").value;

  if (nombrePaciente == "") {
    alert("Debes llenar el campo Nombre");
    event.target.nombrePaciente.focus();
  }

  if (motivoConsulta == "") {
    alert("Debes llenar el campo Motivo de Consulta");
    event.target.motivoConsulta.focus();
  }

  if (fechaConsulta == "") {
    alert("Debes llenar el campo Fecha de Consulta");
    event.target.fechaConsulta.focus();
  }

  //mostrar datos en "#contenidos" ingresados en el formulario
  let contenido = document.querySelector("#contenido");
  contenido.innerHTML = `
      <hr>
      <br><strong>Nombre paciente: </strong> ${nombrePaciente}
      <br><strong>Motivo Consulta: </strong> ${motivoConsulta}
      <br><strong>Fecha Consulta: </strong> ${fechaConsulta}
      `;

  //limpiar formulario
  form.reset();
});
