const estudiantes = [
    {
      nombre: "Juan",
      edad: 20,
      calificaciones: [
        { asignatura: "Matemáticas", nota: 85, maestro: "Pedro" },
        { asignatura: "Historia", nota: 90 },
        { asignatura: "Ciencias", nota: 75 },
        { asignatura: "Geografia", nota: 65 },
      ],
    },
    {
      nombre: "María",
      edad: 22,
      calificaciones: [
        { asignatura: "Español", nota: 95 },
        { asignatura: "Calculo", nota: 80 },
        { asignatura: "Geografia", nota: 85 },
        { asignatura: "Literatura", nota: 85 },
      ],
    },
    {
      nombre: "Pedro",
      edad: 21,
      calificaciones: [
        { asignatura: "Historia", nota: 70 },
        { asignatura: "Arte", nota: 60 },
        { asignatura: " Quimica", nota: 65 },
      ],
    },
  ];
const estudiante = "Pedro";

function ejemplo(nombre){
  console.log(nombre)
}

ejemplo("Maria")
ejemplo("Raul")



function showCalifications(calificaciones) {
 for (let i = 0; i < calificaciones.length; i++) {
     const e = calificaciones[i];
     console.log("Asignatura ", e.asignatura);
     console.log("Nota", e.nota);
   }
 }
 function findEstudent(nombre, array) {
  array.filter((miNuevoEstudiante) => {
     if (miNuevoEstudiante.nombre === nombre) {
       console.log("El nombre del estudainte es: ", miNuevoEstudiante.nombre);
      console.log("La edad del estudaiante es: ", miNuevoEstudiante.edad);
      if (miNuevoEstudiante.calificaciones.length !== 0)  {
        showCalifications(miNuevoEstudiante.calificaciones);
      }
     } else {
       ejemplo = {};
   }
  });
 }

 findEstudent("Pedro", estudiantes);
  
