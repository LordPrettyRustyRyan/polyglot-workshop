import React from 'react';
import { motion, type Variants } from "framer-motion";

const projects = [
  {
    title: 'Voyage — Everyday Logger',
    tags: ['ANDROID', 'LOCAL STORAGE', 'SELF HOSTING'],
    desc: 'A privacy-first, local logging platform. allowing secure & structured text & images logging, emphasizing ownership of your own data.',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'ADB', 'Drizzle ORM', 'Zustand'],
    color: '#487df0',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/Voyage',
    // liveUrl: '#'
    appUrl: 'https://github.com/LordPrettyRustyRyan/Voyage/releases'
  },
  {
    title: 'Replica — Duplicate Image Hunter',
    tags: ['DESKTOP TOOL', 'FILE / MEDIA MANAGEMENT'],
    desc: 'A desktop-based Python tool which hunts down duplicate images from a selected folder, and subfolders in it and shows you which one of your images got evil twins.',
    tech: ['Python', 'Pillow', 'CustomTkinter', 'hashlib'],
    color: '#ecb248',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/Replica',
    // liveUrl: '#',
    appUrl: 'https://github.com/LordPrettyRustyRyan/Replica/releases/tag/v1.1.0'
  },
  {
    title: 'Learnics — LMS Classroom',
    tags: ['SAAS', 'PWA', 'CLASSROOM LEARNING'],
    desc: 'Official production-oriented SaaS tool developed for a freelance client to streamline classroom management, assignments, assessments, and digital learning.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'Cloudinary', 'React', 'JavaScript', 'Axios', 'Tailwind CSS', 'Pydantic', 'Uvicorn', 'JWT', 'Gunicorn'],
    color: '#ec4899',
    // repoUrl: '#',
    liveUrl: 'https://lms-roan-one-10.vercel.app/'
  },
  {
    title: 'Nimbus — News Aggregator',
    tags: ['API-DRIVEN', 'COLLEGE PROJECT'],
    desc: 'A Multi-Platform News Aggregator built with Decoupled Architecture. Serving real-time news data across separate client interfaces via a secure API middleware.',
    tech: ['Java', 'React', 'JavaScript', 'Express.js', 'Node.js', 'Android Studio', 'Axios'],
    color: '#62e077',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/Nimbus',
    liveUrl: 'https://nimbus-lake.vercel.app/',
    appUrl: 'https://github.com/LordPrettyRustyRyan/Nimbus/tree/main/android'
  },
  {
    title: 'Kame Kitchen — Web Cookbook',
    tags: ['FULL STACK', 'RECIPES', 'COLLEGE PROJECT'],
    desc: 'Kame Kitchen is a recipe website focused on innovative cooking and structured food content, with clear steps, ingredients, accessories, and nutritional values.',
    tech: ['Java', 'React', 'JavaScript', 'Express.js', 'Node.js', 'Android Studio', 'Axios'],
    color: '#F08000',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/Kame-Kitchen',
    liveUrl: 'https://kamekitchen.vercel.app/'
  },
  {
    title: 'Pacman — Arcade on Web',
    tags: ['WEB', 'ARCADE', 'GAME'],
    desc: 'This HTML Canvas game brings classic arcade vibes to the browser. Dodge ghosts, gobble pellets, and turn the tide with power-ups in this fast, fun, and fully hand-coded experience!',
    tech: ['HTML5', 'Canvas', 'CSS3', 'JavaScript'],
    color: '#CE3BFF',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/pacman',
    // liveUrl: '#'
  },
  {
    title: "Odyssey — Imagine's Travels",
    tags: ['WEB', '2D', 'GAME', 'KAPLAY'],
    desc: 'Odyssey is an infinite runner built with JavaScript and the Kaplay game library. Features fast-paced gameplay, custom controls, and persistent high scores.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Kaplay'],
    color: '#ff2424',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/Sonic',
    // liveUrl: '#'
  },
  {
    title: 'Horizon Drive — Ride Out',
    tags: ['WEB', '3D', 'RACING', 'GAME'],
    desc: 'A retro-inspired arcade racing game where you dodge traffic, speed through winding roads, and race against the clock. With pixel-style graphics, nostalgic sound effects, and fast-paced gameplay.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    color: '#24ffed',
    repoUrl: 'https://github.com/LordPrettyRustyRyan/HorizonDrive',
    // liveUrl: '#'
  },
];

const lineVariants: Variants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const Projects: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen p-8 md:p-14 font-sans">
      <p className="font-mono text-[1rem] text-[#4ade80] mb-2">// projects.js : things I've built & deployed</p>
      <h1 className="font-stretchpro text-[3rem] mb-2">Projects</h1>
      <p className="font-mono text-gray-500 mb-8">const projects = [ ...shipped, ...building ]</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            variants={{
              initial: {},
              hover: {},
            }}
            initial="initial"
            whileHover="hover"
            className="relative overflow-hidden border border-[#333] bg-[#1a1a1a] p-6 flex flex-col justify-between"
          >
            <motion.div
              variants={lineVariants}
              style={{ backgroundColor: p.color }}
              className="absolute left-0 top-0 h-[2px]"
            />

            <div>
              <div className="flex justify-between items-center mb-4">
                {/* Tags with project color */}
                <span style={{ color: p.color }} className="text-[0.7rem] font-bold tracking-widest">
                  {p.tags.join(' • ')}
                </span>

                <div className="flex gap-2">
                  {p.repoUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={p.repoUrl} className="border border-[#333] px-3 py-[0.2rem] text-[0.7rem] hover:border-white transition-colors">GitHub ↗</a>
                  )}
                  {p.liveUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={p.liveUrl} className="border border-[#344799] px-3 py-[0.2rem] text-[0.7rem] hover:border-white transition-colors">Live ↗</a>
                  )}
                  {p.appUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={p.appUrl} className="border border-[#993434] px-3 py-[0.2rem] text-[0.7rem] hover:border-white transition-colors">App ↗</a>
                  )}
                </div>
              </div>

              <h3 className="font-stretchpro text-lg mb-3 group-hover:text-white transition-colors">{p.title}</h3>
              <p className="font-mono text-gray-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="font-mono border border-[#333] px-2 py-1 text-[0.7rem] text-gray-500">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;