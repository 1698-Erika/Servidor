const tareas = [
  {
    titulo: "Completar proyecto",
    descripcion: "Finalizar la implementación del proyecto.",
    prioridad: "alta",
    completada: false,
    actividades: [
      {
        nombre: "ejemplo",
        calificacion: 10,
      },
    ],
  },
  {
    titulo: "Enviar informe",
    descripcion: "Enviar el informe de resultados al cliente.",
    prioridad: "media",
    completada: true,
    actividades: [
      {
        nombre: "Lectura",
        calificacion: 10,
      },
    ],
  },
  {
    titulo: "Reunión de equipo",
    descripcion: "Asistir a la reunión de planificación.",
    prioridad: "baja",
    completada: false,
    actividades: [
      {
        nombre: "ejemplo",
        calificacion: 10,
      },
    ],
  },
  {
    titulo: "Actualizar sitio web",
    descripcion: "Realizar cambios y actualizaciones en el sitio web.",
    prioridad: "alta",
    completada: true,
    actividades: [
      {
        nombre: "ejemplo",
        calificacion: 10,
      },
      {
        nombre: "ejemplo2",
        calificacion: 10,
      },
    ],
  },
  {
    titulo: "Investigar nuevas tecnologías",
    descripcion: "Investigar y evaluar nuevas tecnologías para el proyecto.",
    prioridad: "media",
    completada: false,
    actividades: [
      {
        nombre: "ejemplo",
        calificacion: 10,
      },
    ],
  },
];

let solicitud = prompt("Ingresa el nombre de tu proyecto");

if (tareas[0].titulo === solicitud) {
  console.log("Titulo: " + tareas[0].titulo);
  console.log("Descripcion general: " + tareas[0].descripcion);
  console.log(
    "El desarrollo del proyecto tiene una prioridad: " + tareas[0].prioridad
  );

  if (tareas[0].completada === true) {
    console.log("El proyecto indicado no esta terminado");
  } else {
    console.log("El proyecto indicado, se encuentra finalizado");
  }

  for (i = 0; i < tareas[0].actividades.length; i++) {
    let info = tareas[0].actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
} else if (tareas[1].titulo === solicitud) {
  console.log("Titulo: " + tareas[1].titulo);
  console.log("Descripcion general: " + tareas[1].descripcion);
  console.log(
    "El desarrollo del proyecto tiene una prioridad: " + tareas[1].prioridad
  );

  if (tareas[1].completada === true) {
    console.log("El proyecto indicado no esta terminado");
  } else {
    console.log("El proyecto indicado, se encuentra finalizado");
  }
  for (i = 0; i < tareas[1].actividades.length; i++) {
    let info = tareas[1].actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
} else if (tareas[2].titulo === solicitud) {
  console.log("Titulo: " + tareas[2].titulo);
  console.log("Descripcion general: " + tareas[2].descripcion);
  console.log(
    "El desarrollo del proyecto tiene una prioridad: " + tareas[2].prioridad
  );

  if (tareas[2].completada === true) {
    console.log("El proyecto indicado no esta terminado");
  } else {
    console.log("El proyecto indicado, se encuentra finalizado");
  }
  for (i = 0; i < tareas[2].actividades.length; i++) {
    let info = tareas[2].actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
} else if (tareas[3].titulo === solicitud) {
  console.log("Titulo: " + tareas[3].titulo);
  console.log("Descripcion general: " + tareas[3].descripcion);
  console.log(
    "El desarrollo del proyecto tiene una prioridad: " + tareas[3].prioridad
  );

  if (tareas[3].completada === true) {
    console.log("El proyecto indicado no esta terminado");
  } else {
    console.log("El proyecto indicado, se encuentra finalizado");
  }
  for (i = 0; i < tareas[3].actividades.length; i++) {
    let info = tareas[3].actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
} else if (tareas[4].titulo === solicitud) {
  console.log("Titulo: " + tareas[4].titulo);
  console.log("Descripcion general: " + tareas[4].descripcion);
  console.log(
    "El desarrollo del proyecto tiene una prioridad: " + tareas[4].prioridad
  );
  if (tareas[4].completada === true) {
    console.log("El proyecto indicado no esta terminado");
  } else {
    console.log("El proyecto indicado, se encuentra finalizado");
  }
  for (i = 0; i < tareas[4].actividades.length; i++) {
    let info = tareas[4].actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
} else if (solicitud === "Todos") {

  
  for (let j = 0; j < tareas.length; j++) {
    let tarea = tareas[j]

    console.log("Titulo: " + tarea.titulo);
    console.log("Descripcion general: " + tarea.descripcion);
    console.log("El desarrollo del proyecto tiene una prioridad: " + tarea.prioridad  );
  
  for (i = 0; i < tarea.actividades.length; i++) {
    let info = tarea.actividades[i];

    console.log(info.nombre);
    console.log(info.calificacion);
  }
}
}
