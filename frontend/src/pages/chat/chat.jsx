import React, { useState, useRef, useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello there. I'm Solace, your personal space to reflect, vent, or just process your day. Whatever you share here stays completely confidential. What's on your mind right now?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLocked, setIsLocked] = useState(false); 
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping || isLocked) return;

    const userRawMessage = input;
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: userRawMessage
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch(`${BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userRawMessage,
          history: messages.slice(1) 
        }),
      });

      const data = await response.json();

      if (data.crisisTriggered) {
        setIsLocked(true);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: data.reply,
          isCrisis: data.crisisTriggered 
        }
      ]);

    } catch (error) {
      console.error("Failed to fetch from backend server:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: "I'm having trouble connecting to my server network. Please check your connection or try again shortly."
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChatHistory = () => {
    if (window.confirm("Are you absolutely sure you want to permanently wipe this conversation? This cannot be undone.")) {
      setMessages([
        {
          id: Date.now(),
          sender: 'ai',
          text: "History cleared securely. I'm right here whenever you are ready to begin fresh."
        }
      ]);
      setIsLocked(false); 
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden bg-slate-50 font-sans">
      
      <aside className="hidden md:flex w-64 flex-col border-r border-slate-200/60 bg-white p-4 justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Sessions</span>
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" title="Private session encrypted" />
          </div>
          
          <div className="rounded-xl bg-teal-50/70 p-3 border border-teal-100/50 cursor-pointer">
            <p className="text-xs font-semibold text-teal-900 truncate">Current Reflection</p>
            <p className="text-[11px] text-teal-600 mt-0.5">Active right now</p>
          </div>
        </div>

        <button 
          onClick={clearChatHistory}
          className="w-full rounded-xl border border-rose-100 bg-rose-50/50 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-center"
        >
          Securely Wipe Chat History
        </button>
      </aside>

      <main className="flex flex-1 flex-col bg-slate-50 justify-between relative h-full">
        
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 sm:px-6 max-w-3xl w-full mx-auto pb-24">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full items-start gap-3 animate-in fade-in duration-200 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-2xs font-medium text-xs ${
                  msg.isCrisis ? 'bg-rose-600 animate-bounce' : 'bg-teal-600'
                }`}>
                  {msg.isCrisis ? '🚨' : 'S'}
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed shadow-2xs border ${
                msg.sender === 'user'
                  ? 'bg-slate-800 text-white border-slate-800 rounded-tr-xs'
                  : msg.isCrisis 
                    ? 'bg-rose-50 text-rose-900 border-rose-200 font-medium rounded-tl-xs shadow-md shadow-rose-100/50'
                    : 'bg-white text-slate-800 border-slate-100 rounded-tl-xs'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex w-full items-start gap-3 justify-start animate-pulse">
              <div className="h-8 w-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0 text-xs font-medium">
                S
              </div>
              <div className="bg-white border border-slate-100 text-slate-400 text-xs rounded-2xl p-4 shadow-2xs flex items-center gap-1">
                Solace is processing<span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-slate-50 via-slate-50 to-transparent pt-6 pb-4 px-4 sm:px-6">
          <form 
            onSubmit={handleSendMessage}
            className={`max-w-3xl mx-auto flex items-center gap-2 bg-white rounded-2xl border p-1.5 shadow-xs transition-all duration-200 ${
              isLocked 
                ? 'border-rose-200 bg-rose-50/10 focus-within:ring-0 focus-within:border-rose-200' 
                : 'border-slate-200/80 focus-within:border-teal-500/50 focus-within:ring-2 focus-within:ring-teal-500/10'
            }`}
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isLocked 
                  ? "Locked for your safety. Please use the support links above." 
                  : isTyping 
                    ? "Solace is working..." 
                    : "What's on your mind? Share anything..."
              }
              disabled={isTyping || isLocked}
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none disabled:opacity-60"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping || isLocked}
              className="rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-teal-700 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              Send
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>

      </main>
    </div>
  );
};

export default ChatPage;