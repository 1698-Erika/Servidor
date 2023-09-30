//let seleccion = 0;
let total;

function numeroFinal() {
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return numeroDos;
}

function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return { numeroUno, numeroDos };
}

function suma() {
  if (!total) {
    const numeros = obtenerNumeros();
    total = numeros.numeroUno + numeros.numeroDos;
    console.log("El resultado de la suma es: " + total);
  } else {
    const nuevoNumero = numeroFinal();
    total = total + nuevoNumero;
    console.log("El resultado de la suma es: " + total);
  }
}

function resta() {
  if (!total) {
    const numeros = obtenerNumeros();
    total = numeros.numeroUno - numeros.numeroDos;
    console.log("El resultado de la resta es: " + total);
  } else {
    const nuevoNumero = numeroFinal();
    total = total - nuevoNumero;
    console.log("El resultado de la resta es: " + total);
  }
}
//   }
//   const numeros = obtenerNumeros();
//   let resultado2 = numeros.numeroUno - numeros.numeroDos;
//   console.log("El resultado de la resta es: " + resultado2);

//   siguienteOperacion(resultado2);
// }

function multiplicacion() {
  if (!total) {
    const numeros = obtenerNumeros();
    total = numeros.numeroUno * numeros.numeroDos;
    return numeros.numeroUno * numeros.numeroDos;
  } else {
    const nuevoNumero = numeroFinal();
    total = total * nuevoNumero;
    return total;
   // console.log("El resultado de la multiplicacion es: " + total);
  }
  //   }

  //console.log(resultado3);
  //return resultado3;
}

function mostrarMenu() {
  console.log("---Evaluaciones ---");
  console.log("1 suma ");
  console.log("2 resta");
  console.log("3 multiplicacion ");
  console.log("4 Salir");

  const resultado = mostrarSeleccion();
  return resultado;
}

// function siguienteOperacion(x) {

//   const seleccion = mostrarMenu();
//   //mostrarSeleccion();
//   calcular(seleccion)
// }

function mostrarSeleccion() {
  const seleccion = parseFloat(prompt("Ingresa el numero evaluacion "));
  return seleccion;
}

function mostrarOperaciones() {
  const seleccion = mostrarMenu();
  console.log(seleccion)
  while (seleccion < 4) {
    if(seleccion === 4) break;
    // if (seleccion != 4) {
      calcular(seleccion);
      mostrarOperaciones()
    //}
  // console.log("Saliendo de la aplicación")
 //  break; 
  }
}

function calcular(resultado) {
  if (resultado === 1) {
    suma();
  } else if (resultado === 2) {
    resta();
  } else if (resultado === 3) {
    console.log("El resultado es : ", multiplicacion());
  } else if (resultado === 4) {
    console.log("No se selecciono formula ")
  }
}
mostrarOperaciones();
