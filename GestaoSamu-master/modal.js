// Selecionando o card e o modal
const card = document.querySelector('.card1');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Função para abrir o modal ao clicar no card
card.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Função para fechar o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});