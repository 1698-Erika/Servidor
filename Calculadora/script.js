let evaluacion;

function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return {numeroUno, numeroDos}
}

while (evaluacion !== 4) {
 // evaluacion = prompt("Ingresa el numero evalucion ");

  console.log("---Evaluaciones ---");
  console.log("1:" + evaluacion);
  console.log("2:" + evaluacion);
  console.log("3:" + evaluacion);
  console.log("4: Salir");

 const ejemplo = obtenerNumeros();
 console.log(ejemplo)


//   function suma(numeroUno, numeroDos) {
//     let resultado = numeroUno + numeroDos;
//     console.log(resultado);
//   }

//   function resta(numeroUno, numeroDos) {
//     let resultado = numeroUno - numeroDos;
//     console.log(resultado);
//   }

//   function multiplicacion(numeroUno, numeroDos) {
//     let resultado = numeroUno * numeroDos;
//     console.log(resultado);
//   }
}
