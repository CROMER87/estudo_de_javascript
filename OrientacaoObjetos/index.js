import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Ricardo, 1122233309");
const cliente2 = new Cliente("Alice, 88822233309");

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10)


//contaCorrenteRicardo.depositar(500)



//contaCorrenteRicardo.sacar(100);
//contaCorrenteRicardo.transferir(200, conta2);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
console.log(contaSalario);


