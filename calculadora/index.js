const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarCalculo(operacao, num1, num2) {
  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'tente com outro numero.';
      }
      return num1 / num2;
    default:
      return 'Operação inválida';
  }
}

function iniciarCalculadora() {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite a operação (+, -, *, /): ', (operacao) => {
      rl.question('Digite o segundo número: ', (num2) => {
        const resultado = realizarCalculo(operacao, parseFloat(num1), parseFloat(num2));
        console.log(`Resultado: ${resultado}`);
        rl.close();
      });
    });
  });
}

console.log('Calculadora Simples');
iniciarCalculadora();