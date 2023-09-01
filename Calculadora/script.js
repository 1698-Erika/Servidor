function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return { numeroUno, numeroDos };
}

function suma() {
  const numeros = obtenerNumeros();

  let resultado1 = numeros.numeroUno + numeros.numeroDos;
  return resultado1;
}

function resta() {
  const numeros = obtenerNumeros();

  let resultado2 = numeros.numeroUno - numeros.numeroDos;
  console.log("El resultado de la resta es: " + resultado2);
}

function multiplicacion(numeroUno, numeroDos) {
  const numeros = obtenerNumeros();
  return numeros.numeroUno * numeros.numeroDos;
  //console.log(resultado3);
  //return resultado3;
}

let seleccion = 0;

while (seleccion < 4) {
  console.log("---Evaluaciones ---");
  console.log("1 suma ");
  console.log("2 resta");
  console.log("3 multiplicacion ");
  console.log("4 Salir");

  seleccion = parseFloat(prompt("Ingresa el numero evaluacion "));
  if (seleccion === 1) {
    const resultado = suma();
    console.log("El resultado es : " + resultado);
  } else if (seleccion === 2) {
    const resultado = resta();
    //console.log("El resultado es : " + resultado);
  } else if (seleccion === 3) {
    console.log("El resultado es : ", multiplicacion());
  } else if (seleccion === 4) {
    console.log("No se selecciono formula ");
  }
}
//function obtenerNumeros() {
//return {resultado}
