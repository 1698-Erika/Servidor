let seleccion = 0;

function numeroFinal(){
  if(resultado  => 0){
  let numeroDos = parseInt(prompt("Ingresa el numero "));
 return numeroDos

  }

 function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return { numeroUno, numeroDos };
}

function suma() {
  let resultado = 0;
  const numeros = obtenerNumeros();
   resultado = numeros.numeroUno, numeros.numeroDos;
   console.log(resultado)

  if (resultado)
  {resultado = resultado + numeros
  console.log(resultado);
  }
  else {
    numeroFinal()

  }
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

function mostrarOperaciones() {
  console.log("1 suma ");
  console.log("2 resta");
  console.log("3 multiplicacion ");
}

function siguienteOperacion(resultado) {
  //seleccion2 = prompt("Ingresa el numero evaluacion ");
  console.log("Cual es la siguiente operacion que desea realizar");
  mostrarOperaciones();
  mostrarSeleccion();
}

function mostrarSeleccion() {
  seleccion = parseFloat(prompt("Ingresa el numero evaluacion "));
  return seleccion;
}

function operacionFinal() {
  siguienteOperacion();

  if (seleccion === 1) console.log(suma());
  else if (seleccion === 2) console.log(resta());
  else if (seleccion === 2) console.log(multiplicacion());
}


while (seleccion < 4) {
  console.log("---Evaluaciones ---");
  mostrarOperaciones();
  console.log("4 Salir");


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
  
  operacionFinal();
}
//function obtenerNumeros() {
//return {resultado}
}