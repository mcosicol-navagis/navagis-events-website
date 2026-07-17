"use client";

import { Fragment, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

const QUESTIONS = [
  "Where are my high-intent customers? ",
  "How do I track historical retail trend shifts? ",
  "Where can I improve delivery ETAs? ",
  "How do I automate dispatch decisions? ",
  "Are my routes optimized to cut fuel spend? ",
  "How do we verify assets without sending field crews? ",
  "Are orders synced with actual customer ETA? ",
  "How do I make delivery zones more precise? ",
  "Where should we put our next branch or ATM? ",
  "Can we evaluate property value with historical data? ",
  "How do we better predict market opportunities? ",
  "Can guests explore our property in 3D? ",
  "How do we turn digital discovery into foot traffic? ",
  "Is our Gen-AI hallucinatory or lacking spatial context? ",
  "Can our LLM ground answers in the real world? ",
  "What hidden trends are locked in our data warehouse? ",
  "Are we mispricing premiums by relying on outdated models? ",
  "How do we automate post-disaster property claims? ",
  "Can we isolate the economic costs of congestion? ",
  "Where are hard braking events happening on the road? ",
  "How do we replace high-maintenance roadside hardware? ",
];

const INTERVAL = 4000;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.007 },
  },
  exit: {
    transition: { staggerChildren: 0.006, staggerDirection: -1 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.07, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.03 } },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuestionFlipSection() {
  const [questions, setQuestions] = useState(QUESTIONS);

  useEffect(() => {
    setQuestions(shuffle(QUESTIONS));
  }, []);
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ghostRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Re-measure whenever questions array changes (initial load + after shuffle)
  useEffect(() => {
    if (ghostRefs.current[0]) {
      setContainerWidth(ghostRefs.current[0].offsetWidth);
    }
  }, [questions]);

  // Start cycling only when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % questions.length;
        if (ghostRefs.current[next]) {
          setContainerWidth(ghostRefs.current[next]!.offsetWidth);
        }
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 mb-14">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="bg-[#F0F2F5] rounded-2xl px-8 py-5 shadow-xl border border-gray-200 inline-flex items-center max-w-full overflow-hidden">
          {/* Width-animating container */}
          <motion.span
            animate={{ width: isMobile ? undefined : containerWidth }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: isMobile ? "normal" : "nowrap",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ display: "inline-block" }}
                className="text-xl sm:text-2xl text-center lg:text-left font-bold text-[#1B1B1C]"
              >
                {questions[index]
                  .split(" ")
                  .filter(Boolean)
                  .map((word, wordIdx, words) => (
                    <Fragment key={wordIdx}>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {word.split("").map((char, ci) => (
                          <motion.span
                            key={`${wordIdx}-${ci}`}
                            variants={charVariants}
                            style={{ display: "inline-block" }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </span>
                      {wordIdx < words.length - 1 && " "}
                    </Fragment>
                  ))}
              </motion.span>
            </AnimatePresence>
          </motion.span>

          {/* Hidden ghost spans for width measurement */}
          <span
            aria-hidden="true"
            className="text-xl sm:text-2xl font-bold"
            style={{
              position: "absolute",
              visibility: "hidden",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {questions.map((q, i) => (
              <span
                key={i}
                ref={(el) => {
                  ghostRefs.current[i] = el;
                }}
              >
                {q}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
