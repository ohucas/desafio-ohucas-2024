# Projeto: desafio-zoo

Este projeto consiste em uma classe JavaScript chamada `RecintosZoo` que gerencia os recintos de um zoológico, permitindo verificar a disponibilidade de espaço para acomodar diferentes animais. O código também inclui testes automatizados escritos com o framework de testes `Jest` para validar o comportamento da classe.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

### Parte 1: Classe `RecintosZoo`

A classe `RecintosZoo` contém:

- **Propriedade `recintos`**: Um array de objetos que representam os recintos disponíveis no zoológico, com suas capacidades totais e números atuais de animais.
- **Método `analisaRecintos(animal, quantidade)`**: Este método verifica se o animal é válido (MACACO, CROCODILO, ELEFANTE) e se a quantidade é positiva. Em seguida, determina quais recintos têm espaço suficiente para acomodar a quantidade solicitada do animal.

### Parte 2: Testes Automatizados

Os testes foram escritos usando o framework `Jest` para validar a lógica da classe `RecintosZoo`. Eles incluem:

- **Teste para rejeitar um animal inválido**.
- **Teste para rejeitar uma quantidade inválida**.
- **Teste para verificar que não há recintos suficientes para uma quantidade muito grande de animais**.
- **Teste para encontrar um recinto adequado para um crocodilo**.
- **Teste para encontrar recintos para uma quantidade específica de macacos**.

## Pré-requisitos

- Node.js instalado.
- `Jest` instalado globalmente ou como dependência de desenvolvimento.

