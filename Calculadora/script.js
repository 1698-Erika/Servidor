function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return { numeroUno, numeroDos };
}

function suma() {
  const numeros = obtenerNumeros();

  let resultado1 = numeros.numeroUno + numeros.numeroDos;
  console.log(resultado1);
}

function resta(numeroUno, numeroDos) {
  const numeros = obtenerNumeros();
  let resultado2 = numeroUno - numeroDos;
  console.log(resultado2);
}

function multiplicacion(numeroUno, numeroDos) {
  let resultado3 = numeroUno * numeroDos;
  console.log(resultado3);
}

let evaluacion = 0 ;
while (evaluacion < 4) {
  console.log("---Evaluaciones ---");
  console.log("1 suma ");
  console.log("2 resta");
  console.log("3 multiplicacion ");
  console.log("4 Salir");

  evaluacion = prompt("Ingresa el numero evalucion ");


  suma()

  //function obtenerNumeros() {
  //return {resultado}
}
