import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/60 backdrop-blur-xl shadow-lg border-b border-slate-200/60' 
          : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Icon */}
          <a 
            href="/" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="group relative flex items-center gap-2"
          >
            {/* Logo Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            {/* Logo Text */}
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-slate-800 transition-all duration-300">
              Portfolio
            </span>
            <span className="absolute -bottom-1 left-12 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-[calc(100%-3rem)] transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="ml-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100/80 transition-colors"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/60">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="mx-4 mt-2 px-6 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
