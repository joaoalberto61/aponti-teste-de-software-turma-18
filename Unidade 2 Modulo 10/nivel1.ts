// formas de tipar
// forma 1
let idade:number;
// forma 2
const nome = "Seu Zezo";
// forma 3 não recomendado por ser redundante
const sobrenome:string = "da Silva";
// tipagem especiais
type usuario = {'nick':string, 'age':number }


let jogador:usuario = {nick: 'Ricardo', age:18};

let jogadorVelho:usuario = {nick:'Toin', age:76};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age >= 21){
        console.log(`Acesso liberado: o Jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar.`);

    }else {
        console.log(`Ei ${usuarioAtual.nick} é de menor e não pode jogar, pois tem apenas ${usuarioAtual.age} anos.`);
    }
};

verificarIdade(jogador);
verificarIdade(jogadorVelho);

type Tecnico = {
  nome: string;
  idade: number;
  anosExperiencia: number;
};

const tecnico1: Tecnico = {
  nome: "Professor Tite",
  idade: 63,
  anosExperiencia: 25,
};

const tecnico2: Tecnico = {
  nome: "Lucas Novato",
  idade: 28,
  anosExperiencia: 2,
};

function avaliarExperiencia(tecnicoAtual: Tecnico): void {
  const status =
    tecnicoAtual.anosExperiencia >= 5
      ? `O técnico ${tecnicoAtual.nome} (${tecnicoAtual.idade} anos) é Experiente, com ${tecnicoAtual.anosExperiencia} anos de carreira.`
      : `O técnico ${tecnicoAtual.nome} (${tecnicoAtual.idade} anos) é Iniciante, com apenas ${tecnicoAtual.anosExperiencia} anos de carreira.`;

  console.log(status);
}

avaliarExperiencia(tecnico1);
avaliarExperiencia(tecnico2);