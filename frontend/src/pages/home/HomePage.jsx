import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  const handleStartSession = () => {
    navigate('/check-in');
  };

  const bentoDetails = {
    speed: {
      title: "Groq LPU™ Inference Engine",
      description: "Traditional AI apps run on standard cloud hardware, causing lagging response times that can increase anxiety during a conversation. Solace directly communicates with Groq's specialized hardware, processing open-source LLMs at over 300 tokens per second. This ensures a fluid, natural conversation that mimics a real-time interaction without artificial delays.",
      metric: "Latency: Less than 100ms"
    },
    privacy: {
      title: "Zero-Knowledge Architecture",
      description: "Your vulnerability deserves complete digital security. By selecting an anonymous guest session, your chat data bypasses long-term database storage entirely. Your message metrics exist solely inside your active browser context state. Clicking the 'Securely Wipe Chat History' action permanently purges the records, leaving absolutely no database footprint behind.",
      metric: "Retention: 0 Days (Local Storage Only)"
    },
    safety: {
      title: "Hardcoded Middleware Intercept",
      description: "AI is a supportive processing companion, but it is never a substitute for certified medical personnel. Our backend features an isolated Node.js/Express validation layer. If any critical self-harm or crisis terminology is passed inside a text stream, the system immediately drops the connection to the AI model and flips a frontend lock state, prioritizing immediate access to professional human lifelines.",
      metric: "Execution: Instant Pre-Inference Filter"
    }
  };

  return (
    <div className="w-full bg-slate-50 selection:bg-teal-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        <section className="text-center py-12 md:py-20 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-100">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Always Confidential & Safe
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
            A quiet space for <br />
            <span className="text-teal-600 font-medium">your thoughts.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-xl mx-auto">
            An ultra-fast, AI-powered wellness companion designed to help you unpack your day. Confidential, safe, and always available.
          </p>

          <div className="pt-4">
            <button 
              onClick={handleStartSession}
              className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-teal-700 active:scale-98 cursor-pointer tracking-wide"
            >
              Start a Session (Completely Anonymous)
            </button>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => setActiveModal('speed')}
            className="rounded-2xl bg-white p-6 border border-slate-100 shadow-xs flex flex-col justify-between transition-all hover:border-slate-200 cursor-pointer group hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="h-9 w-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-800">Instant Responses</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Powered by Groq's blazing-fast speed. No long processing delays, just fluent, active-listening conversations whenever you need to talk.
              </p>
            </div>
            <div className="pt-4 text-xs font-medium text-teal-600 group-hover:text-teal-700 flex items-center gap-1">
              How it works <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveModal('privacy')}
            className="rounded-2xl bg-white p-6 border border-slate-100 shadow-xs flex flex-col justify-between transition-all hover:border-slate-200 cursor-pointer group hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-800">Zero Judgment</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Speak your mind completely freely. Choose an anonymous, secure session. Your history belongs entirely to you, with one-click data clear tools.
              </p>
            </div>
            <div className="pt-4 text-xs font-medium text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
              Data security specs <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>

          <div 
            onClick={() => setActiveModal('safety')}
            className="rounded-2xl bg-white p-6 border border-slate-100 shadow-xs flex flex-col justify-between transition-all hover:border-slate-200 cursor-pointer group hover:shadow-sm"
          >
            <div className="space-y-3">
              <div className="h-9 w-9 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-100/70 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-800">Human-First Safety</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Equipped with automatic hotkey intercepts. If our engine senses deep crisis or safety risks, instant routing to real professional help slides up.
              </p>
            </div>
            <div className="pt-4 text-xs font-medium text-rose-600 group-hover:text-rose-700 flex items-center gap-1">
              Safety parameters <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>

        </section>

      </div>

      {activeModal && bentoDetails[activeModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                {bentoDetails[activeModal].title}
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-slate-600 text-sm cursor-pointer p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed">
              {bentoDetails[activeModal].description}
            </p>

            <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-between text-xs font-medium text-slate-600">
              <span>Architecture Metric:</span>
              <span className="text-teal-600 font-semibold uppercase font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200/40">
                {bentoDetails[activeModal].metric}
              </span>
            </div>

            <button 
              onClick={() => setActiveModal(null)}
              className="w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors active:scale-98 shadow-sm cursor-pointer"
            >
              Got it, thanks
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;