import type { ReactNode } from "react";

/* ==================== COMPONENTS ==================== */
export function TerminalTitle({ children }: { children: ReactNode }) {
    return (
        <>
            <p className="terminal-title">{children}</p>
        </>
    );
}

export function TerminalTable({
    headers,
    rows,
}: {
    headers: string[];
    rows: ReactNode[][];
}) {
    return (
        <table className="terminal-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, i) => (
                            <td key={i}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function TerminalProject({
    title,
    stack,
    description,
    link
}: {
    title: string;
    stack: string;
    description: ReactNode;
    link: string;
}) {
    return (
        <div className="terminal-project">
            <p className="terminal-project-title">
                <span className="green">➜</span> {title}
            </p>

            <p className="terminal-project-stack">
                <span className="cyan">Stack:</span> {stack}
            </p>

            <div className="terminal-project-description">
                {description}
                {link && (
                    <p className="terminal-project-link">
                        <span className="orange">Link:</span>{" "}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-link"
                        >
                            {link}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}