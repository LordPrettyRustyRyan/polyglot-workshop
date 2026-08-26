import type { ReactNode } from "react";
import { TerminalProject, TerminalTable, TerminalTitle } from "./components";

export interface Command {
    name: string;
    description: string;
    output?: ReactNode;
}

export const commands: Command[] = [
    /* ==================== CONTENT ==================== */
    {
        name: "about",
        description: "Display information about me",
        output: (
            <>
                <TerminalTitle>ABOUT</TerminalTitle>
                <p>Software Engineer specializing in Python, React, React Native and FastAPI.</p>
                <p>Passionate about building user-focused software while continuously expanding into AI-powered applications, computer vision, and game development.</p>
                <br />
                <span>I hold a patent in Textual Entailment and have delivered solutions saving 14+ FTE equivalent!</span>
            </>
        )
    },
    {
        name: "skills",
        description: "List technical skills",
        output: (
            <>
                <TerminalTitle>SKILLS</TerminalTitle>
                <TerminalTable
                    headers={["Category", "Technologies"]}
                    rows={[
                        ["Languages", "Python, JavaScript (ES6+)"],
                        ["Frontend", "React, TypeScript, React Native (Expo), HTML5, CSS3, Bootstrap, Tailwind CSS"],
                        ["Backend", "FastAPI, Flask, Express.js, Node.js, REST API Design, JWT Authentication, PHP"],
                        ["Database", "MongoDB, MongoDB Atlas, MySQL, SQLite"],
                        ["DevOps", "Docker, Git, GitHub, Vercel, Render, Cloudinary"]
                    ]}
                />
            </>
        )
    },
    {
        name: "projects",
        description: "Show previous work",
        output: (
            <>
                <TerminalTitle>PROJECTS</TerminalTitle>
                <TerminalProject
                    title="Voyage"
                    stack="React Native • Expo • SQLite • TypeScript"
                    description={
                        <>
                            <p>Local-first mobile journaling application inspired by Discord, & Telegram.</p>
                            <p>Features topic organization, media logging, notes, streaks and offline storage.</p>
                        </>
                    }
                    link=""
                />
                <TerminalProject
                    title="TwinPics"
                    stack="Python • Pillow • Tkinter"
                    description={
                        <>
                            <p>Desktop utility for detecting duplicate images using perceptual hashing.</p>
                            <p>Supports previewing duplicates before deletion.</p>
                        </>
                    }
                    link="https://github.com/LordPrettyRustyRyan/TwinPics"
                />
            </>
        )
    },
    {
        name: "education",
        description: "Display education background",
        output: (
            <>
                <TerminalTitle>EDUCATION</TerminalTitle>
                <p><span className="cyan">MCA</span> — IGNOU (2026–2028)</p>
                <p><span className="cyan">BCA</span> — Panjab University (2021–2024)</p>
            </>
        )
    },
    {
        name: "contact",
        description: "Show contact information",
        output: (
            <>
                <TerminalTitle>CONTACT</TerminalTitle>
                <TerminalTable
                    headers={["Platform", "Value"]}
                    rows={[
                        ["Email", <a href="mailto:ashutosh14486@gmail.com" target="_blank" rel="noopener noreferrer" className="terminal-link">sid.ghai470@gmail.com</a>],
                        ["GitHub", <a href="https://github.com/LordPrettyRustyRyan" target="_blank" rel="noopener noreferrer" className="terminal-link">github.com/LordPrettyRustyRyan</a>],
                        ["LinkedIn", <a href="https://www.linkedin.com/in/sidharath-51a4b13a2/" target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin.com/in/sidharath-51a4b13a2</a>],
                    ]}
                />
            </>
        )
    },

    /* ==================== SYSTEM ==================== */
    {
        name: "whoisthis",
        description: "Display portfolio owner's name",
    },
    {
        name: "clear",
        description: "Clear terminal"
    },
    {
        name: "help",
        description: "Show available commands"
    }
];