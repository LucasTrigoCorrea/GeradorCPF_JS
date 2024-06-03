import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

const gera = document.querySelector('.geraCPF');

function gerarNovoCPF() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
}

gera.addEventListener('click', (event) => {
  gerarNovoCPF();
});
