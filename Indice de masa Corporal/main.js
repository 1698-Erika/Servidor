const peso = parseFloat(prompt("Ingresa tu peso"));
const altura = parseInt(prompt("Ingresa tu altura"));
const masaCorporal = peso / altura ** 2;

let categoria = "";

if (masaCorporal >= 30) {
  categoria = "Obesidad";
} else if (masaCorporal >= 25 && masaCorporal <= 29.9) {
  categoria = "Sobrepeso";
} else if (masaCorporal >= 18.5 && masaCorporal <= 24.9) {
  categoria = "Normal";
} else {
  categoria = "Bajo";
}

console.log(
  "indice de masa corporal es" +
    masaCorporal +
    "corresponde a ala categoria" +
    categoria
);
