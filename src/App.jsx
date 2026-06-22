//import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { profileData } from './content/profile.content';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import { projectsData } from './content/projects.content';
import { experienceData } from './content/experience.content';
import { certificationsData } from './content/skills.content';
import contactPhoto from './assets/passport (1).jpg';
import resumeFile from './assets/resume.pdf';
import Achievements from './components/sections/Achievements';
//import profileImg from '../assets/profile.jpg';
const expAssets = import.meta.glob('./assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});
var fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
};

var staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: function (i) {
    return {
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    };
  },
};

/* Thin gradient bar across the very top that fills as you scroll the page. */
function ScrollProgress() {
  var { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* Counts up from 0 to `to` once it scrolls into view. */
function Counter(props) {
  var to = props.to;
  var suffix = props.suffix || '';
  var ref = useRef(null);
  var inView = useInView(ref, { once: true, amount: 0.6 });
  var [count, setCount] = useState(0);

  useEffect(function () {
    if (!inView) return;
    var startTime = null;
    var duration = 1100;
    var frame;
    function step(ts) {
      if (startTime === null) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return function () {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatCard(props) {
  var stat = props.stat;
  var i = props.i;
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerItem}
      className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/60 p-6 text-center overflow-hidden shadow-sm"
    >
      <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: stat.accent }} />
      <div className="text-4xl font-extrabold mb-1" style={{ color: stat.accent }}>
        <Counter to={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-xs font-medium text-slate-500 tracking-wide">{stat.label}</div>
    </motion.div>
  );
}

/* Small wrapper that makes its child drift slightly toward the cursor. */
function Magnetic(props) {
  var ref = useRef(null);
  var x = useMotionValue(0);
  var y = useMotionValue(0);
  var springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  var springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  function handleMove(e) {
    var rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {props.children}
    </motion.span>
  );
}

/* Experience list with a connecting line that draws itself in as you scroll. */
function ExperienceTimeline(props) {
  var data = props.data;
  var containerRef = useRef(null);
  var { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] });
  var lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto">
      <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-purple-100 rounded-full" />
      <motion.div
        className="absolute left-0 top-2 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 origin-top rounded-full"
        style={{ scaleY: lineScale, height: 'calc(100% - 1rem)' }}
      />

      <div className="space-y-8">
        {data.map(function (exp, i) {
          var certHref = exp.certUrl
            ? exp.certUrl
            : exp.certFile
            ? expAssets['./assets/' + exp.certFile]
            : null;

          return (
            <motion.div
              key={exp.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerItem}
              className="relative pl-8"
            >
              <span className="absolute left-0 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 ring-4 ring-white z-10"></span>
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/40 border border-slate-200/60 rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                    <p className="text-sm font-medium text-purple-600">{exp.role}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-purple-700 rounded-full whitespace-nowrap">{exp.year}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map(function (pt, pi) {
                    return (
                      <li key={pi} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    );
                  })}
                </ul>

                {certHref && (
                  <div className="mt-5 pt-4 border-t border-purple-100">
                    <a
                      href={certHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                      View Certificate {'\u2197'}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  var stats = [
    { label: 'Projects Built', value: projectsData.length, suffix: '+', accent: '#2563EB' },
    { label: 'Certifications', value: certificationsData.length, suffix: '+', accent: '#059669' },
    { label: 'Internships', value: experienceData.length, suffix: '', accent: '#6D28D9' },
    { label: 'Languages Known', value: profileData.languages.length, suffix: '', accent: '#D97706' },
  ];

  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <Home />

      {/* Stats Strip */}
      <section className="bg-white py-10 sm:py-14 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(function (stat, i) {
              return <StatCard key={stat.label} stat={stat} i={i} />;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-14 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-8"
            >
              <p className="text-lg text-slate-600 leading-relaxed">{profileData.bio}</p>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {profileData.languages.map(function (lang) {
                    return (
                      <span key={lang} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-slate-700">
                        {lang}
                      </span>
                    );
                  })}
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
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Education</h3>
              <div className="space-y-6">
                {profileData.education.map(function (edu, i) {
                  return (
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
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-14 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map(function (project, i) {
              return (
                <motion.div
                  key={project.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerItem}
                  className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-blue-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 h-full shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <span className="absolute top-6 right-8 text-5xl font-extrabold text-slate-50 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative flex items-start justify-between mb-4">
                      <span className="text-4xl">{project.emoji}</span>
                      <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{project.year}</span>
                    </div>
                    <h3 className="relative text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                    <p className="relative text-slate-600 text-sm mb-5 leading-relaxed">{project.description}</p>
                    <ul className="relative space-y-2 mb-6">
                      {project.highlights.map(function (h, hi) {
                        return (
                          <li key={hi} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                            <span>{h}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="relative flex flex-wrap gap-2">
                      {project.tags.map(function (tag) {
                        return (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 font-medium">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-14 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <ExperienceTimeline data={experienceData} />
        </div>
      </section>

      <Skills />
      <Certifications />
      <Achievements />

      {/* Contact Section */}
      <section id="contact" className="bg-white py-14 sm:py-20 lg:py-24 scroll-mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 sm:px-8 text-center"
        >
          <motion.img
            src={contactPhoto}
            alt="Jamuna Rani C"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mx-auto mb-8 ring-4 ring-blue-100 shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            I'm open to internships, full-time roles, and collaborations. Drop me a message!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Magnetic>
              <a href={`mailto:${profileData.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
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
            </Magnetic>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 border border-green-200 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-sm text-green-700 font-medium">Available for opportunities</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
