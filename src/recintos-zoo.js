class RecintosZoo {
    constructor() {
        this.recintos = [
            { nome: 'Recinto S1', capacidadeTotal: 10, animaisAtuais: 5 },//S1= savana 1
            { nome: 'Recinto Flo', capacidadeTotal: 5, animaisAtuais: 2 },//Flo = floresta
            { nome: 'Recinto S&R', capacidadeTotal: 7, animaisAtuais: 4 },//S&R= savana e rio
            { nome: 'Recinto Rio', capacidadeTotal: 8, animaisAtuais: 3 },//RIo= rio
            { nome: 'Recinto S2', capacidadeTotal: 9, animaisAtuais: 1 },//S2 = savana 2
        ];
    }

    analisaRecintos(animal, quantidade) {
        const animaisValidos = ['MACACO', 'CROCODILO', 'ELEFANTE'];

        if (!animaisValidos.includes(animal)) {
            return { erro: 'Animal inválido' };
        }

        if (quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        const recintosViaveis = this.recintos
            .filter(recinto => (recinto.capacidadeTotal - recinto.animaisAtuais) >= quantidade)
            .map(recinto => `${recinto.nome} (espaço livre: ${recinto.capacidadeTotal - recinto.animaisAtuais} total: ${recinto.capacidadeTotal})`);

        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        return { recintosViaveis };
    }
}

module.exports = RecintosZoo;
