"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Tone = "lime" | "ink" | "pale" | "olive";

type Sticker = {
  text: string;
  /** Vertical position relative to the phone's height. */
  top: string;
  variant?: "light" | "dark" | "accent";
};

type Scene = {
  label: string;
  title: string;
  body: string;
  screen: string;
  tone: Tone;
  logan: string;
  stickers: Sticker[];
};

const scenes: Scene[] = [
  {
    label: "LAST & BEST",
    title: "Know the number to beat.",
    body: "Last time and your best sit right beside the set you’re logging. No scrolling back through history.",
    screen: "workout",
    tone: "lime",
    logan: "logan-solid",
    stickers: [
      { text: "Last · 5 × 10", top: "22%", variant: "light" },
      { text: "Best · 15 × 10", top: "38%", variant: "dark" },
    ],
  },
  {
    label: "SMART SEARCH",
    title: "Type it however. We’ll find it.",
    body: "benchpress, bench-press or bench press. 1,100+ exercises and a search that ignores spaces and hyphens.",
    screen: "picker",
    tone: "ink",
    logan: "logan-waiting",
    stickers: [
      { text: "benchpress ✓", top: "16%", variant: "accent" },
      { text: "bench-press ✓", top: "30%", variant: "light" },
      { text: "bench press ✓", top: "48%", variant: "light" },
    ],
  },
  {
    label: "CALENDAR",
    title: "Your month, in colour.",
    body: "Every workout coloured by routine. Skipped leg day? You’ll see it.",
    screen: "history",
    tone: "pale",
    logan: "logan-welcome-back",
    stickers: [
      { text: "● Push", top: "20%", variant: "light" },
      { text: "● Legs", top: "28%", variant: "light" },
      { text: "9 workouts this month", top: "52%", variant: "dark" },
    ],
  },
  {
    label: "LOCK SCREEN",
    title: "Phone stays locked. Sets still get logged.",
    body: "Tick off sets and watch your rest timer from the lock screen. No unlocking with chalky hands.",
    screen: "notification",
    tone: "olive",
    logan: "logan-resting",
    stickers: [
      { text: "Rest 1:09", top: "24%", variant: "accent" },
      { text: "Complete set ✓", top: "42%", variant: "light" },
    ],
  },
  {
    label: "HOW IT FELT",
    title: "Meh, Solid or Crushed it.",
    body: "One tap after each lift. Next time, you’ll know whether 80 kg felt easy or awful.",
    screen: "finish",
    tone: "lime",
    logan: "logan-crushed-it",
    stickers: [
      { text: "😐 Meh", top: "18%", variant: "light" },
      { text: "💪 Solid", top: "26%", variant: "dark" },
      { text: "🔥 Crushed it", top: "46%", variant: "light" },
    ],
  },
  {
    label: "COUNTERS",
    title: "For the push-ups between meetings.",
    body: "Tap +1 whenever. See today, this week and all time.",
    screen: "counter-stats",
    tone: "ink",
    logan: "logan-oops",
    stickers: [
      { text: "+1", top: "22%", variant: "accent" },
      { text: "157 all time", top: "36%", variant: "light" },
    ],
  },
  {
    label: "TIMED SETS",
    title: "Planks deserve a big clock.",
    body: "Holds and carries go full screen. Pause, add ten seconds, done.",
    screen: "timer",
    tone: "pale",
    logan: "logan-waiting",
    stickers: [
      { text: "0:13 left", top: "26%", variant: "dark" },
      { text: "+10s", top: "40%", variant: "accent" },
    ],
  },
  {
    label: "PERSONAL RECORDS",
    title: "PRs announce themselves.",
    body: "Beat your best and Logan tells you mid-workout. No digging through charts later.",
    screen: "workout-pr",
    tone: "olive",
    logan: "logan-pr",
    stickers: [
      { text: "🏆 New PR", top: "18%", variant: "accent" },
      { text: "+15 kg", top: "34%", variant: "light" },
    ],
  },
];

const tones: Record<Tone, { bg: string; text: string; muted: string; label: string; glow: string }> = {
  lime: { bg: "#D4FF3A", text: "#0B0B0C", muted: "rgba(11,11,12,0.68)", label: "#3A5400", glow: "rgba(255,255,255,0.55)" },
  ink: { bg: "#111113", text: "#F4F4F5", muted: "#A1A1AA", label: "#D4FF3A", glow: "rgba(212,255,58,0.22)" },
  pale: { bg: "#EEFFB8", text: "#111113", muted: "#4B5243", label: "#4A6B00", glow: "rgba(212,255,58,0.7)" },
  olive: { bg: "#1F2A06", text: "#F4F4F5", muted: "#B9C29E", label: "#D4FF3A", glow: "rgba(212,255,58,0.25)" },
};

const stickerStyles = {
  light: "bg-white text-[#111113] shadow-[0_12px_30px_rgba(0,0,0,0.14)]",
  dark: "bg-[#111113] text-[#F4F4F5] shadow-[0_12px_30px_rgba(0,0,0,0.25)]",
  accent: "bg-[#D4FF3A] text-[#0B0B0C] ring-2 ring-[#0B0B0C] shadow-[0_12px_30px_rgba(0,0,0,0.18)]",
};

// Vertical scroll distance each scene gets, in viewport heights.
const SCENE_VH = 80;

export function FeatureStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(-rect.top / scrollable, 0), 0.9999) : 0;
      setActive(Math.floor(progress * scenes.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const tone = tones[scenes[active].tone];

  return (
    <section
      ref={sectionRef}
      aria-label="Features"
      className="relative mt-12"
      style={{ height: `calc(${scenes.length * SCENE_VH}svh + 100svh)` }}
    >
      <div
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden transition-colors duration-700 ease-out motion-reduce:transition-none"
        style={{ background: tone.bg, color: tone.text }}
      >
        {/* Glow behind the phone */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(720px,90svh)] w-[min(720px,90svh)] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[background] duration-700 motion-reduce:transition-none"
          style={{ background: `radial-gradient(circle, ${tone.glow} 0%, rgba(0,0,0,0) 65%)` }}
        />

        {/* Scene progress */}
        <div aria-hidden="true" className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 xl:right-8 xl:flex">
          {scenes.map((s, i) => (
            <span
              key={s.label}
              className="block w-1.5 rounded-full transition-all duration-500 motion-reduce:transition-none"
              style={{ height: i === active ? 28 : 8, background: tone.text, opacity: i === active ? 0.9 : 0.25 }}
            />
          ))}
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-[1440px] grid-rows-[auto_1fr] items-center px-4 pb-6 pt-20 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:grid-rows-1 md:gap-10 md:py-0 lg:px-12 xl:px-20 min-[1400px]:px-[120px]">
          {/* Copy: alternates left/right on desktop, sits above the phone on mobile */}
          {scenes.map((s, i) => {
            const right = i % 2 === 1;
            const on = i === active;
            return (
              <div
                key={s.label}
                aria-hidden={!on}
                className={`col-start-1 row-start-1 flex max-w-[460px] flex-col gap-3 text-center transition-all duration-500 ease-out motion-reduce:transition-none max-md:mx-auto md:row-start-1 md:text-left ${
                  right ? "md:col-start-3 md:justify-self-end" : "md:col-start-1"
                } ${on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
              >
                <span className="text-sm font-semibold tracking-[0.1em]" style={{ color: tones[s.tone].label }}>
                  {String(i + 1).padStart(2, "0")} · {s.label}
                </span>
                <h3 className="m-0 text-[34px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[60px]">{s.title}</h3>
                <p className="m-0 text-base leading-normal sm:text-lg" style={{ color: tones[s.tone].muted }}>
                  {s.body}
                </p>
              </div>
            );
          })}

          {/* Pinned phone */}
          <div className="relative row-start-2 mx-auto self-center md:col-start-2 md:row-start-1">
            <div
              className="relative box-border h-[min(460px,50svh)] rounded-[44px] bg-[#111113] p-2 shadow-[0_40px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 md:h-[min(640px,72svh)]"
              style={{ aspectRatio: "306 / 646" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-black">
                {scenes.map((s, i) => (
                  <Image
                    key={s.screen}
                    src={`/images/screens/${s.screen}.png`}
                    alt=""
                    width={780}
                    height={1688}
                    sizes="300px"
                    priority={i < 2}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stickers and Logan sit on the side away from the copy so they never cover it */}
            {scenes.map((s, i) => {
              // `left: calc(100% …)` pushes a sticker out past the right edge, and vice versa.
              const side = i % 2 === 1 ? "right" : "left";
              return s.stickers.map((st, j) => (
                <span
                  key={s.label + st.text}
                  aria-hidden="true"
                  style={{ top: st.top, [side]: `calc(100% - 28px + ${[0, 44, 16][j % 3]}px)` }}
                  className={`absolute z-10 hidden whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-500 ease-out motion-reduce:transition-none sm:block ${
                    stickerStyles[st.variant ?? "light"]
                  } ${i === active ? "translate-y-0 scale-100 opacity-100 delay-150" : "pointer-events-none translate-y-4 scale-90 opacity-0"}`}
                >
                  {st.text}
                </span>
              ));
            })}

            {scenes.map((s, i) => (
              <Image
                key={s.label + s.logan}
                src={`/images/logan/${s.logan}.webp`}
                alt=""
                width={180}
                height={180}
                className={`absolute -bottom-4 z-20 h-[110px] w-[110px] object-contain transition-all duration-500 ease-out motion-reduce:transition-none sm:h-[170px] sm:w-[170px] ${
                  i % 2 === 1 ? "-left-16 sm:-left-28" : "-right-16 sm:-right-28"
                } ${i === active ? "translate-y-0 rotate-0 opacity-100" : "pointer-events-none translate-y-6 -rotate-6 opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
