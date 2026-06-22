import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { certificationsData } from '../../content/skills.content';
const certAssets = import.meta.glob('../../assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});
// Each issuer gets its own accent so the grid actually reads as colourful
// instead of every card sharing the same blue/purple.
var issuerMeta = {
  freecodecamp: { logo: 'https://cdn.simpleicons.org/freecodecamp/16803C', accent: '#16803C', soft: '#F0FDF4' },
  eduonix: { initials: 'EX', accent: '#D97706', soft: '#FFFBEB' },
  infosys: { logo: 'https://cdn.simpleicons.org/infosys/2563EB', accent: '#2563EB', soft: '#EFF6FF' },
  nptel: { logo: 'https://cdn.brandfetch.io/id_7zyHL2W/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1781744208280', accent: '#0D9488', soft: '#F0FDFA' },
  snowflake: { logo: 'https://cdn.simpleicons.org/snowflake/0EA5E9', accent: '#0EA5E9', soft: '#F0F9FF' },
  cisco: { logo: 'https://cdn.simpleicons.org/cisco/6D28D9', accent: '#6D28D9', soft: '#F5F3FF' },
  mongodb: { logo: 'https://cdn.simpleicons.org/mongodb/059669', accent: '#059669', soft: '#ECFDF5' },
  default: { initials: 'CT', accent: '#475569', soft: '#F1F5F9' },
};


var cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: function (i) {
    return {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    };
  },
};

function getIssuerMeta(cert) {
  return issuerMeta[cert.issuerKey] || issuerMeta.default;
}

// Coin-style badge: gradient ring (feels like an actual medal/seal) with a
// small verified checkmark, instead of a flat logo square.
function Medallion(props) {
  var meta = props.meta;
  var alt = props.alt;
  var ringStyle = {
    background:
      'conic-gradient(from 180deg, ' +
      meta.accent +
      ', color-mix(in srgb, ' +
      meta.accent +
      ' 30%, white) 50%, ' +
      meta.accent +
      ')',
  };

  return (
    <div className="relative shrink-0">
      <div className="w-14 h-14 rounded-full p-[2.5px] shadow-sm" style={ringStyle}>
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          {meta.logo ? (
            <img src={meta.logo} alt={alt} className="w-7 h-7 object-contain" />
          ) : (
            <span className="text-xs font-bold tracking-wide" style={{ color: meta.accent }}>
              {meta.initials}
            </span>
          )}
        </div>
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-white shadow ring-2 ring-white flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill={meta.accent} />
          <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

function CertCard(props) {
  var cert = props.cert;
  var i = props.i;
  var meta = getIssuerMeta(cert);
  var certUrl = certAssets['../../assets/' + cert.file] || '';
  var ref = useRef(null);
  var isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(cert.file);

  var mouseX = useMotionValue(0.5);
  var mouseY = useMotionValue(0.5);
  var rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 200, damping: 20 });
  var rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 });
  var glowBg = useTransform([mouseX, mouseY], function (latest) {
    var x = latest[0] * 100;
    var y = latest[1] * 100;
    return 'radial-gradient(220px circle at ' + x + '% ' + y + '%, ' + meta.accent + '30, transparent 70%)';
  });

  function handleMouseMove(e) {
    var rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rotateX, rotateY: rotateY, transformStyle: 'preserve-3d', '--accent': meta.accent }}
        className="group relative h-60 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-[0_24px_48px_-20px_var(--accent)] transition-shadow duration-300 overflow-hidden"
      >
        {/* colour-coded top edge so each issuer is identifiable at a glance */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 z-10"
          style={{ background: 'linear-gradient(90deg, ' + meta.accent + ', color-mix(in srgb, ' + meta.accent + ' 45%, white))' }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBg }}
        />

        {/* front face */}
        <div className="absolute inset-0 flex flex-col p-6 pt-7 transition-opacity duration-300 group-hover:opacity-0">
          <div className="flex items-start justify-between gap-3 mb-4">
            <Medallion meta={meta} alt={cert.issuer} />
            <span
              className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{ backgroundColor: meta.soft, color: meta.accent }}
            >
              {cert.issuer}
            </span>
          </div>

          <p className="font-semibold text-slate-800 text-sm leading-snug flex-1">{cert.name}</p>

          <div className="flex items-center gap-2 pt-3 mt-2 border-t border-slate-100">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ backgroundColor: meta.soft, color: meta.accent }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[11px] text-slate-400 font-medium group-hover:text-slate-600 transition-colors">
              View credential
            </span>
          </div>
        </div>

        {/* back face — revealed on hover */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: meta.soft }}
        >
          {isImage ? (
            <img
              src={certUrl}
              alt={cert.name}
              className="max-h-28 w-auto object-contain rounded-lg bg-white p-1"
              style={{ boxShadow: '0 0 0 2px ' + meta.accent }}
            />
          ) : (
            <div className="flex flex-col items-center gap-2" style={{ color: meta.accent }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
                <path d="M14 2v6h6" />
              </svg>
              <span className="text-xs font-medium">PDF Certificate</span>
            </div>
          )}
          <a
            href={certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: meta.accent, outlineColor: meta.accent }}
          >
            View Certificate {'\u2197'}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function getUniqueIssuers(data) {
  var seen = {};
  var result = [];
  data.forEach(function (cert) {
    var key = cert.issuerKey || 'default';
    if (!seen[key]) {
      seen[key] = true;
      var meta = issuerMeta[key] || issuerMeta.default;
      result.push({ key: key, name: cert.issuer, accent: meta.accent });
    }
  });
  return result;
}

function Certifications() {
  var uniqueIssuers = getUniqueIssuers(certificationsData);

  return (
    <section id="certifications" className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-14 sm:py-20 lg:py-24 overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-purple-100/40 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>

          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">{certificationsData.length}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5 tracking-wide">Certifications</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">{uniqueIssuers.length}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5 tracking-wide">Issuing Platforms</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {uniqueIssuers.map(function (issuer) {
              return (
                <span key={issuer.key} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: issuer.accent }} />
                  {issuer.name}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map(function (cert, i) {
            return <CertCard key={i} cert={cert} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
