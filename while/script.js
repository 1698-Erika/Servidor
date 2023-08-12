let opcion;
while (opcion !== 6) {
  console.log("----Menu----");
  console.log("1.- Ver tareas 1");
  console.log(" 2.-Ver tareas 2");
  console.log(" 3.-Ver tareas 3");
  console.log(" 4.-Ver tareas 4");
  console.log(" 5.-Ver tareas 5");
  console.log(" Salir");

  opcion = parseInt(prompt("Selecciona la opcion"));

  switch (opcion) {
    case 1:
      console.log("Viendo la tarea 1");
      break;

    case 2:
      console.log("Viendo la tarea 2");
      break;

    case 3:
      console.log("Viendo la tarea 3");
      break;

    case 4:
      console.log("Viendo la tarea 4");
      break;

    case 5:
      console.log("Viendo la tarea 5");
      break;

      case 6:
        console.log("Saliendo")
        break;

    default:
      console.log("Saliendo de la aplicacion");
      break;
  }
}
