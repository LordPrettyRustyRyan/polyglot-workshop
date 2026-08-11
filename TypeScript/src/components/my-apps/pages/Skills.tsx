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
          <SkillBar label="TypeScript" percentage="92%" color="#38bdf8" />
          <SkillBar label="JavaScript" percentage="88%" color="#eab308" />
          <SkillBar label="SQL" percentage="80%" color="#a855f7" />
          <SkillBar label="Java" percentage="72%" color="#f59e0b" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">MOBILE DEVELOPMENT</h2>
          <SkillBar label="Android Studio" percentage="80%" color="#3DDC84" />
          <SkillBar label="React Native" percentage="85%" color="#61DAFB" />
          <SkillBar label="Expo" percentage="82%" color="#4630EB" />
          <SkillBar label="Java" percentage="78%" color="#E76F00" />
          <SkillBar label="ADB" percentage="74%" color="#A4C639" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">BACKEND & APIS</h2>
          <SkillBar label="Node.js" percentage="85%" color="#8CC84B" />
          <SkillBar label="Express.js" percentage="85%" color="#3b82f6" />
          <SkillBar label="FastAPI" percentage="82%" color="#05998B" />
          <SkillBar label="Flask" percentage="76%" color="#44B8D5" />
          <SkillBar label="Uvicorn" percentage="70%" color="#FFD43B" />
          <SkillBar label="Gunicorn" percentage="65%" color="#91231E" />
          <SkillBar label="Pydantic" percentage="80%" color="#E91E63" />
          <SkillBar label="JWT" percentage="84%" color="#FF6F00" />
          <SkillBar label="OAuth" percentage="72%" color="#1A73E8" />
          <SkillBar label="REST API Design" percentage="90%" color="#673AB7" />
        </section>

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">FRONTEND</h2>
          <SkillBar label="React" percentage="92%" color="#61DAFB" />
          <SkillBar label="React Native" percentage="72%" color="#58C4DC" />
          <SkillBar label="Expo" color="#0ff020" percentage="80%" />
          <SkillBar label="Tailwind CSS" percentage="74%" color="#38BDF8" />
          <SkillBar label="Bootstrap" percentage="78%" color="#7952B3" />
          <SkillBar label="Vite" percentage="85%" color="#FF4438" />
          <SkillBar label="React Router" percentage="76%" color="#CA4245" />
          <SkillBar label="Axios" percentage="82%" color="#671DDF" />
          <SkillBar label="Framer Motion" percentage="70%" color="#FF0055" />
          <SkillBar label="Radix UI" percentage="68%" color="#0ff020" />
          <SkillBar label="Lucide" percentage="88%" color="#F59E0B" />
          <SkillBar label="Zod" percentage="75%" color="#3068B7" />
          <SkillBar label="Zustand" percentage="81%" color="#FFB800" />
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

        <section>
          <h2 className="text-[#facc15] text-sm tracking-[0.2em] mb-4 pb-2 border-b">DATABASES</h2>
          <SkillBar label="MongoDB" percentage="82%" color="#4DB33D" />
          <SkillBar label="SQLite" percentage="78%" color="#003B57" />
          <SkillBar label="SQL" percentage="88%" color="#F29111" />
          <SkillBar label="Drizzle ORM" percentage="75%" color="#C5F74F" />
        </section>

      </div>
    </div>
  );
};

export default Skills;