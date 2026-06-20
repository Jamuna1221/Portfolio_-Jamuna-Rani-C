//import React from 'react';
import { skillsData } from '../../content/skills.content';

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.programming.map((s) => (
                <span key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Web & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.web.map((s) => (
                <span key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">Tools & Tech</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((s) => (
                <span key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;