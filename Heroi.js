let nome;
let idade;
let tipo =["Guerreiro", "Mago", "Monge", "Ninja"];
    
function atacar(escolha,nome,idade){
    let ataque = ["espada","magia","artes marciais","shuriken"];
    
    let resultado ="O " + tipo[escolha - 1] + " " + nome + " de " + idade + " anos atacou usando " + ataque[escolha - 1] + ".";
    return resultado;
    
}