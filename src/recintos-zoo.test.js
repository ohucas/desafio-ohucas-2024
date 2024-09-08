const RecintosZoo = require('./recintos-zoo');

describe('Recintos do Zoologico', () => {
    let zoo;

    beforeEach(() => {
        zoo = new RecintosZoo();
    });

    test('Deve rejeitar animal inválido', () => {
        const resultado = zoo.analisaRecintos('UNICORNIO', 1);
        expect(resultado.erro).toBe('Animal inválido');
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = zoo.analisaRecintos('MACACO', 0);
        expect(resultado.erro).toBe('Quantidade inválida');
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = zoo.analisaRecintos('MACACO', 10);
        expect(resultado.erro).toBe('Não há recinto viável');
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = zoo.analisaRecintos('CROCODILO', 1);
        expect(resultado.recintosViaveis[0]).toBe('Recinto S1 (espaço livre: 5 total: 10)');
    });

    test('Deve encontrar recintos para 2 macacos', () => {
        const resultado = zoo.analisaRecintos('MACACO', 2);
        expect(resultado.recintosViaveis).toContain('Recinto S1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis).toContain('Recinto Flo (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis).toContain('Recinto S&R (espaço livre: 3 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(5);
    });
});
