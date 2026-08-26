import "./terminal.css";
import { useState, useEffect, useRef } from "react";
import ascii from "./ascii";
import { commands } from "./commands";

export function TerminalApp() {
    /* ==================== STATE ==================== */
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [history, setHistory] = useState<{
        command: string;
        output: React.ReactNode;
    }[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    /* ==================== EFFECTS ==================== */
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [history]);

    /* ==================== LOGIC ==================== */
    function executeCommand(command: string) {
        command = command.trim().toLowerCase();

        if (!command) return;

        setCommandHistory(prev => [...prev, command]);
        setHistoryIndex(-1);

        if (command === "clear") {
            setHistory([]);
            return;
        }

        if (command === "help") {
            setHistory(prev => [
                ...prev,
                {
                    command,
                    output: (
                        <>
                            <p className="terminal-title">AVAILABLE COMMANDS</p>
                            {commands.map(cmd => (
                                <div key={cmd.name} className="terminal-command-row">
                                    <span>{cmd.name}</span>
                                    <span>{cmd.description}</span>
                                </div>
                            ))}
                        </>
                    )
                }
            ]);
            return;
        }

        if (["hello", "hi", "hey", "yo"].includes(command)) {
            setHistory(prev => [
                ...prev,
                {
                    command,
                    output: (
                        <>
                            <p className="terminal-title">YO</p>
                            <p>Waddup Cuh!</p>
                            Check out my Portfolio
                        </>
                    )
                }
            ]);
            return;
        }

        if (["whoisthis", "who is this", "who are you"].includes(command)) {
            setHistory(prev => [
                ...prev,
                {
                    command,
                    output: (
                        <>
                            <span className="pink">The Most Violent, The Most Diabolical, The Most Dangerous, The Beast Slayer, The Conqueror Of All Conquerors, The GOAT Of All GOATs, The Ultimate Needle Mover, The Head Of The Table, In God Mode Himself...</span>
                            <p>Yours Truly,</p>
                            <span className="white font-bold">Sidharath</span>
                        </>
                    )
                }
            ]);
            return;
        }

        const found = commands.find(cmd => cmd.name === command);
        if (found) {
            setHistory(prev => [...prev, { command, output: found.output }]);
            return;
        }

        setHistory(prev => [
            ...prev,
            {
                command,
                output: (
                    <>
                        <p>Command not found: <span className="unknown-command">{command}</span></p>
                        <p className="unknown-hint">Type <span>'help'</span> to view commands.</p>
                    </>
                )
            }
        ]);
    }

    /* ==================== RENDER ==================== */
    return (
        <main
            // className="terminal-page"
            className="terminal-page h-full w-full"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="terminal-layout">

                {/* Terminal Window */}
                <section className="terminal-window">
                    <pre className="ascii-logo">{ascii}</pre>

                    <div className="boot-info">
                        <p>Welcome to <span>Sidharath's Portfolio Terminal</span> v1.0.0</p>
                        <p>Type <span>'help'</span> to see available commands.</p>
                        <p className="last-login">
                            Last login: {new Date().toLocaleString()} from 127.0.0.1
                        </p>
                    </div>

                    <div className="history">
                        {history.map((item, index) => (
                            <div key={index} className="history-item">
                                <div className="history-command">
                                    <span className="cyan">guest@portfolio</span>
                                    <span className="white">:~</span>$ {item.command}
                                </div>
                                <div className="history-output">{item.output}</div>
                            </div>
                        ))}
                    </div>

                    <div ref={bottomRef} />

                    <div className="prompt">
                        <span className="cyan">guest@portfolio</span>
                        <span className="white">:~</span>$
                        <div className="input-wrapper">
                            <input
                                placeholder=" type a command..."
                                ref={inputRef}
                                autoFocus
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Tab") {
                                        e.preventDefault();
                                        const match = commands.find(c => c.name.startsWith(input.toLowerCase()));
                                        if (match) setInput(match.name);
                                    }
                                    if (e.ctrlKey && e.key.toLowerCase() === "l") {
                                        e.preventDefault();
                                        setHistory([]);
                                        setInput("");
                                        return;
                                    }
                                    if (e.key === "ArrowUp") {
                                        e.preventDefault();
                                        if (commandHistory.length === 0) return;
                                        const nextIndex = historyIndex === -1
                                            ? commandHistory.length - 1
                                            : Math.max(0, historyIndex - 1);
                                        setHistoryIndex(nextIndex);
                                        setInput(commandHistory[nextIndex]);
                                    } else if (e.key === "ArrowDown") {
                                        e.preventDefault();
                                        if (historyIndex === -1) return;
                                        const nextIndex = historyIndex + 1;
                                        if (nextIndex >= commandHistory.length) {
                                            setHistoryIndex(-1);
                                            setInput("");
                                        } else {
                                            setHistoryIndex(nextIndex);
                                            setInput(commandHistory[nextIndex]);
                                        }
                                    } else if (e.key === "Enter") {
                                        executeCommand(input);
                                        setInput("");
                                    }
                                }}
                            />
                            {input.length === 0 && <span className="terminal-cursor" />}
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="command-sidebar">
                    <h2>AVAILABLE COMMANDS</h2>
                    {commands.map((command) => (
                        <div
                            className="command-item"
                            key={command.name}
                            onClick={() => {
                                setInput(command.name);
                                requestAnimationFrame(() => {
                                    executeCommand(command.name);
                                    setInput("");
                                    inputRef.current?.focus();
                                });
                            }}
                        >
                            <span className="green">&gt;</span>
                            <span>{command.name}</span>
                            <span>{command.description}</span>
                        </div>
                    ))}

                    <div className="sidebar-footer">
                        <div>STATUS</div>
                        <div className="status-ready">● READY</div>
                        <div>{commands.length} COMMANDS</div>
                    </div>
                </aside>

            </div>
        </main>
    );
}