import React from 'react';
import { motion } from 'framer-motion';

// Reusable SkillBar component
const SkillBar = ({ label, percentage, color }: { label: string; percentage: string; color: string }) => (
  <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 mb-4">
    <span className="font-mono text-sm text-gray-300">{label}</span>

    <div className="h-1 bg-[#333] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: percentage }}
        viewport={{ once: true }} // Animates only once when it enters the viewport
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ backgroundColor: color }}
      />
    </div>

    <span className="text-xs font-bold" style={{ color }}>{percentage}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen p-8 md:p-14 font-sans">
      <p className="font-mono text-[1.1rem] text-[#4ade80] mb-2">// skills.json – tech stack & tools I actually use</p>
      <h1 className="font-stretchpro text-[3.5rem] mb-2">Skills</h1>
      <p className="font-mono text-gray-500 mb-12">{'{ "status": "always_learning", "passion": "immeasurable" }'}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">LANGUAGES</h2>
          <SkillBar label="Python" percentage="86%" color="#ec4899" />
          <SkillBar label="Java" percentage="72%" color="#f59e0b" />
          <SkillBar label="JavaScript" percentage="88%" color="#eab308" />
          <SkillBar label="TypeScript" percentage="92%" color="#38bdf8" />
          <SkillBar label="SQL" percentage="80%" color="#a855f7" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">BACKEND & APIS</h2>
          <SkillBar label="FastAPI" percentage="82%" color="#10b981" />
          <SkillBar label="Flask" percentage="78%" color="#10b981" />
          <SkillBar label="Express.js" percentage="85%" color="#3b82f6" />
          <SkillBar label="Node.js" percentage="98%" color="#f59e0b" />
          <SkillBar label="REST API Design" percentage="80%" color="#a855f7" />
          <SkillBar label="JWT Authentication" percentage="83%" color="#f97316" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">FRONTEND</h2>
          <SkillBar label="React" percentage="92%" color="#48ec6e" />
          <SkillBar label="React Native" percentage="72%" color="#ca0bf5" />
          <SkillBar label="Bootstrap" percentage="78%" color="#e34d4d" />
          <SkillBar label="Tailwind CSS" percentage="74%" color="#38f845" />
          <SkillBar label="Responsive Design" percentage="88%" color="#f7be55" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">DEVOPS</h2>
          <SkillBar label="Docker" percentage="82%" color="#3b82f6" />
          <SkillBar label="Vercel" percentage="78%" color="#f59e0b" />
          <SkillBar label="Render" percentage="85%" color="#76f63b" />
          <SkillBar label="GitHub" percentage="98%" color="#ca0bf5" />
          <SkillBar label="Cloudinary" percentage="80%" color="#ec4899" />
          <SkillBar label="Jupyter" percentage="83%" color="#eab308" />
        </section>
      </div>
    </div>
  );
};

export default Skills;