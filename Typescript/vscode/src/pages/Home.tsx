import React from 'react';
import {
    FaGithub, FaLinkedin, FaMedium, FaFolder,
    FaCode, FaInstagram, FaEnvelope, FaYoutube
} from 'react-icons/fa';

const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Medium', icon: <FaMedium />, url: 'https://medium.com/@yourusername' },
    { name: 'LeetCode', icon: <FaCode />, url: 'https://leetcode.com/u/yourusername' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:your.email@example.com' },
    { name: 'Youtube', icon: <FaYoutube />, url: 'https://youtube.com/@yourchannel' },
];

const brandColors: Record<string, string> = {
    GitHub: '#ffffff',
    LinkedIn: '#0077b5',
    Medium: '#000000',
    LeetCode: '#ffa116',
    Instagram: '#e1306c',
    Email: '#ea4335',
    Youtube: '#ff0000',
};

const Home: React.FC = () => {
    return (
        <div className="bg-[#111111] text-white min-h-screen p-14 font-sans">
            <header>
                <p className="text-[#4ade80] font-mono text-[1.1rem]">// hello world !! Welcome to my portfolio</p>
                <h1 className="font-stretchpro text-[5rem] leading-none font-black mt-4">
                    Sidharth<br />
                </h1>
                <h2 className="font-disassembler text-[#ec4899] text-[3rem] mb-2"><span className='text-[2rem]'>aka </span>Lord Pretty Rusty Ryan</h2>

                <div className="h-1 w-[47rem] bg-gradient-to-r from-pink-500 to-transparent mb-4" />

                <div className="flex gap-3 mb-8">
                    {[
                        { label: 'Software Engineer', color: 'bg-green-500' },
                        { label: 'Mobile/Desktop/Web Dev', color: 'bg-orange-500' },
                        { label: 'End-to-End Product Dev', color: 'bg-blue-500' },
                    ].map((tag) => (
                        <span key={tag.label} className="flex items-center gap-2 border border-[#636363] px-3 py-1.5 text-xs">
                            <div className={`w-2 h-2 rounded-full ${tag.color}`} />
                            {tag.label}
                        </span>
                    ))}

                    <span className="flex items-center gap-2 border border-[#ec4899] px-3 py-1.5 text-xs">
                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                        Future Game Director
                    </span>
                </div>

                <p className="font-mono bio max-w-2xl text-lg mb-10">
                    I live at the crossroads of <span className="text-[#22d3ee]">full-stack engineering</span>, <span className="text-[#22d3ee]">cross-platform applications</span>
                    , and <span className="text-[#22d3ee]">product design</span>. I build software that <span className="text-[#22d3ee]">solves real problems</span>.
                </p>
            </header>

            <div className="flex gap-4 mb-12">
                <button className="bg-[#2563eb] flex items-center gap-2 text-white px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-[#1d4ed8] hover:scale-105 active:scale-95"><FaFolder size={12} />Projects</button>
                <button className="bg-transparent border border-[#d3d0d0] text-white px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#0f172a] hover:scale-105 active:scale-95">About Me</button>
                <button className="bg-transparent border border-[#d3d0d0] text-white px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#0f172a] hover:scale-105 active:scale-95">Contact</button>
            </div>

            <div className="grid grid-cols-4 border-y border-[#5c5c5c] py-8 mb-8">
                {[
                    { v: '1+', l: 'YEARs' },
                    { v: '10+', l: 'PROJECTS' },
                    { v: '∞', l: 'CURIOSITY' },
                    { v: '↑', l: 'ALWAYS LEARNING' }
                ].map((stat, i) => (
                    <div key={i} className={`text-center ${i !== 3 ? 'border-r border-[#333]' : ''}`}>
                        <h3 className="font-stretchpro text-2xl font-bold">{stat.v}</h3>
                        <p className="text-[#6b7280] text-[0.7rem] mt-1 tracking-[0.2em]">{stat.l}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 text-[#9ca3af] text-sm">
                {socialLinks.map((link) => {
                    const color = brandColors[link.name] || '#636363';
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-[#636363] px-3 py-1.5 text-xs transition-all duration-300 hover:text-white"
                            style={{ ['--hover-color' as any]: color } as React.CSSProperties}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = color}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#636363'}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;