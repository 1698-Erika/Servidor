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

let seleccion = prompt("Ingresa tu usuario");
// variables globales
let calificaciones = 1;
let suma = 0;
let nNotas = 0;
let promedio =0;


switch (seleccion) {

    case "Juan":
        console.log("El nombre del estudiante es " + estudiantes[0].nombre)
        console.log("La edad del estudiantes es " + estudiantes[0].edad)
        suma = 0;
        nNotas = 0;

        for (let i = 0; i < estudiantes[0].calificaciones.length; i++) {
            let notas = estudiantes[0].calificaciones[i];

            console.log("La nota de la asignatura " + notas.asignatura + " es: " + notas.nota)

            suma += notas.nota;

            nNotas++;
        }

        promedio = suma / nNotas;
        console.log("El promedio general es: " + promedio + " de sus " + nNotas + " asignaturas ")

        break;

    case "Maria":
        console.log("El nombre del estudiante es " + estudiantes[1].nombre)
        console.log("La edad del estudiantes es " + estudiantes[1].edad)
        suma = 0;
        nNotas = 0;

        for (let i = 0; i < estudiantes[1].calificaciones.length; i++) {
            let notas = estudiantes[1].calificaciones[i];

            console.log("La nota de la asignatura " + notas.asignatura + " es: " + notas.nota)

            suma += notas.nota;

            nNotas++;
        }

        promedio = suma / nNotas;
        console.log("El promedio general es: " + promedio + " de sus " + nNotas + " asignaturas ")

        break;


    case "Pedro":
        console.log("El nombre del estudiante es " + estudiantes[2].nombre)
        console.log("La edad del estudiantes es " + estudiantes[2].edad)
        suma = 0;
        nNotas = 0;

        for (let i = 0; i < estudiantes[2].calificaciones.length; i++) {
            let notas = estudiantes[2].calificaciones[i];

            console.log("La nota de la asignatura " + notas.asignatura + " es: " + notas.nota)

            suma += notas.nota;

            nNotas++;
        }

        promedio = suma / nNotas;
        console.log("El promedio general es: " + promedio + " de sus " + nNotas + " asignaturas ")

        break;

        case "todos" :
          
        for(let j = 0; j < estudiantes.length; j++){
         let usuarios = estudiantes[j];
             
         console.log("El nombre del estudiante es " + usuarios.nombre)
        console.log("La edad del estudiantes es " + usuarios.edad)

        suma = 0;
        nNotas = 0;

        for (let i = 0; i < usuarios.calificaciones.length; i++) {
            let notas = usuarios.calificaciones[i];

            console.log("La nota de la asignatura " + notas.asignatura + " es: " + notas.nota)

            suma += notas.nota;

            nNotas++;
        }

        promedio = suma / nNotas;
        console.log("El promedio general es: " + promedio + " de sus " + nNotas + " asignaturas ")
          
    
      }
      break;

    default:
        console.log("Usuario no existe en la base de datos");
        break;

}