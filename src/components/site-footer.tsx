import Link from "next/link";
import type { ReactNode } from "react";
import {
  CONTACT_URL,
  FEATURE_REQUEST_URL,
  FEEDBACK_URL,
  INSTAGRAM_URL,
  StoreButtons,
  TIKTOK_URL,
} from "@/components/landing";

// Two-tone line art, like a printed menu: ink lines, ink fills, and "paper" fills (the lime
// background) that hide whatever an item overlaps.
const INK = "#111113";
const PAPER = "#D4FF3A";
const line = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Item({ x, y, r = 0, s = 1, children }: { x: number; y: number; r?: number; s?: number; children: ReactNode }) {
  return <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>{children}</g>;
}

function Dumbbell() {
  return (
    <g {...line}>
      <path d="M-62 -7 H62 M-62 7 H62" />
      <path d="M-40 -7 v14 M-28 -7 v14 M-16 -7 v14 M16 -7 v14 M28 -7 v14 M40 -7 v14" strokeWidth={2} />
      {[-1, 1].map((d) => (
        <g key={d} transform={`scale(${d} 1)`}>
          <rect x={62} y={-14} width={10} height={28} rx={3} fill={PAPER} />
          <rect x={72} y={-56} width={30} height={112} rx={10} fill={INK} />
          <rect x={102} y={-42} width={24} height={84} rx={8} fill={PAPER} />
        </g>
      ))}
    </g>
  );
}

function Kettlebell() {
  return (
    <g {...line}>
      <path d="M-46 -30 C-60 -128 60 -128 46 -30" fill="none" strokeWidth={22} stroke={INK} />
      <path d="M-46 -30 C-60 -128 60 -128 46 -30" fill="none" strokeWidth={14} stroke={PAPER} />
      <path d="M-66 -24 C-112 18 -98 104 -62 112 H62 C98 104 112 18 66 -24 C34 -48 -34 -48 -66 -24 Z" fill={INK} />
      <path d="M-62 0 C-74 20 -74 44 -66 62" stroke={PAPER} strokeWidth={4} fill="none" />
      <text
        x={6}
        y={58}
        textAnchor="middle"
        fill={PAPER}
        stroke="none"
        className="font-sans"
        fontSize={42}
        fontWeight={800}
      >
        16
      </text>
    </g>
  );
}

function ProteinTub() {
  return (
    <g {...line}>
      <path d="M-78 -74 L-72 100 Q-72 112 -60 112 H60 Q72 112 72 100 L78 -74 Z" fill={PAPER} />
      <rect x={-86} y={-108} width={172} height={34} rx={8} fill={PAPER} />
      <path d="M-62 -108 v34 M-38 -108 v34 M-14 -108 v34 M10 -108 v34 M34 -108 v34 M58 -108 v34" strokeWidth={2} />
      <rect x={-76} y={-34} width={152} height={86} fill={INK} />
      <text
        x={0}
        y={12}
        textAnchor="middle"
        fill={PAPER}
        stroke="none"
        className="font-sans"
        fontSize={40}
        fontWeight={800}
        letterSpacing={2}
      >
        WHEY
      </text>
      <text x={0} y={38} textAnchor="middle" fill={PAPER} stroke="none" className="font-mono" fontSize={14}>
        CHOCOLATE · 2KG
      </text>
      <path d="M-56 70 h30 M-56 86 h50" strokeWidth={2} />
    </g>
  );
}

function Shaker() {
  return (
    <g {...line}>
      <path d="M48 -122 C86 -124 88 -84 46 -88" fill="none" strokeWidth={5} />
      <path d="M-46 -100 L-40 112 Q-40 122 -30 122 H30 Q40 122 40 112 L46 -100 Z" fill={PAPER} />
      <path d="M-44 6 L-40 112 Q-40 122 -30 122 H30 Q40 122 40 112 L44 6 C20 14 -20 -2 -44 6 Z" fill={INK} />
      <path d="M-46 -76 h14 M-46 -52 h10 M-46 -28 h14" strokeWidth={2} />
      <path d="M-52 -132 H52 L48 -100 H-48 Z" fill={INK} />
      <path d="M-14 -156 H14 L18 -132 H-18 Z" fill={PAPER} />
    </g>
  );
}

function Plate() {
  return (
    <g {...line}>
      <circle r={96} fill={INK} />
      <circle r={70} fill={PAPER} />
      <path d="M-34 -36 A50 50 0 0 1 34 -36 M-34 36 A50 50 0 0 0 34 36" fill="none" strokeWidth={10} />
      <circle r={22} fill={INK} />
      <circle r={9} fill={PAPER} />
      <text
        x={-48}
        y={6}
        textAnchor="middle"
        fill={INK}
        stroke="none"
        className="font-sans"
        fontSize={18}
        fontWeight={800}
      >
        20
      </text>
      <text
        x={48}
        y={6}
        textAnchor="middle"
        fill={INK}
        stroke="none"
        className="font-sans"
        fontSize={18}
        fontWeight={800}
      >
        KG
      </text>
    </g>
  );
}

function WaterBottle() {
  return (
    <g {...line}>
      <rect x={-20} y={-122} width={40} height={26} rx={6} fill={INK} />
      <path
        d="M-24 -96 H24 L30 -78 C40 -70 40 -60 40 -50 V104 Q40 116 28 116 H-28 Q-40 116 -40 104 V-50 C-40 -60 -40 -70 -30 -78 Z"
        fill={PAPER}
      />
      <path d="M-40 20 C-20 10 20 30 40 20 V104 Q40 116 28 116 H-28 Q-40 116 -40 104 Z" fill={INK} />
      <path d="M-26 -40 V-4" stroke={INK} strokeWidth={4} />
    </g>
  );
}

function JumpRope() {
  return (
    <g {...line}>
      <path
        d="M-120 -40 C-150 60 -40 120 20 70 C80 20 30 -50 -20 -10 C-70 30 40 110 130 40 C170 10 160 -40 130 -60"
        fill="none"
        strokeWidth={4}
      />
      <rect x={-136} y={-118} width={30} height={84} rx={15} fill={INK} transform="rotate(-12 -121 -76)" />
      <rect x={118} y={-138} width={30} height={84} rx={15} fill={PAPER} transform="rotate(16 133 -96)" />
    </g>
  );
}

function Eggs() {
  const egg = "M0 -34 C20 -34 28 -4 28 10 C28 28 15 36 0 36 C-15 36 -28 28 -28 10 C-28 -4 -20 -34 0 -34 Z";
  return (
    <g {...line}>
      <path d={egg} fill={PAPER} transform="translate(-78 -18) rotate(-18)" />
      <path d={egg} fill={PAPER} transform="translate(-46 22) rotate(14)" />
      <path
        d="M-30 -10 C-40 -50 20 -60 50 -46 C90 -50 104 -10 90 14 C100 46 50 58 24 48 C-10 60 -44 30 -30 -10 Z"
        fill={PAPER}
      />
      <circle cx={32} cy={0} r={20} fill={INK} />
      <path d="M24 -8 a10 10 0 0 1 10 -6" stroke={PAPER} fill="none" />
    </g>
  );
}

function Headphones() {
  return (
    <g {...line}>
      <path d="M-74 20 C-80 -96 80 -96 74 20" fill="none" strokeWidth={10} />
      <path d="M-74 20 C-80 -96 80 -96 74 20" fill="none" stroke={PAPER} strokeWidth={4} />
      <rect x={-92} y={-2} width={34} height={64} rx={14} fill={INK} />
      <rect x={58} y={-2} width={34} height={64} rx={14} fill={INK} />
    </g>
  );
}

function Banana() {
  return (
    <g {...line}>
      <path d="M-100 -30 C-70 50 70 70 110 -10 C70 30 -50 26 -86 -40 Z" fill={PAPER} />
      <path d="M-70 -10 C-30 30 40 36 80 8" fill="none" strokeWidth={2} />
      <path d="M-100 -30 L-92 -52 L-84 -44 L-86 -40" fill={INK} />
      <path d="M106 -14 l10 4 -6 6 Z" fill={INK} />
    </g>
  );
}

function Creatine() {
  return (
    <g {...line}>
      <path d="M-56 -50 L-52 70 Q-52 80 -42 80 H42 Q52 80 52 70 L56 -50 Z" fill={PAPER} />
      <rect x={-60} y={-76} width={120} height={26} rx={6} fill={INK} />
      <rect x={-46} y={-30} width={92} height={60} rx={4} fill="none" strokeWidth={2} />
      <text
        x={0}
        y={-2}
        textAnchor="middle"
        fill={INK}
        stroke="none"
        className="font-sans"
        fontSize={17}
        fontWeight={800}
      >
        CREATINE
      </text>
      <text x={0} y={18} textAnchor="middle" fill={INK} stroke="none" className="font-mono" fontSize={9}>
        MONOHYDRATE
      </text>
      <path d="M-36 50 h28 M-36 62 h44" strokeWidth={2} />
    </g>
  );
}

function PreWorkout() {
  return (
    <g {...line}>
      <rect x={-30} y={-92} width={60} height={14} rx={5} fill={PAPER} />
      <rect x={-36} y={-80} width={72} height={162} rx={10} fill={INK} />
      <path d="M8 -58 L-16 4 H0 L-10 52 L18 -12 H2 Z" fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <text
        x={0}
        y={72}
        textAnchor="middle"
        fill={PAPER}
        stroke="none"
        className="font-sans"
        fontSize={15}
        fontWeight={800}
        letterSpacing={1}
      >
        PRE
      </text>
    </g>
  );
}

function Capsule({ r }: { r: number }) {
  return (
    <g {...line} transform={`rotate(${r})`}>
      <rect x={-26} y={-12} width={52} height={24} rx={12} fill={PAPER} />
      <path d="M0 -12 H-14 A12 12 0 0 0 -14 12 H0 Z" fill={INK} />
    </g>
  );
}

function PrBurst() {
  const pts = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const d = i % 2 ? 40 : 58;
    return `${(Math.cos(a) * d).toFixed(1)},${(Math.sin(a) * d).toFixed(1)}`;
  }).join(" ");
  return (
    <g {...line}>
      <polygon points={pts} fill={INK} />
      <text
        x={0}
        y={10}
        textAnchor="middle"
        fill={PAPER}
        stroke="none"
        className="font-sans"
        fontSize={28}
        fontWeight={800}
      >
        PR!
      </text>
    </g>
  );
}

const sets = [
  { n: 1, w: "80 kg", r: "× 8", done: true },
  { n: 2, w: "82.5 kg", r: "× 8", done: true },
  { n: 3, w: "82.5 kg", r: "× 7", done: false },
];

/** The phone in the middle of the footer, mid-workout. Its bottom runs off the page. */
function WorkoutPhone() {
  return (
    <g {...line}>
      <rect x={0} y={0} width={300} height={600} rx={46} fill={INK} />
      <rect x={14} y={14} width={272} height={600} rx={34} fill={PAPER} />
      <rect x={118} y={28} width={64} height={18} rx={9} fill={INK} />
      <clipPath id="footer-app-icon">
        <rect x={34} y={68} width={28} height={28} rx={7} />
      </clipPath>
      <image href="/images/logan/icon-96.webp" x={34} y={68} width={28} height={28} clipPath="url(#footer-app-icon)" />
      <text x={70} y={89} fill={INK} stroke="none" className="font-sans" fontSize={19} fontWeight={700}>
        Justlog
      </text>
      <g transform="translate(0 50)">
        <text x={34} y={92} fill={INK} stroke="none" className="font-sans" fontSize={26} fontWeight={700}>
          Pull day
        </text>
        <text x={34} y={114} fill={INK} stroke="none" className="font-mono" fontSize={12}>
          STARTED 20:04
        </text>
        <rect x={196} y={70} width={70} height={32} rx={16} fill={INK} />
        <text
          x={231}
          y={91}
          textAnchor="middle"
          fill={PAPER}
          stroke="none"
          className="font-sans"
          fontSize={14}
          fontWeight={700}
        >
          Finish
        </text>
        <text x={34} y={164} fill={INK} stroke="none" className="font-sans" fontSize={30} fontWeight={700}>
          12:37
        </text>
        <text x={150} y={164} fill={INK} stroke="none" className="font-sans" fontSize={30} fontWeight={700}>
          2,680
        </text>
        <rect x={30} y={190} width={240} height={204} rx={20} fill="none" />
        <text x={50} y={226} fill={INK} stroke="none" className="font-sans" fontSize={19} fontWeight={700}>
          Weighted pull-ups
        </text>
        <text x={50} y={248} fill={INK} stroke="none" className="font-mono" fontSize={12}>
          LAST TIME 80 × 8
        </text>
        {sets.map((s, i) => {
          const y = 286 + i * 38;
          return (
            <g key={s.n}>
              <text x={50} y={y + 5} fill={INK} stroke="none" className="font-mono" fontSize={14}>
                {s.n}
              </text>
              <text x={78} y={y + 5} fill={INK} stroke="none" className="font-sans" fontSize={16} fontWeight={600}>
                {s.w}
              </text>
              <text x={164} y={y + 5} fill={INK} stroke="none" className="font-sans" fontSize={16}>
                {s.r}
              </text>
              <circle cx={240} cy={y} r={13} fill={s.done ? INK : PAPER} />
              {s.done && <path d={`M${233} ${y} l5 5 9 -10`} stroke={PAPER} fill="none" />}
            </g>
          );
        })}
        <rect x={30} y={412} width={240} height={160} rx={20} fill="none" />
        <text x={50} y={448} fill={INK} stroke="none" className="font-sans" fontSize={19} fontWeight={700}>
          Barbell row
        </text>
        <text x={50} y={470} fill={INK} stroke="none" className="font-mono" fontSize={12}>
          LAST TIME 70 × 10
        </text>
      </g>
    </g>
  );
}

function GymTable() {
  // The top-left stays empty: on wide screens the download pitch sits there.
  return (
    <svg viewBox="0 0 1440 560" aria-hidden="true" className="block h-auto w-full">
      <Item x={110} y={545} r={-6}>
        <Kettlebell />
      </Item>
      <Item x={280} y={520} r={6} s={0.85}>
        <Creatine />
      </Item>
      <Item x={450} y={585} r={-12}>
        <Dumbbell />
      </Item>
      <Item x={740} y={72}>
        <Eggs />
      </Item>
      <Item x={900} y={50}>
        <Capsule r={-20} />
      </Item>
      <Item x={962} y={92}>
        <Capsule r={24} />
      </Item>
      <Item x={1090} y={100} r={-8}>
        <Headphones />
      </Item>
      <Item x={1310} y={130} r={12}>
        <Plate />
      </Item>
      <Item x={650} y={150} r={-5}>
        <WorkoutPhone />
      </Item>
      <Item x={968} y={214} r={10}>
        <PrBurst />
      </Item>
      <Item x={1150} y={270} r={-10}>
        <PreWorkout />
      </Item>
      <Item x={1328} y={290} r={-28} s={0.85}>
        <Banana />
      </Item>
      <Item x={1066} y={480} r={-4}>
        <ProteinTub />
      </Item>
      <Item x={1300} y={500} r={7}>
        <Shaker />
      </Item>
    </svg>
  );
}

const linkClass = "transition-opacity hover:opacity-60";
const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full bg-jl-text text-jl-accent transition-opacity hover:opacity-80";

export function SiteFooter({ container }: { container: string }) {
  return (
    <footer
      id="download"
      className="mt-20 scroll-mt-28 overflow-hidden rounded-t-[40px] bg-jl-accent text-jl-text lg:mt-28"
    >
      <div className={`${container} pt-14 lg:pt-20`}>
        <p
          aria-hidden="true"
          className="m-0 whitespace-nowrap text-center text-[23vw] font-extrabold leading-[0.9] tracking-[-0.06em] min-[1440px]:text-[330px]"
          style={{ textShadow: "0.03em 0.035em 0 #4A6B00" }}
        >
          Just log.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-mono lg:mt-12 text-[13px] font-medium uppercase tracking-[0.08em]">
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Justlog on Instagram"
              className={socialClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <rect x={3} y={3} width={18} height={18} rx={5} />
                <circle cx={12} cy={12} r={4} />
                <circle cx={17.5} cy={6.5} r={1} fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Justlog on TikTok"
              className={socialClass}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
              </svg>
            </a>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-1 basis-full flex-wrap gap-x-8 gap-y-3 md:basis-auto md:justify-end lg:gap-x-12"
          >
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
            <Link href="/terms" className={linkClass}>
              Terms
            </Link>
            <a href={CONTACT_URL} className={linkClass}>
              Contact
            </a>
            <a href={FEEDBACK_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Send feedback
            </a>
            <a href={FEATURE_REQUEST_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Request a feature
            </a>
          </nav>
        </div>
      </div>
      <div className="relative mt-12 lg:mt-6">
        <div className={`${container} relative z-10 flex flex-col gap-5 lg:absolute lg:inset-x-0 lg:top-12`}>
          <h2 className="m-0 text-[44px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[56px]">
            Go beat
            <br />
            last week.
          </h2>
          <p className="m-0 max-w-[340px] text-[19px] text-jl-text/70">
            Free to download. 10,000+ lifters already logging.
          </p>
          <StoreButtons />
        </div>
        <div className="mx-auto mt-10 max-w-[1440px] overflow-hidden lg:mt-0">
          <div className="relative left-1/2 w-[max(100%,820px)] -translate-x-1/2">
            <GymTable />
          </div>
        </div>
      </div>
    </footer>
  );
}
