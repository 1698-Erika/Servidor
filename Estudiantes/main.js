const estudiantes = [
  { calificaciones: [85, 90, 75] },
  { calificaciones: [95, 80, 85, 90] },
  { calificaciones: [60, 65] },
];
let suma = 0;
let cantidadCalificaciones = 0;
for (let estudiante = 0; estudiante < estudiantes.length; estudiante++) {
  const estudianteCalificacion = estudiantes[estudiante];
  let suma = 0;
  let cantidadCalificaciones = 0;
  for (
    let calificacion = 0;
    calificacion < estudianteCalificacion.calificaciones.length;
    calificacion++
  ) {
    suma += estudianteCalificacion.calificaciones[calificacion];
     cantidadCalificaciones++;
  }
  const promedio = suma / cantidadCalificaciones;
  console.log(
    "el promedio es: " +
      promedio +
      " de sus " +
      cantidadCalificaciones +
      " calificaciones "
  );
}
