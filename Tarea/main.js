const tareas = [
  {
    titulo: "Completar proyecto",
    descripcion: "Finalizar la implementación del proyecto.",
    prioridad: "alta",
    completada: false,
    actividades: [
      {
        nombre: "Conclusion general",
        calificacion: 8,
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
        nombre: "Correr 10 kilometros",
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
        nombre: "Debatir sobre tema de interes",
        calificacion: 9,
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
        nombre: "Implementacion de imagenes",
        calificacion: 8,
      },
      {
        nombre: "Implementacion de opciones multiples",
        calificacion: 9,
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
        nombre: "Resumen de inovaciones",
        calificacion: 9,
      },
    ],
  },
];

let solicitud;
while (solicitud !== 6) {
  console.log("---Proyectos expuestos para solicitar---");
  console.log("1:" + tareas[0].titulo);
  console.log("2:" + tareas[1].titulo);
  console.log("3:" + tareas[2].titulo);
  console.log("4:" + tareas[3].titulo);
  console.log("5:" + tareas[4].titulo);
  console.log("6: Salir");

  function proyectos() {
    solicitud = parseInt(prompt("Ingresa el numero del proyecto a solicitar"));
    return { solicitud };
  }

  // function completarLibro(libro) {
  //   let nuevoLibro = libro;
  //   nuevoLibro.editorial = "Juan Gabriel";
  //   nuevoLibro.numeroHojas = 85;
  //   return nuevoLibro
  // }

  // const biblioteca = new Array();

  // biblioteca.filter((libro) => {
  //   if (libro.titulo === "cenicienta") {
  //     const nuevoLibro = completarLibro(libro)
  //     return nuevoLibro;
  //   }
  // });

  function verProyecto(titulo){
    array.filter((nuevoProyecto) =>  {
    if (nuevoProyecto.titulo === titulo) {
      console.log(nuevoProyecto.descripcion === descripcion)
      console.log(nuevoProyecto.prioridad === prioridad)
      if (nuevoProyecto.completada === true) {
        console.log("El proyecto indicado no esta terminado");
         } else {
          console.log("El proyecto indicado, se encuentra finalizado");
      }
    function verActividades(actividades){
        for (i = 0; i < tareas[0].actividades.length; i++) {
            let info = tareas[0].actividades[i];
           console.log ("Actividad: " +info.nombre);
           console.log("La calificacion es: " +info.calificacion);
        }
      }
    }
}
