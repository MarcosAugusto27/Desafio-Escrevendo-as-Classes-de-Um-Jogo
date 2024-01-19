let nomeHeroi= prompt("Digte o seu nome Heroi: "); 
let idade = prompt("Digite sua idade:");
let idade_num = Number(idade);
let escolha = prompt("Digite sua classe:  1-Guerreiro, 2-Mago, 3-Monge, 4-Ninja");
let escolha_num = Number(escolha);

console.log(Heroi.atacar(escolha,nomeHeroi,idade));

//Objetivo:
//Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

//nome
//idade
//Tipo (ex: Guerreiro, Mago, Monge, Ninja )
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//exibir a mensagem: "o {tipo} atacou usando {ataque}")

//aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe

//e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)

//se guerreiro -> no ataque exibir (usou espada)

//se monge -> no ataque exibir (usou artes marciais)

//se ninja -> no ataque exibir (usou shuriken)

//Saída
//Ao final deve se exibir uma mensagem:

//"o {tipo} atacou usando {ataque}" ex: mago atacou usando magia guerreiro atacou usando espada