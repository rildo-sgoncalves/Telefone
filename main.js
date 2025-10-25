const listaDeButtons = document.querySelectorAll('input[type="button"]');
let display = document.querySelector('input[type="tel"]');

for(let i = 0; i < listaDeButtons.length; i++) {
  listaDeButtons[i].onclick = function() {
    display.value = `${display.value}${listaDeButtons[i].value}`;
  };
}