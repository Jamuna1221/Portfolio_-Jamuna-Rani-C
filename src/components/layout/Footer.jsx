import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 border-t border-slate-200/60">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Let's Connect Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Open to opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Jamuna1221" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200/60 shadow-sm hover:shadow-lg hover:scale-110 hover:border-blue-300/60 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 group-hover:text-slate-900 transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jamuna-rani-c-a4033931b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200/60 shadow-sm hover:shadow-lg hover:scale-110 hover:border-blue-400/60 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 group-hover:text-blue-600 transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/RiyaAmmu_24" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200/60 shadow-sm hover:shadow-lg hover:scale-110 hover:border-slate-400/60 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 group-hover:text-slate-900 transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 text-sm font-medium">
                About
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 text-sm font-medium">
                Projects
              </a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 text-sm font-medium">
                Skills
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 text-sm font-medium">
                Contact
              </a>
            </nav>
          </div>

          {/* Get in Touch Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:jamunaranic1221@gmail.com" 
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium group"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                jamunaranic1221@gmail.com
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/40 rounded-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-sm text-slate-700 font-medium">Available for freelance work</p>
              </div>
            </div>
          </div>
        </div>

        
{/* Bottom Section */}
<div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
  <p className="text-sm text-slate-600">
    © {currentYear} <span className="font-semibold text-slate-700">Jamuna Rani C</span>. All rights reserved.
  </p>
  <button 
    onClick={scrollToTop} 
    className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/60 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300" 
    aria-label="Back to top"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700 group-hover:text-blue-700 transition-colors">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
</div>

       
      </div>
    </footer>
  );
};

export default Footer;
