let historial = [];

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

  let calculo = {
    operacion: operacion,
    numero1: numero1,
    numero2: numero2,
    resultado: resultado
  };

  historial.push(calculo);

  alert("El resultado es: " + resultado);

  mostrarHistorial();
}

function mostrarHistorial() {
  console.log("Historial de cálculos:");
  historial.forEach(function(calculo, index) {
    console.log(`Cálculo ${index + 1}: ${calculo.numero1} ${calculo.operacion} ${calculo.numero2} = ${calculo.resultado}`);
  });
}
