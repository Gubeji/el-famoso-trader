
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

const CryperAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'agent',
      content: '¡Hola! Soy Cryper, tu asistente de trading cripto. Puedo ayudarte con análisis de mercado, estrategias de trading, gestión de riesgo y mucho más. ¿En qué puedo asistirte hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = getAgentResponse(inputMessage);
      const agentMessage: Message = {
        id: messages.length + 2,
        type: 'agent',
        content: agentResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAgentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('bitcoin') || input.includes('btc')) {
      return 'Bitcoin está mostrando una tendencia alcista interesante. Según mis análisis, hay una probabilidad del 78% de que rompa la resistencia en $45,000. Te recomiendo considerar una posición larga con stop loss en $42,000.';
    }
    
    if (input.includes('ethereum') || input.includes('eth')) {
      return 'Ethereum presenta patrones de consolidación. El RSI indica sobrecompra, sugiriendo una posible corrección. Mantente atento a los niveles de soporte en $2,500.';
    }
    
    if (input.includes('riesgo') || input.includes('risk')) {
      return 'Para una gestión de riesgo óptima, te sugiero no arriesgar más del 2-3% de tu capital por operación. Con las probabilidades actuales, el tamaño de posición recomendado es del 5.2% de tu cartera.';
    }
    
    if (input.includes('estrategia') || input.includes('strategy')) {
      return 'Actualmente tengo 3 estrategias activas: Breakout (87% acierto), RSI Divergence (76% acierto) y EMA Cross (82% acierto). ¿Te gustaría conocer más detalles de alguna?';
    }
    
    return 'Interesante pregunta. Basado en los datos actuales del mercado y los indicadores técnicos, te recomendaría mantener una posición cautelosa. El mercado está mostrando signos mixtos. ¿Hay algún símbolo específico que te interese analizar?';
  };

  const quickActions = [
    'Analizar BTC/USDT',
    'Revisar alertas',
    'Estado del mercado',
    'Consejos de riesgo'
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700 h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center space-x-2">
          <Bot className="h-6 w-6 text-emerald-400" />
          <span>Cryper - Agente IA</span>
          <div className="ml-auto">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Messages Area */}
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-blue-500' 
                    : 'bg-emerald-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-100'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 text-xs"
              onClick={() => setInputMessage(action)}
            >
              {action}
            </Button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Pregunta a Cryper..."
            className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryperAgent;
