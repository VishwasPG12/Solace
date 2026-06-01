import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userMood, setUserMood] = useState('Okay');
  const [moodEmoji, setMoodEmoji] = useState('🍃');
  
  const [isGrounding, setIsGrounding] = useState(false);
  const [breathingStep, setBreathingStep] = useState('Ready');
  const [breathPulse, setBreathPulse] = useState(false); 

  useEffect(() => {
    const storedMood = localStorage.getItem('current_mood');
    const moodMap = {
      amazing: { label: 'Radical', emoji: '✨' },
      good: { label: 'Good', emoji: '☀️' },
      okay: { label: 'Okay', emoji: '🍃' },
      anxious: { label: 'Anxious', emoji: '🌊' },
      down: { label: 'Down', emoji: '🌧️' }
    };
    
    if (storedMood && moodMap[storedMood]) {
      setUserMood(moodMap[storedMood].label);
      setMoodEmoji(moodMap[storedMood].emoji);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isGrounding) {
      let stage = 0;
      const steps = [
        { text: 'Inhale Deply...', pulse: true },
        { text: 'Hold Breath...', pulse: true },
        { text: 'Exhale Slowly...', pulse: false },
        { text: 'Hold and Rest...', pulse: false }
      ];

      setBreathingStep(steps[stage].text);
      setBreathPulse(steps[stage].pulse);

      interval = setInterval(() => {
        stage = (stage + 1) % 4;
        setBreathingStep(steps[stage].text);
        setBreathPulse(steps[stage].pulse);
      }, 4000);
    } else {
      setBreathingStep('Ready');
      setBreathPulse(false);
    }

    return () => clearInterval(interval);
  }, [isGrounding]);

  return (
    <div className="w-full bg-slate-50 selection:bg-teal-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in duration-400">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
              Welcome back to your space
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Take things one moment at a time today. Everything you share here stays completely private.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 self-start rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200/60 shadow-2xs">
            <span className="text-xl">{moodEmoji}</span>
            <span>Current Status: <strong className="text-slate-900 font-semibold">{userMood}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 rounded-2xl bg-white p-6 border border-slate-100 shadow-2xs flex flex-col justify-between group hover:border-teal-200 transition-all duration-300">
            <div className="space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-slate-800">AI Wellness Space</h2>
              <p className="text-sm leading-relaxed text-slate-500">
                Open a judgment-free, secure processing session with Solace. Share what is on your mind, explore complex feelings, or simply dump your thoughts to clear your head.
              </p>
            </div>
            <div className="pt-8">
              <button 
                onClick={() => navigate('/chat')}
                className="w-full sm:w-auto rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-98 cursor-pointer shadow-2xs"
              >
                Open Session &rarr;
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-linear-to-b from-indigo-50/40 to-white p-6 border border-slate-100 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Daily Intention</span>
              <p className="text-base font-medium italic text-slate-700 leading-relaxed">
                "You don't have to control your thoughts. You just have to stop letting them control you."
              </p>
            </div>
            <div className="pt-4 text-xs text-slate-400 border-t border-slate-100/60">
              — Dan Millman
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-2xs flex flex-col justify-between md:col-span-1 min-h-[260px] transition-all duration-300 focus-within:border-amber-200">
            <div className="space-y-3 w-full">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  </svg>
                </div>
                {isGrounding && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md animate-pulse">
                    Active Cycle
                  </span>
                )}
              </div>
              
              <h3 className="text-base font-semibold text-slate-800">1-Minute Grounding</h3>
              
              {!isGrounding ? (
                <p className="text-sm leading-relaxed text-slate-500">
                  Feeling overwhelmed? Reset your nervous system with a quick box-breathing cycle to restore instant balance.
                </p>
              ) : (
                <div className="flex flex-col items-center justify-center py-2 space-y-3 animate-in fade-in duration-300">
                  <div className="h-16 w-16 flex items-center justify-center relative">
                    <div className={`rounded-full bg-amber-500/10 border-2 border-amber-500 absolute transition-all duration-[4000ms] ease-in-out ${
                      breathPulse ? 'h-16 w-16 opacity-100' : 'h-6 w-6 opacity-40'
                    }`} />
                    <div className="h-2 w-2 rounded-full bg-amber-600 z-10" />
                  </div>
                  <p className="text-sm font-semibold text-amber-800 tracking-wide transition-all duration-300">
                    {breathingStep}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button 
                onClick={() => setIsGrounding(!isGrounding)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl cursor-pointer transition-all flex items-center gap-1 border shadow-2xs ${
                  isGrounding 
                    ? 'bg-slate-800 border-slate-800 text-white hover:bg-slate-900' 
                    : 'bg-amber-50/60 border-amber-100 text-amber-700 hover:bg-amber-100'
                }`}
              >
                {isGrounding ? 'Stop Exercise' : 'Start Grounding →'}
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-2xs flex flex-col justify-between md:col-span-2">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-800">Need Immediate Human Backing?</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                If AI isn't cutting it and you need real, human support lines right this second, access our emergency resource directory instantly.
              </p>
            </div>
            <div className="pt-4">
              <button 
                onClick={() => navigate('/resources')}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 cursor-pointer underline underline-offset-4 bg-transparent border-none p-0"
              >
                View verified professional networks
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;