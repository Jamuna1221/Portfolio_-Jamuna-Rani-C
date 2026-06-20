//import React from 'react';
import { certificationsData } from '../../content/skills.content';

function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsData.map((cert, i) => {
            const certUrl = new URL(`../../assets/${cert.file}`, import.meta.url).href;
            return (
              <div key={i} className="flex flex-col gap-3 bg-gradient-to-br from-slate-50 to-purple-50/40 border border-slate-200/60 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
                <a href={certUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">View Certificate</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;