import { AnimatePresence } from 'framer-motion'; 
import { useWindowStore } from '@/stores/windowStore'; 
import { Window } from '../os/Window'; 
import { FinderApp } from '../apps/FinderApp'; 
import { SettingsApp } from '../apps/SettingsApp'; 
import { NotepadApp } from '../apps/NotepadApp'; 
import { AboutApp } from '../apps/AboutApp'; 
import { MonitorApp } from '../apps/MonitorApp'; 
import { DeveloperSettingsApp } from '../apps/DeveloperSettingsApp'; 
import { MusicPlayerApp } from '../apps/MusicPlayerApp'; 
import { UtilityApp } from "../my-apps/UtilityApp";
import { TerminalApp } from '../my-apps/TerminalApp';
import { IntroApp } from '../my-apps/IntroApp';
import { VideoPlayerApp } from '../my-apps/VideoPlayerApp';
import VSCodeApp from '../my-apps/VSCodeApp';

const appComponents: Record<string, React.ComponentType<{ windowId: string; fileId?: string }>> = {
  // finder: FinderApp,
  // settings: SettingsApp,
  // notepad: NotepadApp,
  about: AboutApp,
  monitor: MonitorApp,
  devsettings: DeveloperSettingsApp,
  music: MusicPlayerApp,
  utility: UtilityApp,
  terminal: TerminalApp,
  intro: IntroApp,
  video: VideoPlayerApp,
  vscode: VSCodeApp
};

export function WindowManager() {
  const windows = useWindowStore((state) => state.windows);

  return (
    <div className="absolute inset-0 pl-16 pt-2">
      <AnimatePresence mode="popLayout">
        {windows.map((windowState) => {
          const AppComponent = appComponents[windowState.appId];

          if (!AppComponent) {
            return (
              <Window key={windowState.id} windowState={windowState}>
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  App not found: {windowState.appId}
                </div>
              </Window>
            );
          }

          return (
            <Window key={windowState.id} windowState={windowState}>
              <AppComponent windowId={windowState.id} fileId={windowState.fileId} />
            </Window>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
