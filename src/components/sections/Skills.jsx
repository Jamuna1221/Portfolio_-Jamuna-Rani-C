import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../content/skills.content';

var skillIcons = {
  C: 'https://cdn.simpleicons.org/c/1D4ED8',
  'C++': 'https://cdn.simpleicons.org/cplusplus/1D4ED8',
  Java: 'https://cdn.simpleicons.org/openjdk/7C3AED',
  SQL: 'https://cdn.simpleicons.org/mysql/1D4ED8',
  HTML: 'https://cdn.simpleicons.org/html5/1D4ED8',
  JavaScript: 'https://cdn.simpleicons.org/javascript/7C3AED',
  React: 'https://cdn.simpleicons.org/react/1D4ED8',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/7C3AED',
  'REST APIs': 'https://cdn.simpleicons.org/fastapi/1D4ED8',
  'Java Spring Boot': 'https://cdn.simpleicons.org/springboot/7C3AED',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/1D4ED8',
  'Express.js': 'https://cdn.simpleicons.org/express/7C3AED',
};

var groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

var chipVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] } },
};

function SkillGroup(props) {
  var title = props.title;
  var items = props.items;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-5">{title}</h3>
      <motion.div
        variants={groupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-wrap gap-3"
      >
        {items.map(function (skill, i) {
          var icon = skillIcons[skill];
          return (
            <motion.span
              key={i}
              variants={chipVariants}
              whileHover={{ y: -3, scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-slate-50 to-blue-50/60 border border-slate-200/70 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-blue-300/60 transition-all duration-200"
            >
              {icon && <img src={icon} alt="" className="w-4 h-4 object-contain" />}
              {skill}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-1/4 w-[26rem] h-[26rem] bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[26rem] h-[26rem] bg-purple-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Skills
          </h2>
          <p className="text-slate-500 text-sm">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillGroup title="Languages" items={skillsData.languages} />
          <SkillGroup title="Frontend" items={skillsData.frontend} />
          <SkillGroup title="Backend & Databases" items={skillsData.backend} />
        </div>
      </div>
    </section>
  );
}

export default Skills;