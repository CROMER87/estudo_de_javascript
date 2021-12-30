import { Cliente } from "../Cliente.js";

//Classe abstrata
export class Conta {

    _saldo;
    _cliente;
    _agencia;

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar uma objeto do tipo Conta");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get agencia() {
        return this._agencia;
    }

    //Método Abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato")
    }

    //Sobreescrevendo o método sacar
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;

    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
