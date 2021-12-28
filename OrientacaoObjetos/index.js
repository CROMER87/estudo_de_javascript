import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo, 1122233309");
const cliente2 = new Cliente("Alice, 88822233309");

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);


contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);
