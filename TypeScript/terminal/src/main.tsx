import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TerminalApp } from './TerminalApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TerminalApp />
  </StrictMode>,
)
