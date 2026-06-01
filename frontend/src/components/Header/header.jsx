import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="h-7 w-7 rounded-lg bg-teal-600/10 flex items-center justify-center transition-colors group-hover:bg-teal-600/20">
              <div className="h-3 w-3 rounded-full bg-teal-600 animate-pulse" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-800">
              Solace
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <Link to="/dashboard" className="transition-colors hover:text-slate-900">Dashboard</Link>
            <Link to="/check-in" className="transition-colors hover:text-slate-900">Daily Check-In</Link>
            <Link to="/resources" className="transition-colors hover:text-slate-900">Resources</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className="rounded-xl bg-rose-50 px-4 py-2 text-xs font-semibold tracking-wide text-rose-600 uppercase transition-all hover:bg-rose-100 hover:text-rose-700 active:scale-95 cursor-pointer border border-rose-100/70 shadow-2xs"
            >
              Need Help Now? (SOS)
            </button>
          </div>

        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100/80 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-bold text-slate-900">Emergency Support Lines</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-50"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              If you or someone you know is struggling or in crisis, help is available. You are not alone.
            </p>
            
            <div className="mt-4 space-y-2.5">
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200">
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Vandrevala Foundation (India)</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">91-5298-7821</p>
                </div>
                <a 
                  href="tel:9152987821" 
                  className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 active:scale-95 transition-all shadow-2xs cursor-pointer"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200">
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Kiran Mental Health Helpline</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">1800-599-0019</p>
                </div>
                <a 
                  href="tel:18005990019" 
                  className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 active:scale-95 transition-all shadow-2xs cursor-pointer"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:border-slate-200">
                <div>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">International Suicide Hotlines</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">988 Lifeline</p>
                </div>
                <a 
                  href="tel:988" 
                  className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-700 active:scale-95 transition-all shadow-2xs cursor-pointer"
                >
                  Call
                </a>
              </div>
              
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors active:scale-98 shadow-sm cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;