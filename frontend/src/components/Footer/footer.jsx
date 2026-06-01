import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 bg-white py-6 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
          
          <div className="space-y-1 max-w-xl">
            <p className="text-[11px] leading-relaxed tracking-wide text-slate-400">
              <strong className="text-slate-500 font-medium">Important Disclaimer:</strong> Solace is an AI-powered wellness companion built for emotional support and reflection. It does not provide clinical diagnoses, medical treatment, or crisis intervention. If you are experiencing a mental health emergency, please use the absolute safety shortcuts or contact emergency services immediately.
            </p>
            <p className="text-xs text-slate-400 pt-1">
              &copy; {currentYear} Solace. Built with care.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#privacy" className="transition-colors hover:text-slate-600">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-slate-600">
              Terms of Service
            </a>
            <a href="#support" className="transition-colors hover:text-slate-600">
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;