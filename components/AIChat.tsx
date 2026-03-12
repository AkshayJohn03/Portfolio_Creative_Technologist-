
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot, User } from 'lucide-react';
import { generateLocalChatResponse } from '../services/localChatService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Akshay's digital assistant. Ask me anything about his experience, design philosophy, or engineering background.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && messagesEndRef.current.parentElement) {
      messagesEndRef.current.parentElement.scrollTo({
        top: messagesEndRef.current.parentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatText = (text: string) => {
    return text.split('\n').map((str, i) => (
      <span key={i}>
        {str.split('**').map((chunk, j) =>
          j % 2 === 1 ? <strong key={j} className="font-bold text-accent">{chunk}</strong> : chunk
        )}
        <br />
      </span>
    ));
  };

  const suggestedQuestions = [
    "Who is Akshay John?",
    "What are his core skills in AI?",
    "Tell me about Project RIFT.",
    "What did he do at Wipro?",
    "What is ZIA: LLM From Scratch?",
    "How does he bridge design and AI?",
    "What is his experience at Akkodis?",
    "How can I contact him?"
  ];

  const handleSend = async (question: string) => {
    if (isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: question, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const responseText = await generateLocalChatResponse(userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a brief connection issue. Could you try that again?", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-20 sm:py-32 bg-gray-50/50 dark:bg-dark relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 via-accent/5 to-gray-100/30 dark:from-dark dark:via-accent/5 dark:to-dark pointer-events-none"></div>

      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6 animate-pulse">
            <Sparkles size={14} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Interactive Agent</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Ask Anything</h2>
          <p className="text-gray-50 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
            My AI portfolio twin is ready to answer questions about my background and process. Choose a suggestion below to start.
          </p>
        </div>

        <div className="bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col h-[600px] sm:h-[700px] transition-all">
          {/* Chat Window */}
          <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div className={`flex gap-3 sm:gap-4 max-w-[90%] sm:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${msg.role === 'user' ? 'bg-gray-900 dark:bg-white text-white dark:text-black' : 'bg-accent text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={18} />}
                  </div>
                  <div className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-sm sm:text-base leading-relaxed ${msg.role === 'user'
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black rounded-tr-none shadow-xl'
                      : 'bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300 rounded-tl-none shadow-sm'
                    }`}>
                    {msg.role === 'model' ? formatText(msg.text) : msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-4 max-w-[80%]">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white dark:bg-white/5 border border-black/5 p-4 sm:p-5 rounded-3xl rounded-tl-none flex items-center gap-3 shadow-sm">
                    <Loader2 size={18} className="animate-spin text-accent" />
                    <span className="text-gray-400 text-xs sm:text-sm font-medium">Assistant is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Area */}
          <div className="p-4 sm:p-6 bg-gray-50/50 dark:bg-black/40 border-t border-black/5 dark:border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 px-2">Suggestions</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-[11px] sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white hover:border-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-left sm:text-center"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
