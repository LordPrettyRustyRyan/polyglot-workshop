import React from 'react';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaMedium,
  FaCode, FaYoutube, FaInstagram
} from 'react-icons/fa';

const platforms = [
  { name: 'Email', icon: FaEnvelope, url: 'mailto:aahana.bobade@example.com', color: 'text-red-400', border: 'hover:border-red-400' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: 'text-blue-400', border: 'hover:border-blue-400' },
  { name: 'Github', icon: FaGithub, url: 'https://github.com/yourusername', color: 'text-white', border: 'hover:border-white' },
  { name: 'Medium', icon: FaMedium, url: 'https://medium.com/@yourusername', color: 'text-grey', border: 'hover:border-grey' },
  { name: 'LeetCode', icon: FaCode, url: 'https://leetcode.com/u/yourusername', color: 'text-yellow-500', border: 'hover:border-yellow-500' },
  { name: 'Youtube', icon: FaYoutube, url: 'https://youtube.com/@yourchannel', color: 'text-red-600', border: 'hover:border-red-600' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: 'text-pink-500', border: 'hover:border-pink-500' },
];

const Contact: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen p-8 md:p-14 font-sans">
      <p className="font-mono text-[1.1rem] text-[#4ade80] mb-2">/* contact.css – let's build something */</p>
      <h1 className="font-stretchpro text-[3.5rem] mb-2">Contact</h1>
      <p className="font-mono text-gray-500 mb-12">// open to work, collabs & good conversations</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Social Links */}
        <section>
          <h2 className="text-[#22d3ee] text-sm tracking-[0.2em] mb-8">FIND ME ON</h2>
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block border border-[#333] p-4 mb-2 transition-all duration-300 ${platform.border}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`text-xl transition-colors duration-300 ${platform.color}`} />
                  <div>
                    <span className="font-bold text-xs block transition-colors duration-300 group-hover:text-white">
                      {platform.name.toUpperCase()}
                    </span>
                    <p className="text-sm text-gray-400 mt-0.5 truncate">
                      {platform.url.replace(/^https?:\/\//, '')}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </section>

        {/* Form */}
        <section>
          <h2 className="text-[#22d3ee] text-sm tracking-[0.2em] mb-8">SEND A MESSAGE</h2>
          <form className="flex flex-col gap-4">
            {['YOUR_NAME', 'YOUR_EMAIL', 'SUBJECT'].map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <label className="font-mono text-xs text-gray-500">// {field} *</label>
                <input type="text" placeholder="string" className="bg-transparent border border-[#333] p-3 text-white focus:outline-none focus:border-[#22d3ee]" />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-gray-500">// MESSAGE *</label>
              <textarea placeholder="'''your message'''" className="bg-transparent border border-[#333] p-3 h-32 text-white focus:outline-none focus:border-[#22d3ee]" />
            </div>

            <button type="submit" className="bg-[#0284c7] text-white font-bold p-4 hover:bg-[#0369a1] transition-colors">
              → send_message()
            </button>
          </form>
          {/* <p className="text-xs text-gray-500 mt-4 font-mono">// Powered by Formspree (lands directly in my inbox) :p</p> */}
        </section>
      </div>
    </div>
  );
};

export default Contact;