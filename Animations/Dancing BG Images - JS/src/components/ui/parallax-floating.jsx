import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const FloatingContext = createContext(null);

const Floating = ({
  children,
  sensitivity = 1,
  className = "",
}) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      elementsRef.current.forEach((element) => {
        if (!element) return;

        const depth =
          parseFloat(element.dataset.depth) || 1;

        const moveX = x * depth * sensitivity * 40;
        const moveY = y * depth * sensitivity * 40;

        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    const handleMouseLeave = () => {
      elementsRef.current.forEach((element) => {
        if (!element) return;

        element.style.transform =
          "translate3d(0, 0, 0)";
      });
    };

    container.addEventListener(
      "mousemove",
      handleMouseMove
    );

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [sensitivity]);

  const registerElement = (element, depth) => {
    if (!element) return;

    element.dataset.depth = depth;

    if (!elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  return (
    <FloatingContext.Provider value={{ registerElement }}>
      <div
        ref={containerRef}
        className={`relative ${className}`}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  );
};

const FloatingElement = ({
  children,
  depth = 1,
  className = "",
}) => {
  const { registerElement } =
    useContext(FloatingContext);

  const elementRef = useRef(null);

  useEffect(() => {
    registerElement(elementRef.current, depth);
  }, [depth, registerElement]);

  return (
    <div
      ref={elementRef}
      className={`absolute ${className}`}
      style={{
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export { Floating, FloatingElement };
export default Floating;