# Teclado Numérico com HTML, CSS e JavaScript

Este é um pequeno projeto de estudo que simula um teclado numérico de celular, desenvolvido com HTML, CSS e JavaScript.  
O objetivo foi praticar a atribuição de funções a múltiplos elementos `<input>` utilizando um loop `for` no JavaScript.

---

## Objetivo do Projeto

- Exercitar a manipulação de elementos do DOM com JavaScript puro.  
- Praticar a iteração sobre uma lista de botões (`querySelectorAll` + `for` loop`).  
- Implementar eventos de clique que exibem o número pressionado.  
- Reforçar conceitos básicos de estrutura e estilo com HTML e CSS.

---

## Tecnologias Utilizadas

- **HTML5** – Estrutura básica da interface.  
- **CSS3** – Estilização.
- **JavaScript (Vanilla)** – Lógica para interação com os botões.

---

## Funcionalidades

- Interface semelhante a um teclado numérico de celular (0–9, * e #).  
- Cada tecla é um **input do tipo `button`**.  
- Ao clicar em uma tecla, o valor correspondente é exibido em um campo de display.  
- Lógica de eventos implementada com um **loop `for`**, evitando repetição de código.

---

## Como Executar

1. Execute por meio do Github Pages:
   ```
   https://rildo-sgoncalves.github.io/Telefone/   
Interaja com o teclado para ver o funcionamento.

## Estrutura do Projeto
```
telefone/
│
├── index.html        # Estrutura principal da página
├── style.css         # Estilos do teclado
└── main.js           # Lógica de interação dos botões
```
Exemplo de Código (JavaScript)
```
const listaDeButtons = document.querySelectorAll('input[type="button"]');
let display = document.querySelector('input[type="tel"]');

for(let i = 0; i < listaDeButtons.length; i++) {
  listaDeButtons[i].onclick = function() {
    display.value = `${display.value}${listaDeButtons[i].value}`;
  };
}
```
## Aprendizados
Como percorrer uma NodeList com for e aplicar eventos.

Diferença entre querySelector e querySelectorAll.

Manipulação de valores de inputs e atualização de elementos.

Melhoria da lógica de repetição e organização do código.

## Autor
[Rildo S. Gonçalves](https://github.com/rildo-sgoncalves)

## Licença
Este projeto é de uso livre para fins de estudo.
Sinta-se à vontade para clonar, modificar e experimentar.
