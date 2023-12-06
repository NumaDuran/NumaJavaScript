function calcular() {
  let operacion = prompt("Ingrese la operación (+, -, *, /):");
  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let resultado;

  switch (operacion) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
    case '/':
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        resultado = "Error: No se puede dividir por cero";
      }
      break;
    default:
      resultado = "Operación no válida";
  }

  alert("El resultado es: " + resultado);
}