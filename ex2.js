let fibo = [0, 1];
let num_i = Number(prompt("Digite um número"));
for (let i = 1; i <= 10; i++) {
  let num = fibo[i - 1] + fibo[i];
  fibo.push(num);
}
if (fibo.includes(num_i)) {
  console.log("Número na sequência");
} else {
  console.log(`O número ${num_i} não está na sequência de Fibonacci`);
}
console.log(fibo);
