import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen p-8 md:p-14 font-sans leading-relaxed">
      <p className="font-mono text-[#b7de4a] mb-1.7 text-[1rem]">!-- about.html - Sidharath --</p>
      <h1 className="font-stretchpro text-[3rem] mb-1.7">About Me</h1>
      <p className="font-mono text-gray-500 mb-8">// who I am · what I do · where I build</p>

      {/* ==================== Bio Section ==================== */}
      <section className="font-mono border border-[#333] p-8 rounded-md mb-8">
        <p className="text-base">
          Yo! I'm <strong className="text-[#22d3ee]">Sidharath</strong>, a Software Engineer who enjoys building practical products across
          <span className="text-[#22d3ee]"> desktop</span>, <span className="text-[#22d3ee]"> web</span>,
          and <span className="text-[#22d3ee]"> mobile platforms</span>.
          I love building systems that are not
          just functional but genuinely <span className="text-[#22d3ee]">intelligent and scalable</span>.
          Currently pursuing an <strong>MCA while expanding into Computer Vision and Game Development,
          </strong> with long-term interest in building intelligent interactive systems.
        </p>
      </section>

      {/* ==================== Focus Section ==================== */}
      <h2 className="text-[#22d3ee] font-sans text-[1.2rem] font-medium tracking-widest mb-4">CURRENT FOCUS</h2>
      <section className="text-[1.2rem] border border-[#333] p-7 rounded-md mb-8">
        <div className="font-mono grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {[
            '🟠 Building scalable end-to-end products.',
            '🔴 Deep interest in Game Dev, PWAs & Hybrid Apps.',
            '🟣 Currently exploring RAG & Vector Databases.',
            '🔵 Talk to me about Native, Games & APIs.',
            '🟡 Making gaming stories non-gaming people actually get.',
            '🟢 Always Learning, Always Shipping.'
          ].map((item, i) => <span key={i}>{item}</span>)}
        </div>
      </section>

      {/* ==================== Education Section ==================== */}
      <section>
        <h2 className="font-sans text-[1.2rem] text-[#22d3ee] font-medium tracking-widest mb-4">EDUCATION</h2>

        <div className="font-mono border border-[#333] px-8 py-4 rounded-lg mb-4">
          <div className="flex justify-between font-bold mb-2">
          <h3 className="text-[#22d3ee]">Masters in Computer Applications</h3>
            <span>2026 – 2028</span>
          </div>
          <p className='text-xs'>IGNOU</p>
        </div>

        <div className="font-mono border border-[#333] px-8 py-4 rounded-lg mb-4">
          <div className="flex justify-between font-bold mb-2">
          <h3 className="text-[#22d3ee]">Bachelor in Computer Applications</h3>
            <span>2021 – 2024</span>
          </div>
          <p className='text-xs'>Panjab University</p>
        </div>
      </section>
    </div>
  );
};

export default About;