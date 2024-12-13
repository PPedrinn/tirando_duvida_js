
function Jogador(posicao, gols, assistencias) {
    this.posicao = posicao;
    let _gols = gols;

    this.getGols = function() {
        return _gols;
    }

    this.setGols = function(valor) {
        if (typeof valor === 'number') {
            _gols = valor
        }
    }

    let _assistencias = assistencias;

    this.getAssistencias = function() {
        return _assistencias;
    }

    this.setAssistencias = function(valor) {
        if (typeof valor === 'number') {
            _assistencias = valor
        }
    }
}

function MeioCampo(posicao) {
    Jogador.call(this, posicao, 12, 17);
}

function Zaguerio(posicao) {
    Jogador.call(this, posicao, 2, 6);
}

const jogador1 = new Jogador("Atacante", 28, 4);
const jogador2 = new Jogador("Meio Campo");
const jogador3 = new Jogador("Zagueiro");

console.log(jogador1.getGols())
console.log(jogador1.getAssistencias())

console.log(jogador2.getGols())
console.log(jogador2.getAssistencias())

console.log(jogador3.getGols())
console.log(jogador3.getAssistencias())
