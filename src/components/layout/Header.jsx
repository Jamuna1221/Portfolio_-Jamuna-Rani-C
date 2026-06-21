import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'certifications', 'achievements', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleSectionScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      let current = sections[0] ? sections[0].id : 'home';
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= scrollPos) {
          current = sections[i].id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleSectionScroll, { passive: true });
    handleSectionScroll();
    return () => window.removeEventListener('scroll', handleSectionScroll);
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

  const linkClass = (id) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      activeSection === id
        ? 'text-blue-600 bg-blue-50'
        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
    }`;

  const mobileLinkClass = (id) =>
    `px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
      activeSection === id
        ? 'text-blue-600 bg-blue-50'
        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
    }`;

  const contactClass = activeSection === 'contact'
    ? 'bg-gradient-to-r from-blue-700 to-purple-700 shadow-md ring-2 ring-blue-300'
    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg';

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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`ml-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-200 ${contactClass}`}
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={mobileLinkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`mx-4 mt-2 px-6 py-3 text-sm font-semibold text-center text-white rounded-full transition-all duration-200 ${contactClass}`}
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