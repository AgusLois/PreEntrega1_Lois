const nombre = prompt("Ingrese su nombre");
let nota = 0;
let promedio = 0;
let totalNotas = 0;
let contador = 0;

do {
  nota = parseInt(
    prompt(
      "Hola " +
        nombre +
        ", ingresa una nota o presiona 0 para conocer tu promedio"
    )
  );

  if (nota != 0) {
    totalNotas = totalNotas + nota;
    contador++;
  }
} while (nota != 0);

promedio = totalNotas / contador;

console.log(totalNotas);

alert("Tu promedio es de " + promedio);
