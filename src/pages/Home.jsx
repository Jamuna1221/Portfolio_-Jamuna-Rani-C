import  { useState, useEffect } from 'react';

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'C / C++', icon: '💻' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content - With Blur Background */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative z-10">
            
            {/* Blur backdrop behind content */}
            <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-white/40 backdrop-blur-md rounded-3xl -z-10"></div>
            
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700">Available for opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-slate-800">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-slate-800 bg-clip-text text-transparent">
                  Jamuna Rani C
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                Full-Stack Developer & Designer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building beautiful, functional web applications with modern technologies. 
              Passionate about creating seamless user experiences and solving complex problems 
              through clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 text-base font-semibold text-slate-700 bg-white/80 hover:bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/Jamuna1221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200/60 shadow-sm hover:shadow-lg hover:scale-110 hover:border-blue-300/60 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 group-hover:text-slate-900 transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jamuna-rani-c-a4033931b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/80 border border-slate-200/60 shadow-sm hover:shadow-lg hover:scale-110 hover:border-blue-400/60 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700 group-hover:text-blue-600 transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-sm font-medium text-slate-600 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-slate-200/60 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Clear Image No Frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative z-20">
            <div className="relative">
              {/* Your Image - No Frame, Blends with Background */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[500px]">
                <img 
                  src="/path-to-your-image.jpg" 
                  alt="Jamuna Rani C" 
                  className="w-full h-full object-cover object-center rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</p>
                <p className="text-sm font-medium text-slate-600">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden lg:flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300">
          <p className="text-sm font-medium text-slate-600">Scroll to explore</p>
          <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Home;
