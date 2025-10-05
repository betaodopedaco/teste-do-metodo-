// IABox Widget Loader - Carrega automaticamente
console.log('🚀 IABox Widget carregando...');

function iaboxInit(siteId) {
  if (window.iaboxLoaded) return;
  window.iaboxLoaded = true;
  
  console.log('🎯 Inicializando IABox para:', siteId);
  
  // Criar elemento do widget
  var widget = document.createElement('div');
  widget.id = 'iabox-widget-container';
  widget.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      background: white;
      border: 2px solid #4CAF50;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      z-index: 99999;
    ">
      <!-- Header -->
      <div style="
        background: #4CAF50;
        color: white;
        padding: 15px;
        border-top-left-radius: 13px;
        border-top-right-radius: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
      ">
        <span>🤖 IABox Assistente</span>
        <button onclick="document.getElementById('iabox-widget-container').style.display='none'" 
                style="background:none; border:none; color:white; cursor:pointer; font-size:18px;">
          ×
        </button>
      </div>
      
      <!-- Messages Area -->
      <div id="iabox-messages" style="
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        background: #f9f9f9;
      ">
        <div style="background: #e3f2fd; padding: 10px; border-radius: 10px; margin-bottom: 10px;">
          Olá! Sou seu assistente IA. Como posso ajudar você hoje? 😊
        </div>
      </div>
      
      <!-- Input Area -->
      <div style="display: flex; padding: 15px; border-top: 1px solid #ddd; background: white; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
        <input type="text" id="iabox-input" 
               placeholder="Digite sua mensagem..." 
               style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-right: 10px;">
        <button onclick="window.iaboxSendMessage()" 
                style="padding: 12px 20px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
          Enviar
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(widget);
  
  // Configurar evento de Enter
  document.getElementById('iabox-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      window.iaboxSendMessage();
    }
  });
  
  console.log('✅ IABox Widget carregado com sucesso!');
}

// Função para enviar mensagem
window.iaboxSendMessage = function() {
  var input = document.getElementById('iabox-input');
  var messages = document.getElementById('iabox-messages');
  var text = input.value.trim();
  
  if (!text) return;
  
  // Mensagem do usuário
  var userMsg = document.createElement('div');
  userMsg.style.cssText = 'background: #e1ffc7; padding: 10px; border-radius: 10px; margin-bottom: 10px; margin-left: 40px;';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  
  // Simular resposta da IA
  setTimeout(function() {
    var botMsg = document.createElement('div');
    botMsg.style.cssText = 'background: #f0f0f0; padding: 10px; border-radius: 10px; margin-bottom: 10px;';
    
    // Respostas inteligentes básicas
    var lowerText = text.toLowerCase();
    var response = 'Obrigado pela sua mensagem! Em uma IA real, eu processaria: "' + text + '"';
    
    if (lowerText.includes('oi') || lowerText.includes('olá') || lowerText.includes('ola')) {
      response = 'Olá! 😊 Como posso ajudar você hoje?';
    } else if (lowerText.includes('preço') || lowerText.includes('custo') || lowerText.includes('valor')) {
      response = 'Posso te conectar com nosso time de vendas para orçamentos! 📞';
    } else if (lowerText.includes('obrigado') || lowerText.includes('obrigada')) {
      response = 'Por nada! Fico feliz em ajudar! 🤗';
    } else if (lowerText.includes('horário') || lowerText.includes('hora') || lowerText.includes('funciona')) {
      response = 'Estamos disponíveis 24/7 para te atender! ⏰';
    }
    
    botMsg.textContent = response;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
};

// Auto-inicialização
setTimeout(function() {
  if (!window.iaboxLoaded) {
    var siteId = 'client-' + Math.random().toString(36).substr(2, 9);
    iaboxInit(siteId);
  }
}, 100);
