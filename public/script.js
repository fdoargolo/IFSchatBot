const chatButton = document.getElementById('chat-button');
const chatContainer = document.getElementById('chat-container');
const chatCloseButton = document.getElementById('chat-close-button');
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const form = document.getElementById('chat-form');

chatButton.addEventListener('click', () => {
    chatContainer.style.display = 'flex'; // Mostrar o chat
    chatButton.style.display = 'none'; // Esconder o botão
});

chatCloseButton.addEventListener('click', () => {
    chatContainer.style.display = 'none'; // Esconder o chat
    chatButton.style.display = 'flex'; // Mostrar o botão
});

async function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = ''; // Limpar o campo de entrada
    chatHistory.innerHTML += `<div class="message user-message">${userMessage}</div>`;
    
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput: userMessage }),
        });

        const data = await response.json();
        const botMessage = data.response;
        chatHistory.innerHTML += `<div class="message bot-message">${botMessage}</div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll até o final
    } catch (error) {
        console.error('Erro:', error);
        chatHistory.innerHTML += `<div class="message bot-message">Desculpe, algo deu errado. Tente novamente mais tarde.</div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll até o final
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio do formulário
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Mostrar o loader
    sendMessage().finally(() => {
        loader.style.display = 'none'; // Esconder o loader após enviar
    });
});

// Adiciona a mensagem inicial do bot ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    chatHistory.innerHTML = `<div class="message bot-message">Olá, sou sua assistente virtual do IFS, como posso te ajudar?</div>`;
});