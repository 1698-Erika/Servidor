//console.log('Hola Mundo')


let calificacion = parseFloat( prompt('Ingresa tu calificacion'))

switch (calificacion) {

case  100 :
console.log( 'Tu calificacion fue Excelente')
break
case 80:
console.log( 'Tu calificacion fue Bueno' )
break
case 60:
console.log('Tu calificacion fue Regular' )
break
case 40:
console.log( 'Tu calificacion fue Malo')
break
case 20:
console.log( 'Tu calificacion fue Muy malo')
break

default:
console.log('No existe')
break
}
