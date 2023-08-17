const contraseña = prompt("Crea tu contraseña");

let validLength = false;
let validNumber = false;
let validUppercase = false;
let validLowercase = false;

if (contraseña.length >= 7) {
  validLength = true
}

for (let i = 0; i < contraseña.length; i++) {
 //for(caracter of contraseña){
 let caracter = contraseña[i]
 console.log(caracter)
 if (caracter >= 0 && caracter <= 9) {
    validNumber = true;
  } else if (caracter >= 'A' && caracter <= 'Z') {
    validUppercase = true;
  } else if (caracter >= "a" && caracter <= "z") {
    validLowercase = true;
  }
}
//console.log(validNumber)
//console.log(validLength)
//console.log(validUppercase)
//console.log(validLowercase)

const valid = validLength && validNumber && validUppercase && validLowercase;
if (valid === true){
console.log('contraseña correcta')}
else{
console.log('contraseña incorrecta')}