import React from 'react';
import { achievementsData } from '../../content/achievements.content';

function Achievements() {
  return (
    <section id="achievements" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</h2>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
          {achievementsData.map((item, i) => {
            const url = item.type === "file"
              ? new URL(`../../assets/${item.file}`, import.meta.url).href
              : item.link;
            return (
              <div key={i} className="flex flex-col gap-3 bg-white border border-slate-200/60 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                  </div>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">{item.linkLabel}</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;