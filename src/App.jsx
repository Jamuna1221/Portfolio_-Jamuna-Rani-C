//import React from 'react';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { profileData } from './content/profile.content';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import { projectsData } from './content/projects.content';
import { experienceData } from './content/experience.content';
import contactPhoto from './assets/passport (1).jpg';
import resumeFile from './assets/resume.pdf';
import Achievements from './components/sections/Achievements';
//import profileImg from '../assets/profile.jpg';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">{profileData.bio}</p>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {profileData.languages.map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-slate-700">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>📞 {profileData.phone}</li>
                  <li>✉️ <a href={`mailto:${profileData.email}`} className="hover:text-blue-600 transition-colors">{profileData.email}</a></li>
                  <li>📍 {profileData.location}</li>
                  <li>🎓 {profileData.collegeEmail}</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Education</h3>
              <div className="space-y-6">
                {profileData.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-blue-200">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></span>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-800">{edu.degree}</p>
                        <p className="text-sm text-slate-500">{edu.institution}</p>
                        <p className="text-sm font-medium text-blue-600 mt-1">{edu.score}</p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{project.emoji}</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-purple-200">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></span>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50/40 border border-slate-200/60 rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                      <p className="text-sm font-medium text-purple-600">{exp.role}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-purple-700 rounded-full whitespace-nowrap">{exp.year}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
      <Certifications />
       <Achievements />
      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <img
            src={contactPhoto}
            alt="Jamuna Rani C"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mx-auto mb-8 ring-4 ring-blue-100 shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            I'm open to internships, full-time roles, and collaborations. Drop me a message!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={`mailto:${profileData.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
            href={resumeFile}
              download="Jamuna_Rani_C_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 border border-green-200 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-sm text-green-700 font-medium">Available for opportunities</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;