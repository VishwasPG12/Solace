import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckIn = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 'amazing', emoji: '✨', label: 'Radical', color: 'hover:bg-teal-50 hover:border-teal-200 border-slate-100 text-teal-700' },
    { id: 'good', emoji: '☀️', label: 'Good', color: 'hover:bg-emerald-50 hover:border-emerald-200 border-slate-100 text-emerald-700' },
    { id: 'okay', emoji: '🍃', label: 'Okay', color: 'hover:bg-slate-100 hover:border-slate-300 border-slate-100 text-slate-700' },
    { id: 'anxious', emoji: '🌊', label: 'Anxious', color: 'hover:bg-amber-50 hover:border-amber-200 border-slate-100 text-amber-700' },
    { id: 'down', emoji: '🌧️', label: 'Down', color: 'hover:bg-rose-50 hover:border-rose-200 border-slate-100 text-rose-700' },
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
    
    localStorage.setItem('current_mood', moodId);
    localStorage.setItem('mood_timestamp', new Date().toISOString());

    setTimeout(() => {
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem-5rem)] bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-teal-100">
      <div className="w-full max-w-xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800">
            How are you feeling in this exact moment?
          </h1>
          <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            Take a deep breath, tune into yourself, and select the mood that best reflects your current space.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl bg-white border shadow-2xs transition-all duration-200 cursor-pointer group active:scale-95 ${mood.color} ${
                selectedMood === mood.id ? 'scale-95 border-slate-400 bg-slate-50 shadow-inner' : ''
              }`}
            >
              <span className="text-3xl mb-2 transition-transform group-hover:scale-110 duration-200">
                {mood.emoji}
              </span>
              <span className="text-xs font-medium text-slate-600 group-hover:text-current">
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors cursor-pointer underline underline-offset-4"
        >
          Skip check-in &rarr;
        </button>

      </div>
    </div>
  );
};

export default CheckIn;