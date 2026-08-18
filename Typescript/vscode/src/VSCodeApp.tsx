import { useState, useCallback, useEffect, useRef } from 'react';
import { Files, Search, GitBranch, Play, Bell, ChevronDown, ChevronRight, ChevronUp, X, Terminal, AlertCircle, CheckCircle, Code2, Trash2, Download, FilePlus, FolderPlus, FolderOpen, Save, RefreshCw, MoreHorizontal, SplitSquareHorizontal, Mail, Minus, Settings, AlertTriangle, Rocket, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from './pages/Skills';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './vscode.css'

// ==================== TYPES AND INTERFACES ====================
type CoreFileKey = "home" | "about" | "skills" | "projects" | "contact";
type FileKey = CoreFileKey;

export interface ConsoleLog {
    id: string;
    type: 'log' | 'info' | 'warn' | 'error';
    message: string;
    timestamp: Date;
}

export interface Toast {
    id: string;
    type: 'success' | 'error' | 'info';
    message: string;
}

// ==================== CONFIGURATION CONSTANTS ====================
const CORE_FILE_META:
    Record<CoreFileKey, { name: string; color: string; label: string; }
    > = {
    home: { name: "Home.tsx", color: "#61dafb", label: "TX" },
    about: { name: "About.html", color: "#61dafb", label: "H5" },
    skills: { name: "Skills.json", color: "#61dafb", label: "{}" },
    projects: { name: "Projects.py", color: "#61dafb", label: "py" },
    contact: { name: "Contact.jsx", color: "#61dafb", label: "JX" },
};

const EXT_META:
    Record<string, { color: string; label: string; lang: string }
    > = {
    html: { color: '#e34c26', label: '<>', lang: 'html' },
    htm: { color: '#e34c26', label: '<>', lang: 'html' },
    css: { color: '#264de4', label: '#', lang: 'css' },
    scss: { color: '#cd6799', label: '#', lang: 'scss' },
    js: { color: '#f7df1e', label: 'JS', lang: 'javascript' },
    jsx: { color: '#61dafb', label: 'JX', lang: 'javascript' },
    ts: { color: '#3178c6', label: 'TS', lang: 'typescript' },
    tsx: { color: '#3178c6', label: 'TX', lang: 'typescript' },
    json: { color: '#cbcb41', label: '{}', lang: 'json' },
    md: { color: '#519aba', label: 'M↓', lang: 'markdown' },
    txt: { color: '#888888', label: 'T', lang: 'plaintext' },
    py: { color: '#4f58a8', label: 'PY', lang: 'python' }
};

// ==================== HELPER FUNCTIONS ====================
function getExtMeta(name: string) {
    const ext = name.split('.').pop()?.toLowerCase() ?? '';
    return EXT_META[ext] ?? { color: '#888', label: ext.slice(0, 2).toUpperCase() || '?', lang: 'plaintext' };
}

function FileBadge({ name }: { name: string }) {
    const meta = getExtMeta(name);
    return (
        <span
            className="inline-flex items-center justify-center min-w-[16px] h-[16px] px-[3px] rounded-[2px] text-[9px] font-bold text-[#ffffff] font-mono"
            style={{ background: meta.color }}
        >
            {meta.label}
        </span>
    );
}

// ==================== MAIN COMPONENT ====================
function App() {
    const [activeFile, setActiveFile] =
        useState<CoreFileKey | null>("home");

    const [explorerOpen, setExplorerOpen] = useState(true);
    const [folderOpen, setFolderOpen] = useState(true);
    const [bottomPanel, setBottomPanel] = useState<'console' | 'preview' | 'problems' | 'terminal'>('terminal');
    const [activitySection, setActivitySection] = useState<'explorer' | 'search' | 'git' | 'run' | 'extensions'>('explorer');

    // Data State
    const [consoleLogs, setConsoleLogs] =
        useState<ConsoleLog[]>([]);

    const [toasts, setToasts] =
        useState<Toast[]>([]);

    const [openTabs, setOpenTabs] =
        useState<FileKey[]>(['home',]);

    // Panel Resize State
    const [bottomHeight, setBottomHeight] = useState(220);
    const [panelMaximized, setPanelMaximized] = useState(false);
    const [panelMinimized, setPanelMinimized] = useState(true);

    const mainAreaRef = useRef<HTMLDivElement>(null);

    // ==================== UTILITY METHODS ====================
    const showToast = useCallback((message: string, type: Toast['type'] = 'info') => {
        const id = Date.now().toString();
        setToasts(prev => [...prev, { id, type, message }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    }, []);

    const isCoreKey = (k: string): k is CoreFileKey =>
        k in CORE_FILE_META;

    const getFileInfo = (key: FileKey) => {
        if (!isCoreKey(key)) return null;

        const meta = CORE_FILE_META[key];
        return {
            name: meta.name,
            language: getExtMeta(meta.name).lang,
            meta
        };
    };

    const openFile = (key: FileKey) => {
        if (!openTabs.includes(key)) setOpenTabs(prev => [...prev, key]);
        if (isCoreKey(key)) { setActiveFile(key); }
    };

    const closeTab = (e: React.MouseEvent, key: FileKey) => {
        e.stopPropagation();
        const newTabs = openTabs.filter(t => t !== key);
        setOpenTabs(newTabs);
        if (activeFile === key) {
            if (newTabs.length > 0) {
                const last = newTabs[newTabs.length - 1];

                if (last && isCoreKey(last)) {
                    setActiveFile(last);
                }
            } else {
                setActiveFile(null);
            }
        }
    };

    // ==================== PANEL MANAGEMENT ====================
    const startBottomResize = (e: React.MouseEvent) => {
        e.preventDefault();
        if (panelMinimized || panelMaximized) return;
        const startY = e.clientY;
        const startH = bottomHeight;
        const main = mainAreaRef.current;
        const maxH = main ? main.clientHeight - 120 : 600;
        const onMove = (ev: MouseEvent) => {
            const h = Math.min(maxH, Math.max(80, startH - (ev.clientY - startY)));
            setBottomHeight(h);
        };
        const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            document.body.style.cursor = '';
        };
        document.body.style.cursor = 'row-resize';
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };

    const togglePanelMaximize = () => {
        setPanelMinimized(false);
        setPanelMaximized(p => !p);
    };

    const togglePanelMinimize = () => {
        if (panelMinimized) {
            setPanelMinimized(false);
        } else {
            setPanelMaximized(false);
            setPanelMinimized(true);
        }
    };

    const closePanel = () => {
        setPanelMinimized(true);
        setPanelMaximized(false);
    };

    // ==================== CONSOLE LOGIC ====================
    const addConsoleLog = useCallback(
        (type: ConsoleLog["type"], message: string) => {
            setConsoleLogs(prev => [
                ...prev,
                {
                    id: Date.now().toString(),
                    type,
                    message,
                    timestamp: new Date()
                }
            ]);
        },
        []
    );

    const clearConsole = useCallback(() => {
        setConsoleLogs([]);
    }, []);


    const handleClear = useCallback(() => {
        clearConsole();
        showToast('Console Cleared', 'info');
    }, [clearConsole, showToast]);

    // ==================== EFFECTS ====================
    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (e.data.type === 'console') {
                addConsoleLog(e.data.method as ConsoleLog['type'], e.data.args.join(' '));
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [addConsoleLog]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'b') {
                    e.preventDefault();
                    setExplorerOpen(prev => !prev);
                } else if (e.key === '`') {
                    e.preventDefault();
                    togglePanelMinimize();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [panelMinimized]);

    // ==================== RENDER HELPERS ====================
    const currentInfo = activeFile ? getFileInfo(activeFile) : null;
    const currentName = currentInfo?.name ?? "";
    const language = currentInfo?.language ?? "";

    const renderTabName = (key: CoreFileKey) =>
        CORE_FILE_META[key].name;

    const FILE_COMPONENTS: Record<CoreFileKey, React.ComponentType> = {
        home: Home,
        about: About,
        skills: Skills,
        projects: Projects,
        contact: Contact,
    };

    const ActivePage =
        activeFile
            ? FILE_COMPONENTS[activeFile]
            : null;

    // ==================== Bottom panel sizing ====================
    const panelHeightStyle: React.CSSProperties = panelMinimized
        ? { height: 35, minHeight: 35, resize: 'none' }
        : panelMaximized
            ? { flex: 1, height: 'auto', minHeight: 0, maxHeight: 'none', resize: 'none' }
            : { height: bottomHeight, minHeight: 80, resize: 'none' };

    return (
        <div className="flex flex-col h-screen bg-vsc-editor">

            <header className="flex items-center justify-between h-[30px] bg-[var(--vsc-titlebar)] text-[var(--vsc-titlebar-text)] text-[12px] flex-shrink-0 border-b border-[var(--vsc-divider)]">
                <div className="flex items-center h-full">
                    <div className="flex items-center px-[10px]">
                        <img src="/icon.png" alt="Logo" style={{ width: "16px", height: "16px" }} />
                    </div>

                    <nav className="flex items-center h-full">
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">File</button>
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">Edit</button>
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">View</button>
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">Go</button>
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">Run</button>
                        <button onClick={togglePanelMinimize} className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">Terminal</button>
                        <button className="px-[8px] h-full text-[13px] text-[var(--vsc-titlebar-text)] hover:bg-[var(--vsc-menu-hover)]">Help</button>
                    </nav>
                </div>

                <div className="flex-1 flex justify-center">
                    <span className="search-bar-mini flex items-center gap-[6px] px-[14px] py-[3px] min-w-[380px] max-w-[600px] bg-[rgba(0,0,0,0.04)] border border-transparent rounded-[5px] text-[12px] text-[var(--vsc-titlebar-text)] justify-center dark:bg-[rgba(255,255,255,0.05)]">
                        <Search size={12} />
                        sidharath : portfolio / {currentName}
                    </span>
                </div>

                <div className="flex items-center h-full">
                    <button className="icon-btn">
                        <FilePlus size={16} />
                    </button>
                    <button className="icon-btn">
                        <Code2 size={16} />
                    </button>
                    <button className="icon-btn">
                        <RefreshCw size={16} />
                    </button>
                    <button className="icon-btn">
                        <Save size={16} />
                    </button>
                    <button className="icon-btn">
                        <Download size={16} />
                    </button>
                    <button className="icon-btn">
                        <SplitSquareHorizontal size={16} />
                    </button>
                </div>
            </header>

            {/* ==================== Main Layout ==================== */}
            <div className="flex flex-1 min-h-0" ref={mainAreaRef}>

                {/* ==================== Activity Bar ==================== */}
                <aside className="w-[48px] bg-[var(--vsc-activitybar)] flex flex-col justify-between flex-shrink-0">
                    <div className="flex flex-col">
                        {/* Explorer */}
                        <button
                            className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'explorer' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`}
                            title="Explorer"
                            onClick={() => {
                                if (activitySection === "explorer") {
                                    setExplorerOpen(prev => !prev);
                                } else {
                                    setActivitySection("explorer");
                                    setExplorerOpen(true);
                                }
                            }}
                        >
                            <Files size={22} />
                        </button>

                        {/* Search */}
                        <button
                            className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'search' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`}
                            onClick={() => { setActivitySection('search'); setExplorerOpen(false); }}
                            title="Search"
                        >
                            <Search size={22} />
                        </button>

                        {/* Source Control */}
                        <button
                            className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'git' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`}
                            onClick={() => { setActivitySection('git'); setExplorerOpen(false); }}
                            title="Source Control"
                        >
                            <GitBranch size={22} />
                        </button>

                        {/* Run and Debug */}
                        <button
                            className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'run' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`}
                            onClick={() => { setActivitySection('run'); setExplorerOpen(false); }}
                            title="Run and Debug"
                        >
                            <Play size={22} />
                        </button>

                        {/* Extensions */}
                        <button
                            className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'extensions' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`}
                            onClick={() => { setActivitySection('extensions'); setExplorerOpen(false); }}
                            title="Extensions"
                        >
                            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"><FileDown size={22} /></a>
                        </button>
                    </div>

                    <div className="flex flex-col">
                        {/* Footer buttons (GitHub, LinkedIn, Email, Settings) */}
                        <button className="activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)]" onClick={() => window.open('https://github.com/LordPrettyRustyRyan', '_blank')} title="GitHub"><FaGithub size={24} /></button>
                        <button className="activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)]" onClick={() => window.open('https://www.linkedin.com/in/sidharath-51a4b13a2/', '_blank')} title="LinkedIn"><FaLinkedin size={24} /></button>
                        <button className="activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)]" onClick={() => window.location.href = 'mailto:sid.ghai470@gmail.com'} title="Email"><Mail size={22} /></button>
                        <button className={`activity-btn w-[48px] h-[48px] flex items-center justify-center text-[var(--vsc-activitybar-inactive)] relative transition-colors hover:text-[var(--vsc-activitybar-active)] ${activitySection === 'run' ? 'active text-[var(--vsc-activitybar-active)]' : ''}`} onClick={() => { setActivitySection('run'); setExplorerOpen(false); }} title="Settings"><Settings size={22} /></button>
                    </div>
                </aside>

                {/* ==================== Side Bar (Explorer) ==================== */}
                {explorerOpen && (
                    <aside className="w-[240px] bg-[var(--vsc-sidebar)] text-[var(--vsc-sidebar-text)] flex flex-col flex-shrink-0 border-r border-[var(--vsc-divider)]">
                        <div className="flex items-center justify-between px-[16px] py-[10px] pb-[8px] text-[11px] font-bold uppercase tracking-[0.5px] text-[var(--vsc-sidebar-text)]">
                            <span>Explorer</span>
                            <div className="flex gap-[2px]">
                                {/* icon-btn is reused from title bar logic */}
                                <button className="icon-btn w-[22px] h-[22px] inline-flex items-center justify-center text-[var(--vsc-sidebar-text)] rounded-[4px] opacity-[0.85] hover:bg-[rgba(128,128,128,0.2)] hover:opacity-100">
                                    <FilePlus size={14} />
                                </button>
                                <button className="icon-btn w-[22px] h-[22px] inline-flex items-center justify-center text-[var(--vsc-sidebar-text)] rounded-[4px] opacity-[0.85] hover:bg-[rgba(128,128,128,0.2)] hover:opacity-100">
                                    <FolderPlus size={14} />
                                </button>
                                <button className="icon-btn w-[22px] h-[22px] inline-flex items-center justify-center text-[var(--vsc-sidebar-text)] rounded-[4px] opacity-[0.85] hover:bg-[rgba(128,128,128,0.2)] hover:opacity-100">
                                    <FolderOpen size={14} />
                                </button>
                                <button className="icon-btn w-[22px] h-[22px] inline-flex items-center justify-center text-[var(--vsc-sidebar-text)] rounded-[4px] opacity-[0.85] hover:bg-[rgba(128,128,128,0.2)] hover:opacity-100">
                                    <RefreshCw size={14} />
                                </button>
                                <button className="icon-btn w-[22px] h-[22px] inline-flex items-center justify-center text-[var(--vsc-sidebar-text)] rounded-[4px] opacity-[0.85] hover:bg-[rgba(128,128,128,0.2)] hover:opacity-100">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <button
                                className="flex items-center gap-[4px] px-[12px] py-[4px] text-[11px] font-bold uppercase tracking-[0.4px] text-[var(--vsc-sidebar-section)] text-left hover:bg-[var(--vsc-sidebar-hover)]"
                                onClick={() => setFolderOpen(o => !o)}
                            >
                                {folderOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                <span className="flex-1">PORTFOLIO</span>
                            </button>

                            {folderOpen && (
                                <div className="flex flex-col py-[2px]">
                                    {(Object.keys(CORE_FILE_META) as CoreFileKey[]).map(key => (
                                        <button
                                            key={key}
                                            className={`flex items-center gap-[8px] px-[12px] py-[3px] pl-[28px] text-[13px] text-[var(--vsc-sidebar-text)] text-left border-l-[2px] border-transparent hover:bg-[var(--vsc-sidebar-hover)] ${activeFile === key ? 'bg-[var(--vsc-sidebar-active)] text-[var(--vsc-sidebar-active-text)]' : ''}`}
                                            onClick={() => openFile(key)}
                                        >
                                            <FileBadge name={CORE_FILE_META[key].name} />
                                            <span className="flex-1">{CORE_FILE_META[key].name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>
                )}

                {/* ==================== Editor + Panel Group ==================== */}
                <main className="flex-1 flex flex-col min-w-0 bg-[var(--vsc-editor-bg)]">

                    {/* ==================== Tab Bar ==================== */}
                    <div className="flex items-stretch h-[35px] bg-[var(--vsc-tab-border)] border-b border-[var(--vsc-divider)] flex-shrink-0">
                        <div className="flex flex-1 overflow-x-auto no-scrollbar">
                            {openTabs.map(key => (
                                <button
                                    key={key}
                                    className={`flex items-center gap-[8px] px-[10px] pl-[12px] h-full text-[13px] border-r border-[var(--vsc-divider)] relative min-w-[120px] whitespace-nowrap transition-colors
                    ${activeFile === key
                                            ? 'bg-[var(--vsc-tab-active-bg)] text-[var(--vsc-tab-text)]'
                                            : 'bg-[var(--vsc-tab-inactive-bg)] text-[var(--vsc-tab-inactive-text)] hover:text-[var(--vsc-tab-text)]'
                                        }
                    ${activeFile === key ? 'before:content-[\'\'] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-[var(--vsc-tab-active-border)]' : ''}
                `}
                                    onClick={() => setActiveFile(key as CoreFileKey)}
                                >
                                    <FileBadge name={renderTabName(key)} />
                                    <span className="flex-1">{renderTabName(key)}</span>
                                    <span
                                        className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] opacity-[0.6] hover:bg-[rgba(128,128,128,0.3)] hover:opacity-100"
                                        onClick={(e) => closeTab(e, key)}
                                    >
                                        <X size={14} />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ==================== Breadcrumbs ==================== */}
                    <div className="flex items-center gap-[6px] h-[22px] px-[12px] text-[12px] bg-[var(--vsc-breadcrumb-bg)] text-[var(--vsc-breadcrumb-text)] border-b border-[var(--vsc-divider)] flex-shrink-0">
                        {activeFile && (
                            <>
                                <span className="inline-flex items-center gap-[6px]">PORTFOLIO</span>
                                <ChevronRight size={12} />
                                <span className="inline-flex items-center gap-[6px]">
                                    <FileBadge name={currentName} />
                                    {currentName}
                                </span>
                            </>
                        )}
                    </div>

                    {/* ==================== Editor + Preview Area ==================== */}
                    {!panelMaximized && (
                        <div className="flex-1 flex min-h-0 bg-[var(--vsc-editor-bg)]">
                            <div className="flex-[1.2] min-w-0 min-h-0 overflow-y-auto overflow-x-hidden border-r border-[var(--vsc-divider)]">
                                {ActivePage ? (
                                    <ActivePage />
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center gap-[16px] text-[#888]">
                                        <p>Ayo Waddup, Check my Portfolio</p>
                                        <button
                                            className="bg-[#0e639c] text-white border-none px-[18px] py-[8px] cursor-pointer rounded-[4px] hover:bg-[#1177bb]"
                                            onClick={() => openFile("home")}
                                        >
                                            Open Home.tsx
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ==================== Bottom Panel resize handle ==================== */}
                    {!panelMinimized && !panelMaximized && (
                        <div
                            className="h-[4px] cursor-row-resize bg-transparent flex-shrink-0 relative z-[5] transition-colors duration-150 delay-100 hover:bg-[var(--vsc-blue)] active:bg-[var(--vsc-blue)]"
                            onMouseDown={startBottomResize}
                        />
                    )}

                    {/* ==================== Bottom Panel ==================== */}
                    <div
                        className={`flex flex-col bg-[var(--vsc-panel-bg)] border-t border-[var(--vsc-divider)] overflow-hidden flex-shrink-0 relative z-20
                            ${panelMinimized ? 'flex-[0_0_35px]' : ''} 
                            ${panelMaximized ? 'flex-[1_1_auto]' : 'h-[220px] min-h-[35px]'}`}
                        style={panelHeightStyle}
                    >
                        <div className="flex items-center h-[35px] px-[8px] pl-[12px] border-b border-[var(--vsc-panel-border)] gap-[2px]">
                            {/* Panel Tabs */}
                            {['problems', 'console', 'preview', 'terminal'].map((item) => (
                                <button
                                    key={item}
                                    className={`h-full px-[10px] text-[11px] font-bold tracking-[0.5px] relative flex items-center gap-[6px] 
                                        ${bottomPanel === item ? 'text-[var(--vsc-panel-tab-active)]' : 'text-[var(--vsc-panel-tab)] hover:text-[var(--vsc-panel-tab-active)]'}
                                        ${bottomPanel === item ? "after:content-[''] after:absolute after:left-[8px] after:right-[8px] after:bottom-0 after:h-[1px] after:bg-[var(--vsc-panel-tab-active)]" : ''}
                                    `}
                                    onClick={() => { setBottomPanel(item as any); setPanelMinimized(false); }}
                                >
                                    {item.toUpperCase()}
                                    {item === 'problems' && <span className="inline-flex items-center justify-center min-w-[16px] h-[16px] px-[4px] bg-[rgba(128,128,128,0.4)] rounded-[8px] text-[10px] font-semibold">HAI NI</span>}
                                </button>
                            ))}

                            <div className="flex-1" />

                            {/* Action Buttons */}
                            <button className="icon-btn text-[var(--vsc-panel-tab)] hover:text-[var(--vsc-panel-tab-active)]" onClick={handleClear} title="Clear Output"><Trash2 size={14} /></button>
                            <button className="icon-btn text-[var(--vsc-panel-tab)] hover:text-[var(--vsc-panel-tab-active)]" onClick={togglePanelMaximize} title={panelMaximized ? 'Minimize' : 'Maximize'}>
                                {panelMaximized ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                            </button>
                            <button className="icon-btn text-[var(--vsc-panel-tab)] hover:text-[var(--vsc-panel-tab-active)]" onClick={togglePanelMinimize} title={panelMinimized ? 'Restore' : 'Hide'}>
                                <Minus size={14} />
                            </button>
                            <button className="icon-btn text-[var(--vsc-panel-tab)] hover:text-[var(--vsc-panel-tab-active)]" onClick={closePanel} title="Close"><X size={14} /></button>
                        </div>

                        {!panelMinimized && (
                            <div className="flex-1 overflow-y-auto p-[8px_12px] font-mono text-[12px] leading-[1.5] text-[var(--vsc-editor-text)]">
                                {consoleLogs.length === 0 ? (
                                    <div className="flex items-center gap-[6px] text-[var(--vsc-breadcrumb-text)] italic">
                                        <Terminal size={14} />
                                        <span>&gt; Terminal Feature Coming Very Later</span>
                                    </div>
                                ) : (
                                    consoleLogs.map((log) => (
                                        <div key={log.id} className={`flex gap-[8px] p-[2px_0] border-b border-transparent hover:bg-[rgba(128,128,128,0.06)] ${log.type === 'warn' ? 'text-[var(--vsc-warning)]' : log.type === 'error' ? 'text-[var(--vsc-error)]' : ''}`}>
                                            <span className={`flex-shrink-0 w-[14px] text-center opacity-70 
                            ${log.type === 'error' ? 'text-[var(--vsc-error)]' : log.type === 'warn' ? 'text-[var(--vsc-warning)]' : 'text-[var(--vsc-blue)]'}`}
                                            >
                                                {log.type === 'error' ? '✖' : log.type === 'warn' ? '⚠' : '›'}
                                            </span>
                                            <span className="flex-1 break-words whitespace-pre-wrap">{log.message}</span>
                                            <span className="flex-shrink-0 text-[10px] text-[var(--vsc-breadcrumb-text)] opacity-70">{log.timestamp.toLocaleTimeString()}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* ==================== Status Bar ==================== */}
            <footer className="relative z-20 flex items-center justify-between h-[22px] bg-[var(--vsc-statusbar)] text-[var(--vsc-statusbar-text)] text-[12px] p-0 flex-shrink-0">
                <div className="flex items-center h-full">
                    <span onClick={togglePanelMinimize} className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <Terminal size={12} />
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)] bg-[rgba(0,0,0,0.15)] dark:bg-[rgba(0,0,0,0.15)]">
                        <GitBranch size={12} />
                        main
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <RefreshCw size={12} /> 0 ↓ 0 ↑
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <Rocket size={12} /> RC Lv 35 — 1247/1750 XP
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <AlertCircle size={12} /> 0
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <CheckCircle size={12} /> 0
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <AlertTriangle size={12} /> 0
                    </span>
                </div>

                <div className="flex items-center h-full">
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">Ln 1, Col 1</span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">Spaces: 4</span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">UTF-8</span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">LF</span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        {language
                            ? language === "javascript"
                                ? "{ } JavaScript"
                                : language === "typescript"
                                    ? "{ } TypeScript"
                                    : language.toUpperCase()
                            : ""}
                    </span>
                    <span className="inline-flex items-center gap-[4px] px-[8px] h-full cursor-pointer whitespace-nowrap hover:bg-[var(--vsc-statusbar-hover)]">
                        <Bell size={12} />
                    </span>
                </div>
            </footer>

            {/* ==================== Toast Container ==================== */}
            <div className="fixed bottom-[36px] right-[16px] flex flex-col gap-[8px] z-[1000]">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-[10px] p-[10px_14px] bg-[var(--vsc-sidebar)] text-[var(--vsc-sidebar-text)] border border-[var(--vsc-divider)] border-l-[3px] rounded-[2px] text-[12px] cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.25)] animate-toastIn min-w-[240px]
                ${toast.type === 'success' ? 'border-l-[var(--vsc-success)]' : ''}
                ${toast.type === 'error' ? 'border-l-[var(--vsc-error)]' : ''}
                ${toast.type !== 'success' && toast.type !== 'error' ? 'border-l-[var(--vsc-blue)]' : ''}
            `}
                        onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                    >
                        <span className={`${toast.type === 'success' ? 'text-[var(--vsc-success)]' : toast.type === 'error' ? 'text-[var(--vsc-error)]' : 'text-[var(--vsc-blue)]'}`}>
                            {toast.type === 'success' && <CheckCircle size={16} />}
                            {toast.type === 'error' && <AlertCircle size={16} />}
                            {toast.type === 'info' && <Bell size={16} />}
                        </span>
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;