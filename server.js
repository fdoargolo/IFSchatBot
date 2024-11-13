const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 150,
};

app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use(bodyParser.json()); // Parse JSON bodies

let chatHistory = [];

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.userInput;

    // Se for a primeira interação, adicione a saudação ao histórico
    if (chatHistory.length === 0) {
      chatHistory.push({
        role: 'model',
        parts: [{ text: 'Você é a assistente virtual do Instituto Federal de Sergipe' }]
      });
    }

    // Adicionar a mensagem do usuário ao histórico
    chatHistory.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    // Criar a sessão de chat com o histórico acumulado
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory,
    });

    // Obter a resposta do modelo
    const result = await chatSession.sendMessage(userMessage);

    // Adicionar a resposta do modelo ao histórico
    chatHistory.push({
      role: 'model',
      parts: [{ text: result.response.text() }]
    });

    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ response: 'Desculpe, algo deu errado. Tente novamente mais tarde.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
