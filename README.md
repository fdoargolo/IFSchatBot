# Assistente Virtual para o Hackathon Correios

Repositório da solução desenvolvida acerca do tema “Como aumentar a eficiência dos atendimentos diários nas agências dos Correios por meio da tecnologia?”

# Descrição

A **CORA** é uma assistente virtual para auxilia os servidores dos Correios. Ela possui uma interface interativa e amigável, permitindo que os atendentes façam perguntas e recebam respostas rápidas e assertivas. Desenvolvida com uma combinação de tecnologias front-end e back-end, Cora pode ser facilmente configurada para uso em diferentes plataformas. Nela, o atendente do Correios consegue ver os tópicos mais acessados e um guia de aprendizado sobre o que ela é, como nasceu e como utilizá-la.
Nossa plataforma é focada em trazer simplicidade e inovação por meio de um sistema claro e facilmente configurável para os desenvolvedores, além de ser portável em computadores mais simples, como os que normalmente são colocados em setores de atendimento ao público.

# Sobre a aplicação

Nossa proposta foi desenvolvida utilizando HTML, CSS E JavaScript para a interfaçe frontend. Cora consegue aprender em tempo real por meio de uma API integrada ao Google, fazendo com que ela possa sempre entregar respostas mais assertivas e enxutas.

# Requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (v6 ou superior)

# Instalação

1. **Instale as dependências**:
   Execute o comando abaixo no diretório raiz do projeto para instalar todas as dependências listadas no `package.json`:

   ```bash
   npm install
   ```

1.1. _Instale o SDK da AI generativa_:

```bash
npm install @google/generative-ai
```

2. **Crie o arquivo `.env`**:
   O projeto utiliza variáveis de ambiente para armazenar chaves e outras informações sensíveis. Crie um arquivo `.env` na raiz do projeto e adicione a sua chave de API da seguinte forma:

   ```bash
   API_KEY="Sua chave de API aqui"
   ```

   Certifique-se de substituir `"Sua chave de API aqui"` pela chave correta que você obteve do serviço de API correspondente.

   Caso você não saiba como inserir uma API, crie uma conta do Google Cloud Console (atenção para a necessidade de inserir um cartão para a conta), crie um projeto e vá na opção "Credenciais" da aba na esquerda. Ali, você pode gerar um token, que será sua chave para por no campo API_KEY="Bem Aqui" e utilizar a aplicação.

3. **Inicie o servidor**:
   Depois de configurar o arquivo `.env`, você pode iniciar o servidor localmente com o comando:
   ```bash
   npm start
   ```
   Isso iniciará a aplicação em modo de desenvolvimento. Acesse o chatbot no navegador através de `http://localhost:3000`.

# Uso

Uma vez que o servidor esteja rodando, a interface do chatbot estará disponível. Você verá um botão de chat na parte inferior da tela, ao clicar nele, a assistente virtual "Cora" será exibido. A partir daí, você pode digitar suas perguntas e receber respostas automatizadas.
Caso o atendente seja mais idoso ou com problemas de baixa visão, contornamos esses problemas pensando em linhas de texto maiores, trazendo comodidade para os servidores de 0 a 100 anos!

# Exemplos de perguntas que você pode fazer ao bot:

- "Quais as burocracias para enviar um documento para o exterior?"
- "Como cadastrar um cliente em um curso da UniVirtual - Correios?"
- "Me ensine a vender Seguros para os clientes"

## Estrutura do Projeto

- **/public/**: Contém arquivos estáticos como imagens, ícones e estilos, incluindo o front-end e a lógica do chatbot.

  - arquivo `index.html` contém toda a estrutura visível, estilização e alguns eventos (funções).

- **/server.js**: Configuração do servidor que lida com as requisições do chatbot e conecta com a API.
