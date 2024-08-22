const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene comportamiento por defecto

  // Valores ingresados por el usuario
  const nombrePaciente = document.getElementById("nombrePaciente").value;
  const motivoConsulta = document.getElementById("motivoConsulta").value;
  const fechaConsulta = document.getElementById("fechaConsulta").value;
  const seleccionMedico = document.getElementById("seleccionMedico").value;

  if (nombrePaciente == "") {
    alert("Debes llenar el campo Nombre Paciente");
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

  if (seleccionMedico == "") {
    alert("Debes llenar el campo Seleccion Especialista");
    event.target.seleccionMedico.focus();
  }

  if ((nombrePaciente != "") & (motivoConsulta != "") & (fechaConsulta != "") & (seleccionMedico != "")) {
    //mostrar datos en "#contenidos" ingresados en el formulario
    let contenido = document.querySelector("#contenido");
    contenido.innerHTML = `
    <p>FICHA CREADA</p>
    <hr>
    <br><strong>Nombre paciente: </strong> ${nombrePaciente}
    <br><strong>Motivo Consulta: </strong> ${motivoConsulta}
    <br><strong>Fecha Consulta: </strong> ${fechaConsulta}
    <br><strong>Médico Especialista: </strong> ${seleccionMedico}
    `;

    /* Muestra alert con la información cuando se hace el submit */
    document.getElementById("contenido").style.display = "block";

    //limpiar formulario
    form.reset();
  }
});
