// Mapeamento entre tipo de veículo e imagem correspondente
const vehicleImages = {
    "Ambulância Tipo A": "./assets/AMBULANCIA.png",
    "Ambulância Tipo B": "./assets/AMBULANCIA.png",
    "Ambulância Tipo C": "./assets/AMBULANCIA.png",
    "Ambulância Tipo D": "./assets/AMBULANCIA.png",
    "MOTOLANCIA": "./assets/MOTOLANCIA.png",
    "HELICÓPTERO": "./assets/HELICOPTERO.png"
};

// Função para abrir o modal de veículos
function openVeiculoPopup() {
    document.getElementById('modal-veiculos').style.display = 'block';
}

// Função para fechar o modal de veículos
function closeVeiculoPopup() {
    document.getElementById('modal-veiculos').style.display = 'none';
}

// Função para adicionar o veículo selecionado
function addVehicle() {
    const vehicleType = document.getElementById('vehicleType').value;
    const imageUrl = vehicleImages[vehicleType]; // Obter a URL da imagem correspondente
    
    // Criar um novo cartão para o veículo selecionado
    const vehicleCard = document.createElement('article');
    vehicleCard.classList.add('card');

    // Adicionar imagem ao cartão
    if (imageUrl) {
        const vehicleImage = document.createElement('img');
        vehicleImage.src = imageUrl;
        vehicleImage.alt = vehicleType;
        vehicleImage.classList.add('vehicle-image'); // Classe para estilizar a imagem
        vehicleCard.appendChild(vehicleImage);
    }

    // Adicionar conteúdo ao cartão do veículo
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    const title = document.createElement('h3');
    title.textContent = vehicleType;
    const statusDot = document.createElement('span');
    statusDot.classList.add('status-dot');
    titleContainer.appendChild(title);
    titleContainer.appendChild(statusDot);
    
    const content = document.createElement('div');
    content.classList.add('content-p');
    const description = document.createElement('p');
    description.textContent = `Veículo: ${vehicleType}`;
    content.appendChild(description);
    
    // Criar uma área para as imagens e ícones
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const locationLink = document.createElement('p');
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa-solid', 'fa-location-dot');
    locationLink.appendChild(locationIcon);
    iconContainer.appendChild(locationLink);
    
    const chatButton = document.createElement('p');
    const chatIcon = document.createElement('i');
    chatIcon.classList.add('fa-solid', 'fa-comment');
    chatButton.appendChild(chatIcon);
    iconContainer.appendChild(chatButton);
    
    // Adicionar tudo ao cartão do veículo
    vehicleCard.appendChild(titleContainer);
    vehicleCard.appendChild(content);
    vehicleCard.appendChild(iconContainer);

    // Adicionar o cartão do veículo na seção de veículos
    const vehicleSection = document.querySelector('.card-container');
    vehicleSection.appendChild(vehicleCard);

    // Fechar o modal após adicionar o veículo
    closeVeiculoPopup();
}

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal-veiculos');
    if (event.target === modal) {
        closeVeiculoPopup();
    }
};
