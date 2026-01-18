"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";
import "./macbook-scroll.css";

const cx = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
  screenContent,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
  screenContent?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5],
  );
  
  // Base translation for the laptop lid opening
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- POP OUT LOGIC ---
  // 1. Scale: The screen grows significantly after detaching (0.3 scroll point)
  const contentScale = useTransform(scrollYProgress, [0.3, 0.9], [1, 3]); 
  
  // 2. Y-Offset: Additional movement to center the screen as it pops out
  const contentTranslate = useTransform(scrollYProgress, [0.3, 0.9], [0, 500]); 

  // 3. Merge translations: Keep attached initially (translate), then detach (contentTranslate)
  // FIX: Explicitly typed 'any' here to satisfy TypeScript build
  const finalY = useTransform(
    [translate, contentTranslate],
    ([t, c]: any) => t + c
  );

  // 4. Opacity: Fade out near the end so it doesn't block the next section
  const contentOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);

  return (
    <div
      ref={ref}
      className="macbook-scroll-component-container"
    >
      <motion.div
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="macbook-scroll-component-title"
      >
        {title || (
          <span>
            Bitbox 2026
          </span>
        )}
      </motion.div>
      
      {/* Lid */}
      <Lid
        src={src}
        screenContent={screenContent}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        // Pass the new merged transforms
        translate={finalY}
        contentScale={contentScale}
        contentOpacity={contentOpacity}
      />
      
      {/* Base area */}
      <div className="macbook-scroll-component-base">
        {/* above keyboard bar */}
        <div className="macbook-scroll-component-top-bar">
          <div className="macbook-scroll-component-hinge" />
        </div>
        
        <div className="macbook-scroll-component-deck">
          <div className="macbook-scroll-component-side-spacer">
            <SpeakerGrid />
          </div>
          <div className="macbook-scroll-component-keyboard-area">
            <Keypad />
          </div>
          <div className="macbook-scroll-component-side-spacer">
            <SpeakerGrid />
          </div>
        </div>
        
        <Trackpad />
        
        <div className="macbook-scroll-component-chin-gradient" />
        
        {showGradient && (
          <div className="macbook-scroll-component-overlay-gradient"></div>
        )}
        {badge && <div className="macbook-scroll-component-badge">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
  screenContent,
  contentScale,
  contentOpacity,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
  screenContent?: React.ReactNode;
  contentScale?: MotionValue<number>;
  contentOpacity?: MotionValue<number>;
}) => {
  return (
    <div className="macbook-scroll-component-lid-container">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="macbook-scroll-component-lid-frame"
      >
        <div className="macbook-scroll-component-lid-logo-wrapper">
          <span style={{color: 'white'}}>
            <AceternityLogo />
          </span>
        </div>
      </div>
      
      {/* The Screen Component itself now moves, scales, AND fades */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          y: translate,   // Combined Y translation
          scale: contentScale, // Pop-out scale
          opacity: contentOpacity, // FADE OUT LOGIC ADDED HERE
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="macbook-scroll-component-screen"
      >
        <div className="macbook-scroll-component-screen-inner" />
        
        {screenContent ? (
           <div className="absolute inset-0 h-full w-full bg-[#010101] flex items-center justify-center">
              {screenContent}
           </div>
        ) : (
          <img
            src={src as string}
            alt="screen content"
            className="macbook-scroll-component-screen-image"
          />
        )}
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div className="macbook-scroll-component-trackpad"></div>
  );
};

export const Keypad = () => {
  return (
    <div className="macbook-scroll-component-keypad">
      {/* First Row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn
          className="macbook-scroll-component-key-esc"
          childrenClassName="macbook-scroll-component-align-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="macbook-scroll-component-icon-xs" />
          <span className="macbook-scroll-component-span-mt">F12</span>
        </KBtn>
        <KBtn>
          <div className="macbook-scroll-component-touch-id">
            <div className="macbook-scroll-component-touch-id-inner" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn>
          <span className="macbook-scroll-component-span-block">~</span>
          <span className="macbook-scroll-component-span-block macbook-scroll-component-span-mt">`</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">!</span>
          <span className="macbook-scroll-component-span-block">1</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">@</span>
          <span className="macbook-scroll-component-span-block">2</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">#</span>
          <span className="macbook-scroll-component-span-block">3</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">$</span>
          <span className="macbook-scroll-component-span-block">4</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">%</span>
          <span className="macbook-scroll-component-span-block">5</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">^</span>
          <span className="macbook-scroll-component-span-block">6</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">&</span>
          <span className="macbook-scroll-component-span-block">7</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">*</span>
          <span className="macbook-scroll-component-span-block">8</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">(</span>
          <span className="macbook-scroll-component-span-block">9</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">)</span>
          <span className="macbook-scroll-component-span-block">0</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">&mdash;</span>
          <span className="macbook-scroll-component-span-block">_</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">+</span>
          <span className="macbook-scroll-component-span-block"> = </span>
        </KBtn>
        <KBtn
          className="macbook-scroll-component-key-delete"
          childrenClassName="macbook-scroll-component-align-end"
        >
          delete
        </KBtn>
      </div>

      {/* Third row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn
          className="macbook-scroll-component-key-tab"
          childrenClassName="macbook-scroll-component-align-start"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">Q</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">W</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">E</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">R</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">T</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">Y</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">U</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">I</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">O</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">P</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`{`}</span>
          <span className="macbook-scroll-component-span-block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`}`}</span>
          <span className="macbook-scroll-component-span-block">{`]`}</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`|`}</span>
          <span className="macbook-scroll-component-span-block">{`\\`}</span>
        </KBtn>
      </div>

      {/* Fourth Row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn
          className="macbook-scroll-component-key-caps"
          childrenClassName="macbook-scroll-component-align-start"
        >
          caps lock
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">A</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">S</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">D</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">F</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">G</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">H</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">J</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">K</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">L</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`:`}</span>
          <span className="macbook-scroll-component-span-block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`"`}</span>
          <span className="macbook-scroll-component-span-block">{`'`}</span>
        </KBtn>
        <KBtn
          className="macbook-scroll-component-key-return"
          childrenClassName="macbook-scroll-component-align-end"
        >
          return
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn
          className="macbook-scroll-component-key-shift-left"
          childrenClassName="macbook-scroll-component-align-start"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">Z</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">X</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">C</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">V</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">B</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">N</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">M</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`<`}</span>
          <span className="macbook-scroll-component-span-block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`>`}</span>
          <span className="macbook-scroll-component-span-block">{`.`}</span>
        </KBtn>
        <KBtn>
          <span className="macbook-scroll-component-span-block">{`?`}</span>
          <span className="macbook-scroll-component-span-block">{`/`}</span>
        </KBtn>
        <KBtn
          className="macbook-scroll-component-key-shift-right"
          childrenClassName="macbook-scroll-component-align-end"
        >
          shift
        </KBtn>
      </div>

      {/* Sixth Row */}
      <div className="macbook-scroll-component-key-row">
        <KBtn className="" childrenClassName="macbook-scroll-component-flex-spread">
          <div className="macbook-scroll-component-flex-end-pr">
            <span className="macbook-scroll-component-span-block">fn</span>
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <IconWorld className="macbook-scroll-component-icon-xs" />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="macbook-scroll-component-flex-spread">
          <div className="macbook-scroll-component-flex-end-pr">
            <IconChevronUp className="macbook-scroll-component-icon-xs" />
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <span className="macbook-scroll-component-span-block">control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="macbook-scroll-component-flex-spread">
          <div className="macbook-scroll-component-flex-end-pr">
            <OptionKey className="macbook-scroll-component-icon-xs" />
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <span className="macbook-scroll-component-span-block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="macbook-scroll-component-key-command"
          childrenClassName="macbook-scroll-component-flex-spread"
        >
          <div className="macbook-scroll-component-flex-end-pr">
            <IconCommand className="macbook-scroll-component-icon-xs" />
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <span className="macbook-scroll-component-span-block">command</span>
          </div>
        </KBtn>
        <KBtn className="macbook-scroll-component-key-space"></KBtn>
        <KBtn
          className="macbook-scroll-component-key-command"
          childrenClassName="macbook-scroll-component-flex-spread"
        >
          <div className="macbook-scroll-component-flex-start-pl">
            <IconCommand className="macbook-scroll-component-icon-xs" />
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <span className="macbook-scroll-component-span-block">command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="macbook-scroll-component-flex-spread">
          <div className="macbook-scroll-component-flex-start-pl">
            <OptionKey className="macbook-scroll-component-icon-xs" />
          </div>
          <div className="macbook-scroll-component-flex-start-pl">
            <span className="macbook-scroll-component-span-block">option</span>
          </div>
        </KBtn>
        
        <div className="macbook-scroll-component-key-arrows-wrapper">
          <KBtn className="macbook-scroll-component-key-half">
            <IconCaretUpFilled className="macbook-scroll-component-icon-xs" />
          </KBtn>
          <div className="macbook-scroll-component-key-arrow-row">
            <KBtn className="macbook-scroll-component-key-half">
              <IconCaretLeftFilled className="macbook-scroll-component-icon-xs" />
            </KBtn>
            <KBtn className="macbook-scroll-component-key-half">
              <IconCaretDownFilled className="macbook-scroll-component-icon-xs" />
            </KBtn>
            <KBtn className="macbook-scroll-component-key-half">
              <IconCaretRightFilled className="macbook-scroll-component-icon-xs" />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cx(
        "macbook-scroll-component-key-wrapper",
        backlit && "macbook-scroll-component-key-wrapper-backlit",
        className 
      )}
    >
      <div
        className={cx(
          "macbook-scroll-component-key-cap",
          className 
        )}
      >
        <div
          className={cx(
            "macbook-scroll-component-key-content",
            childrenClassName,
            backlit && "macbook-scroll-component-key-content-backlit",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div className="macbook-scroll-component-speaker-grid"></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="macbook-scroll-component-icon-sm"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};