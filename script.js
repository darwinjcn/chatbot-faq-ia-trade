// ==========================================
// CONFIGURACIÓN DE OPENROUTER
// ==========================================
const API_KEY = 'coloca_tu_api_key_aquí'; // Reemplaza con tu API Key de OpenRouter
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'openrouter/free'; 

// ==========================================
// REGLAS DEL NEGOCIO EXPANDIDAS
// ==========================================
const SYSTEM_PROMPT = `Eres el asistente virtual del "Bodegón El Buen Sabor". Tu trabajo es atender a los clientes de forma amable, breve y directa.

Debes responder a las preguntas de los clientes basándote ESTRICTAMENTE en la siguiente información oficial del negocio:

1. MÉTODOS DE PAGO: Aceptamos Pago Móvil, Zelle, Efectivo (Bolívares y Dólares) y Punto de Venta. NO aceptamos tarjetas de débito internacional ni PayPal.
   - Pagos Mixtos: Sí se permite pagar una parte en bolívares (Pago Móvil/Efectivo Bs) y otra en divisas (Zelle/Efectivo USD).
   - Datos de Pago Móvil: Banesco, C.I. V-12.345.678, Teléfono 0414-1234567. (Dile al cliente que envíe el capture del pago al chat).
2. TASA DE CAMBIO: Trabajamos únicamente con la tasa oficial del BCV del día.
3. DELIVERY Y ZONAS: Hacemos envíos en Chacao, Altamira, El Paraíso y el Centro. Costo del delivery: $2 (o su equivalente en Bs).
   - Delivery Gratis: El delivery es totalmente GRATIS para pedidos superiores a $20.
4. HORARIOS Y UBICACIÓN: Abrimos de Lunes a Sábado de 8:00 AM a 8:00 PM. NO abrimos domingos ni feriados. Ubicación: Av. Principal de la Castellana, Torre Oeste, Local 4 (Caracas).
5. FACTURACIÓN: Sí emitimos factura fiscal y nota de entrega para todos los pedidos que lo requieran.

REGLAS DE COMPORTAMIENTO:
- Si te preguntan algo fuera de este contexto, di amablemente que solo puedes ayudar con dudas del Bodegón.
- No inventes información que no esté en este texto.
- Responde siempre en español de forma concisa.`;

// ==========================================
// LÓGICA DEL CHAT
// ==========================================
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = userInput.value.trim();
    if (!question) return;

    addMessage(question, 'user-message');
    userInput.value = '';

    const loadingMessage = addMessage('Pensando...', 'bot-message');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: question }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        const botReply = data.choices[0].message.content;
        loadingMessage.textContent = botReply;

    } catch (error) {
        console.error('Error detallado:', error);
        loadingMessage.textContent = `Lo siento, ocurrió un error de conexión. Intenta de nuevo.`;
    }
});

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    // Hace que el scroll baje automáticamente al último mensaje
    chatBox.scrollTop = chatBox.scrollHeight;
    return messageDiv;
}