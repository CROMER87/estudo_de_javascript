console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;


console.log(`Destinos possíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

const podeComprar =  idadeComporador >= 18 || estaAcompanhada == true;


let contador = 0
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 