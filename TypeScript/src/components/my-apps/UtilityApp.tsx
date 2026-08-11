import { Cpu, Mail, User } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import type { ReactNode } from "react";
import './utility.css'

function Panel({
	title,
	icon,
	children,
}: {
	title: string;
	icon?: ReactNode;
	children: ReactNode;
}) {
	return (
		<section className="group relative overflow-hidden border border-cyan-400/30 bg-[#07151b]/60 backdrop-blur-md transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(0,255,255,.18)]">

			{/* ==================== Top Glow ==================== */}
			<div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-70" />

			{/* ==================== Corner Glow ==================== */}
			<div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-cyan-300/60" />
			<div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-cyan-300/60" />
			<div className="absolute left-0 bottom-0 h-12 w-12 border-l border-b border-cyan-300/60" />
			<div className="absolute right-0 bottom-0 h-12 w-12 border-r border-b border-cyan-300/60" />

			{/* ==================== Panel Content ==================== */}
			<div className="p-6 md:p-8">
				<div className="flex items-center gap-3 border-b border-cyan-400/20 pb-4">
					{icon}
					<h2 className="text-sm uppercase tracking-[0.28em] text-cyan-200" style={{ fontFamily: "Orbitron" }}>
						{title}
					</h2>
				</div>
				<div className="mt-8">{children}</div>
			</div>
		</section>
	);
}

function Badge({ children }: { children: ReactNode }) {
	return (
		<span className="border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(34,211,238,.2)]">
			{children}
		</span>
	);
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
	return (
		<div>
			{/* ==================== Category Title ==================== */}
			<h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-200" style={{ fontFamily: "Orbitron" }}>
				{title}
			</h3>

			{/* ==================== Skill List ==================== */}
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<Badge key={skill}>{skill}</Badge>
				))}
			</div>
		</div>
	);
}

export function UtilityApp() {
	return (
		// <main className="relative min-h-screen overflow-hidden bg-[#020607]">
		<main className="relative h-full w-full overflow-auto bg-[#020607]">
			{/* Background Decor */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute left-1/2 top-0 h-112.5 w-175 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />
				<div className="cyber-bg" />
				<div className="cyber-grid" />
				<div className="scanlines" />
			</div>

			{/* ==================== Header Section ==================== */}
			<div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 pb-4 lg:px-10 lg:py-10">
				<div className="flex items-end justify-between border-b border-cyan-400/20 pb-6">
					<div>
						<p className="text-xs uppercase tracking-[0.45em] text-cyan-500" style={{ fontFamily: "Orbitron" }}>
							SYSTEM // PORTFOLIO
						</p>
						<h1 className="mt-2 text-5xl font-bold tracking-[0.18em] text-cyan-100" style={{ fontFamily: "Orbitron" }}>
							SIDHARATH
						</h1>
						<p className="mt-3 max-w-1xl text-cyan-400">
							SOFTWARE ENGINEER • PYTHON DEVELOPER • FULL STACK DEVELOPER • MOBILE DEVELOPER
						</p>
					</div>

					{/* ==================== Status Indicator ==================== */}
					<div className="hidden text-right md:block">
						<div className="text-xs uppercase tracking-[0.3em] text-cyan-500">STATUS</div>
						<div className="mt-2 flex items-center gap-2 justify-end">
							<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
							<span className="text-cyan-200">ONLINE</span>
						</div>
					</div>
				</div>
			</div>

			{/* ==================== Particle Layer ==================== */}
			{/* <div className="particles"> */}
			<div className="particles pointer-events-none">
				{Array.from({ length: 40 }).map((_, i) => (
					<span
						key={i}
						className="particle"
						style={{
							left: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 12}s`,
							animationDuration: `${12 + Math.random() * 10}s`,
						}}
					/>
				))}
			</div>

			{/* ==================== Content Grid ==================== */}
			<div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-8 pb-12 lg:grid-cols-3 sm:grid-cols-2">
				<div className="space-y-8 lg:col-span-2">
					<Panel title="Biographical Data" icon={<User size={20} className="text-cyan-300" />}>
						<p className="leading-8 text-100/90 justify-center">
							Software Engineer with experience building full-stack web, desktop, and mobile applications using Python and JavaScript.
						</p>
						<p className="leading-8 text-cyan-100/90 justify-center">
							Developed and deployed end-to-end products ranging from SaaS platforms and cross-platform mobile apps to desktop utilities and automation tools.
							Comfortable designing REST APIs, authentication systems, database-driven applications, and production deployments using FastAPI, React, React Native, MongoDB, SQLite, Docker, and cloud platforms.
						</p>
						<p className="leading-8 text-100/90 justify-center">
							Passionate about building user-focused software while continuously expanding into AI-powered applications, computer vision, and game development.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							{["FastAPI", "React Native", "MongoDB", "SQLite", "Cloud"].map(t => <Badge key={t}>{t}</Badge>)}
						</div>
					</Panel>

					<Panel title="Skill Matrix" icon={<Cpu size={20} className="text-cyan-300" />}>
						<div className="my-8 flex flex-wrap gap-4">
							<p>Command in Languages:</p>{["Python", "JavaScript (ES6+)"].map(t => <Badge key={t}>{t}</Badge>)}
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<SkillCategory title="Backend" skills={["FastAPI", "Flask", "Express.js", "Node.js", "REST API Design", "JWT Authentication", "PHP"]} />
							<SkillCategory title="Frontend" skills={["React", "TypeScript", "React Native (Expo)", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]} />
							<SkillCategory title="Python Ecosystem" skills={["BeautifulSoup", "Requests", "Pillow", "OpenCV", "NumPy", "Send2Trash"]} />
							<SkillCategory title="Database" skills={["MySQL", "SQLite", "MongoDB", "MongoDB Atlas"]} />
							<SkillCategory title="DevOps" skills={["Docker", "Vercel", "Render", "Git", "GitHub", "Cloudinary"]} />
							<SkillCategory title="Tools" skills={["VS Code", "Figma", "Android Studio"]} />
						</div>
					</Panel>
				</div>

				<div className="space-y-8">
					<Panel title="Network Access">
						<div className="space-y-4">
							<div className="border border-cyan-700 p-4">
								<div className="text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
									<span><Mail size={20} className="text-cyan-300 mx-0.5" /></span>
									EMAIL PROTOCOL
								</div>
								<a href="mailto:ashutosh14486@gmail.com" className="break-all hover:text-white">
									sid.ghai470@gmail.com
								</a>
							</div>

							<div className="border border-cyan-700 p-4">
								<div className="text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
									<span><FontAwesomeIcon icon={faGithub} className="text-cyan-300 text-[1.2rem]" /></span>
									CODE REPOSITORY
								</div>
								<a href="https://github.com/LordPrettyRustyRyan" className="break-all hover:text-white">
									github/LordPrettyRustyRyan
								</a>
							</div>

							<div className="border border-cyan-700 p-4">
								<div className="text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
									<span><FontAwesomeIcon icon={faLinkedin} className="text-cyan-300 text-[1.2rem]" /></span>
									PROFESSIONAL NETWORK
								</div>
								<a href="https://www.linkedin.com/in/sidharath-51a4b13a2/" className="break-all hover:text-white">
									linkedin/sidharath
								</a>
							</div>
						</div>
					</Panel>

					<Panel title="System Analytics">
						{[
							{ label: "Frontend", percent: "95%" },
							{ label: "Backend", percent: "88%" },
							{ label: "Mobile", percent: "90%" },
						].map((stat) => (
							<div key={stat.label} className="mt-6 first:mt-0">
								<div className="mb-2 flex justify-between text-sm text-cyan-300">
									<span>{stat.label}</span>
									<span>{stat.percent}</span>
								</div>
								<div className="h-2 overflow-hidden rounded bg-cyan-950">
									{/* Dynamic width applied via style */}
									<div
										className="h-full rounded bg-linear-to-r from-cyan-500 via-cyan-300 to-cyan-100 shadow-[0_0_15px_rgba(0,255,255,.6)]"
										style={{ width: stat.percent }}
									/>
								</div>
							</div>
						))}
					</Panel>

					<Panel title="Training Credentials">
						<div className="space-y-5">
							<div className="border-b border-cyan-900 pb-3">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-cyan-400">&gt;</span>
									<h3 className="font-bold text-cyan-300">Masters in Computer Applications (MCA)</h3>
								</div>
								<p className="text-cyan-600 pl-4 text-[0.8rem]">IGNOU, Delhi | 2026 - 2028</p>
							</div>

							<div className="border-b border-cyan-900 pb-3">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-cyan-400">&gt;</span>
									<h3 className="font-bold text-cyan-300">Bachelor in Computer Applications (BCA)</h3>
								</div>
								<p className="text-cyan-600 pl-4 text-[0.8rem]">PGGC-46, PU, CHD | 2021 – 2024</p>
							</div>
						</div>
					</Panel>
				</div>
			</div>
		</main>
	);
}