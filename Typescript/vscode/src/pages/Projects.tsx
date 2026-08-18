import React from 'react';
import { motion, type Variants } from "framer-motion";

const projects = [
  {
    title: 'Little Angel Foundation',
    tags: ['FULL STACK', 'NGO', 'SOCIAL IMPACT'],
    desc: 'Official website for my mom\'s NGO, built from scratch. Little Angel Foundation supports underprivileged children through education and care.',
    tech: ['React', 'JavaScript', 'Neon DB', 'Cloudinary'],
    color: '#ec4899',
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Little Angel Foundation',
    tags: ['FULL STACK', 'NGO', 'SOCIAL IMPACT'],
    desc: 'Official website for my mom\'s NGO, built from scratch. Little Angel Foundation supports underprivileged children through education and care.',
    tech: ['React', 'JavaScript', 'Neon DB', 'Cloudinary'],
    color: '#ecb248',
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Little Angel Foundation',
    tags: ['FULL STACK', 'NGO', 'SOCIAL IMPACT'],
    desc: 'Official website for my mom\'s NGO, built from scratch. Little Angel Foundation supports underprivileged children through education and care.',
    tech: ['React', 'JavaScript', 'Neon DB', 'Cloudinary'],
    color: '#487df0',
    repoUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Little Angel Foundation',
    tags: ['FULL STACK', 'NGO', 'SOCIAL IMPACT'],
    desc: 'Official website for my mom\'s NGO, built from scratch. Little Angel Foundation supports underprivileged children through education and care.',
    tech: ['React', 'JavaScript', 'Neon DB', 'Cloudinary'],
    color: '#62e077',
    repoUrl: '#',
    liveUrl: '#'
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
      <p className="font-mono text-[1.1rem] text-[#4ade80] mb-2">// projects.js : things I've built & deployed</p>
      <h1 className="font-stretchpro text-[3.5rem] mb-2">Projects</h1>
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
                    <a href={p.repoUrl} className="border border-[#333] px-3 py-[0.2rem] text-[0.7rem] hover:border-white transition-colors">GitHub ↗</a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} className="border border-[#333] px-3 py-[0.2rem] text-[0.7rem] hover:border-white transition-colors">Live ↗</a>
                  )}
                </div>
              </div>

              <h3 className="font-stretchpro text-xl mb-3 group-hover:text-white transition-colors">{p.title}</h3>
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