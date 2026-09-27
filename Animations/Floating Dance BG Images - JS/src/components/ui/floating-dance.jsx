import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useCallback,
} from "react";

import { cn } from "../../lib/utils";


/* =========================================================
   Floating Context
========================================================= */

const FloatingContext = createContext(null);


/* =========================================================
   Floating
   Handles mouse-follow / parallax movement
========================================================= */

const Floating = ({
    children,
    sensitivity = 1,
    className = "",
}) => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);

    const registerElement = useCallback((element, depth) => {
        if (!element) return;

        element.dataset.depth = depth;

        if (!elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    }, []);


    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;


        /* -----------------------------------------
           Mouse movement
        ----------------------------------------- */

        const handleMouseMove = (event) => {
            const rect = container.getBoundingClientRect();

            if (!rect.width || !rect.height) return;

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;


            elementsRef.current.forEach((element) => {
                if (!element) return;

                const depth =
                    parseFloat(element.dataset.depth) || 1;

                const moveX =
                    x * depth * sensitivity * 40;

                const moveY =
                    y * depth * sensitivity * 40;


                element.style.setProperty(
                    "--mouse-x",
                    `${moveX}px`
                );

                element.style.setProperty(
                    "--mouse-y",
                    `${moveY}px`
                );
            });
        };


        /* -----------------------------------------
           Mouse leaves floating area
        ----------------------------------------- */

        const handleMouseLeave = () => {
            elementsRef.current.forEach((element) => {
                if (!element) return;

                element.style.setProperty(
                    "--mouse-x",
                    "0px"
                );

                element.style.setProperty(
                    "--mouse-y",
                    "0px"
                );
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


    return (
        <FloatingContext.Provider
            value={{ registerElement }}
        >
            <div
                ref={containerRef}
                className={cn(
                    "relative w-full h-full pointer-events-auto",
                    className
                )}
            >
                {children}
            </div>
        </FloatingContext.Provider>
    );
};


/* =========================================================
   FloatingElement
   Mouse/parallax layer
========================================================= */

const FloatingElement = ({
    children,
    depth = 1,
    className = "",
    style = {},
}) => {
    const { registerElement } =
        useContext(FloatingContext);

    const elementRef = useRef(null);


    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        registerElement(element, depth);

        return () => {
            element.style.setProperty(
                "--mouse-x",
                "0px"
            );

            element.style.setProperty(
                "--mouse-y",
                "0px"
            );
        };
    }, [depth, registerElement]);


    return (
        <div
            ref={elementRef}
            className={cn(
                "absolute pointer-events-none",
                className
            )}
            style={{
                "--mouse-x": "0px",
                "--mouse-y": "0px",

                transform:
                    "translate3d(var(--mouse-x), var(--mouse-y), 0)",

                transition:
                    "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",

                willChange:
                    "transform",

                ...style,
            }}
        >
            {children}
        </div>
    );
};


/* =========================================================
   Swirls
========================================================= */

const Swirls = () => (
    <>
        <svg
            className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-pink-100 dark:text-pink-900/20"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>

        <svg
            className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-pink-100 dark:text-pink-900/20"
            width="700"
            height="700"
            viewBox="0 0 700 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </>
);


/* =========================================================
   FloatingDance
   Continuous organic movement
========================================================= */

const FloatingDance = ({
    children,
    className,
    duration = 6,
    delay = 0,
    distance = 18,
}) => {
    return (
        <div
            className={cn(
                "relative pointer-events-none",
                className
            )}
            style={{
                animation: `floatingDance ${duration}s ease-in-out ${delay}ms infinite`,
                "--dance-distance": `${distance}px`,
                willChange: "transform",
            }}>
            {children}
        </div>
    );
};


/* =========================================================
   FloatingComponent
========================================================= */

export function FloatingComponent({
    title,
    description,
    images = [],
    className = "",
}) {
    return (
        <section
            className={cn(
                "relative w-full min-h-[60vh] lg:min-h-[80vh]",
                "flex items-center justify-center",
                "overflow-hidden",
                "bg-background",
                "py-20 md:py-32",
                className
            )}
        >

            {/* ========================================
          BACKGROUND SWIRLS
      ======================================== */}

            <div className="absolute inset-0 z-0 pointer-events-none">
                <Swirls />
            </div>


            {/* ========================================
          FLOATING + DANCING IMAGES
      ======================================== */}

            <div className="absolute inset-0 z-10 pointer-events-auto">

                <Floating
                    sensitivity={-0.5}
                    className="relative w-full h-full"
                >

                    {images.map((image, index) => (
                        <FloatingElement
                            key={index}
                            depth={image.depth ?? 1}
                            className={image.className}
                        >

                            <FloatingDance
                                duration={image.duration ?? 6}
                                delay={image.delay ?? index * 300}
                                distance={image.distance ?? 18}
                                className={image.className}
                            >
                                <div className="w-full h-full overflow-hidden rounded-xl shadow-2x1">
                                    <img
                                        src={image.src}
                                        alt={image.alt ?? ""}
                                        draggable="false"
                                        className="w-full h-full object-cover select-none"
                                    />
                                </div>
                            </FloatingDance>

                        </FloatingElement>
                    ))}

                </Floating>

            </div>


            {/* ========================================
          OPTIONAL CENTER CONTENT
      ======================================== */}

            {title || description ? (
                <div
                    className="
            relative
            z-20
            container
            mx-auto
            px-4
            text-center
            max-w-2xl
            pointer-events-none
          "
                >

                    {title && (
                        <h1
                            className="
                text-4xl
                font-bold
                tracking-tight
                text-primary
                sm:text-5xl
                md:text-6xl
                text-zinc-800
              "
                        >
                            {title}
                        </h1>
                    )}

                    {description && (
                        <p
                            className="
                mt-6
                text-lg
                leading-8
                text-muted-foreground
                text-zinc-800
              "
                        >
                            {description}
                        </p>
                    )}

                </div>
            ) : null}

        </section>
    );
}


/* =========================================================
   Exports
========================================================= */

export {
    Floating,
    FloatingElement,
    FloatingDance,
    Swirls,
};

export default FloatingComponent;
