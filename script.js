const openai = new OpenAI({
  // replace your-api-key with your API key from ChatGPT
  apiKey: 'sk-proj-RyKyq9DG6rq7qLcEcpaxT3BlbkFJLUb1zbuxs0bamoWf3ZOo'
})
function createMessageElement(sender, text, timestamp) {
  const message = document.createElement('div');
  message.classList.add('message', sender);

  const icon = document.createElement('img');
  if (sender === 'user') {
      icon.src = 'user.png';
  } else {
      icon.src = 'bot.png';
  }
  icon.alt = sender === 'user' ? 'User Icon' : 'Bot Icon';
  message.appendChild(icon);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  message.appendChild(textContainer);

  const messageText = document.createElement('div');
  messageText.classList.add('message-text');
  messageText.textContent = text;
  textContainer.appendChild(messageText);

  const timestampElement = document.createElement('div');
  timestampElement.classList.add('timestamp');
  timestampElement.textContent = timestamp;
  textContainer.appendChild(timestampElement);

  return message;
}