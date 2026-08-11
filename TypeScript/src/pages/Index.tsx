import { AnimatePresence } from 'framer-motion';
import { useSystemStore } from '@/stores/systemStore';
import { BootScreen } from '@/components/os/BootScreen';
import { Desktop } from '@/components/os/Desktop';

const Index = () => {
  const systemState = useSystemStore((state) => state.systemState);

  // const UI_SCALE = 0.9;

  return (
    <div className="h-screen w-screen overflow-hidden bg-terminal-bg">
      {/* <div
      className="origin-top-left"
        style={{
          transform: `scale(${UI_SCALE})`,
          width: `${100 / UI_SCALE}%`,
          height: `${100 / UI_SCALE}%`,
        }}
      > */}
        <AnimatePresence mode="wait">
          {systemState === 'booting' && <BootScreen key="boot" />}
          {systemState === 'desktop' && <Desktop key="desktop" />}
        </AnimatePresence>
      </div>
    // </div>
  );
};

export default Index;
