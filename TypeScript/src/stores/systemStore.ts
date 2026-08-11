import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SystemState, WallpaperType, SystemSettings } from '@/types/os';

interface SystemStore {
  // System State
  systemState: SystemState;
  setSystemState: (state: SystemState) => void;

  // Settings
  settings: SystemSettings;
  updateSettings: (settings: Partial<SystemSettings>) => void;

  // Active App (for menu bar)
  activeAppId: string | null;
  setActiveAppId: (appId: string | null) => void;

  // Time
  currentTime: Date;
  updateTime: () => void;
}

const defaultSettings: SystemSettings = {
  wallpaper: 'mountain',
  accentColor: 'amber',
  soundEnabled: true,
  volume: 0.5,
  developerMode: false,
};

export const useSystemStore = create<SystemStore>()(
  persist(
    (set) => ({
      systemState: 'booting', // Changed to skip boot screen on public demand
      setSystemState: (state) => set({ systemState: state }),

      settings: defaultSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      activeAppId: null,
      setActiveAppId: (appId) => set({ activeAppId: appId }),

      currentTime: new Date(),
      updateTime: () => set({ currentTime: new Date() }),
    }),
    {
      name: 'imagine-os',
      partialize: (state) => ({ settings: state.settings }),
    }
  )
);