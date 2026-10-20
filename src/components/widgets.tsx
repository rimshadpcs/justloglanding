import type { ReactNode } from "react";

const ACCENT = "#D4FF3A";
const TRACK = "#2C2C30";
const DIM = "#34343A";

// Mon–Sun: trained Mon, Tue, Thu; today is Saturday.
const WEEK: ("done" | "rest" | "today")[] = ["done", "done", "rest", "done", "rest", "today", "rest"];

function Ring({ size, stroke = 10 }: { size: number; stroke?: number }) {
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg aria-hidden="true" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={TRACK} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ACCENT}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * 0.25}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono font-semibold tracking-[-0.04em]" style={{ fontSize: size > 100 ? 24 : 23 }}>
          3/4
        </span>
        <span className="text-xs text-[#A1A1AA]">this week</span>
      </span>
    </div>
  );
}

function WeekDots({ size, gap }: { size: number; gap: number }) {
  return (
    <span role="img" aria-label="Trained Monday, Tuesday and Thursday; today is Saturday" className="flex" style={{ gap }}>
      {WEEK.map((d, i) => (
        <span
          key={i}
          className="box-border block rounded-full"
          style={{
            width: size,
            height: size,
            background: d === "done" ? ACCENT : d === "rest" ? DIM : "transparent",
            border: d === "today" ? "2px solid #F4F4F5" : undefined,
          }}
        />
      ))}
    </span>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <span className="text-xs font-semibold tracking-[0.1em] text-[#A1A1AA]">{children}</span>;
}

// Widgets keep their exact design sizes; on phones they're zoomed down so two small ones fit a row.
const small =
  "box-border flex h-[200px] w-[200px] shrink-0 flex-col justify-between rounded-[32px] p-[18px] max-sm:[zoom:0.72]";
const medium =
  "box-border flex h-[200px] w-[424px] shrink-0 rounded-[32px] bg-[#161618] px-5 py-[18px] text-[#F4F4F5] max-sm:[zoom:0.72]";

export function WidgetShowcase() {
  return (
    <div className="box-border flex w-full max-w-[1200px] flex-col items-center gap-4 rounded-[28px] bg-[#1E2433] px-3 py-6 sm:gap-6 sm:rounded-[40px] sm:p-12">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className={`${small} items-center bg-[#161618] text-[#F4F4F5]`}>
          <Label>WEEKLY GOAL</Label>
          <Ring size={96} />
          <WeekDots size={14} gap={6} />
        </div>

        <div className={`${small} bg-[#161618] text-[#F4F4F5]`}>
          <span className="flex items-end justify-between">
            <Label>STREAK</Label>
            <span aria-hidden="true" className="flex items-end gap-[3px]">
              {[10, 16, 12, 20, 24, 30].map((h, i) => (
                <span key={i} className="block w-2.5 rounded-[3px]" style={{ height: h, background: i === 5 ? ACCENT : DIM }} />
              ))}
            </span>
          </span>
          <span className="flex flex-col">
            <span className="font-mono text-[64px] font-semibold leading-none tracking-[-0.05em]">6</span>
            <span className="text-[15px] font-medium">weeks in a row</span>
          </span>
          <span className="text-[13px] text-[#A1A1AA]">
            Best <span className="font-mono text-[#F4F4F5]">9</span>
          </span>
        </div>

        <div className={`${medium} items-stretch gap-[18px]`}>
          <div className="flex flex-1 flex-col gap-2">
            <Label>NEXT WORKOUT</Label>
            <span className="mt-1 flex items-center gap-2.5">
              <span className="block h-[34px] w-[34px] shrink-0 rounded-[10px] bg-[#4D4DFF]" />
              <span className="text-[22px] font-bold tracking-[-0.02em]">Push day</span>
            </span>
            <span className="text-[13px] text-[#A1A1AA]">Last done 5 days ago</span>
            <span className="mt-auto flex h-10 items-center gap-1.5 self-start rounded-[20px] bg-jl-accent px-[22px] text-[15px] font-semibold text-jl-onaccent">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24">
                <path d="M6 4v16l14-8z" fill="currentColor" />
              </svg>
              Start
            </span>
          </div>
          <div className="flex flex-col items-center justify-between">
            <Ring size={104} />
            <WeekDots size={11} gap={5} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className={`${small} bg-[#161618] text-[#F4F4F5]`}>
          <Label>PUSH-UPS</Label>
          <span className="flex flex-col">
            <span className="font-mono text-[56px] font-semibold leading-none tracking-[-0.05em]">60</span>
            <span className="text-[13px] text-[#A1A1AA]">today · 2,340 all time</span>
          </span>
          <span className="flex gap-2">
            <span className="flex h-10 flex-1 items-center justify-center rounded-[14px] bg-[#2C2C30] font-mono text-[15px] font-semibold">
              +10
            </span>
            <span className="flex h-10 flex-1 items-center justify-center rounded-[14px] bg-jl-accent font-mono text-[15px] font-semibold text-jl-onaccent">
              +1
            </span>
          </span>
        </div>

        <div className={`${small} bg-jl-accent text-jl-onaccent`}>
          <span className="text-xs font-bold tracking-[0.1em] opacity-65">TABATA</span>
          <span className="flex flex-col gap-0.5">
            <span className="text-[21px] font-bold tracking-[-0.02em]">Morning jump rope</span>
            <span className="font-mono text-[13px] font-medium opacity-70">30/30 × 10 · 10:00</span>
          </span>
          <span className="flex items-center justify-between">
            <span className="text-[13px] font-semibold">Best 412</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jl-onaccent text-jl-accent">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 4.5v15L19.5 12z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </div>

        <div className={`${medium} flex-col justify-between`}>
          <span className="flex items-center justify-between">
            <Label>LATEST PR</Label>
            <span className="flex h-6 items-center rounded-[7px] bg-jl-accent px-2 font-mono text-[11px] font-semibold text-jl-onaccent">
              PR
            </span>
          </span>
          <span className="flex items-end justify-between gap-4">
            <span className="flex flex-col gap-0.5">
              <span className="text-[17px] font-semibold">Bench Press</span>
              <span className="font-mono text-[40px] font-semibold leading-[1.05] tracking-[-0.04em]">100 kg</span>
              <span className="text-[13px] font-semibold text-jl-accent">+2.5 kg · Tuesday</span>
            </span>
            <svg role="img" aria-label="Bench press best weight rising over 6 weeks" width="170" height="60" viewBox="0 0 240 52">
              <polyline
                points="0,44 40,40 80,36 120,30 160,30 200,20 240,8"
                fill="none"
                stroke={ACCENT}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="240" cy="8" r="6" fill={ACCENT} />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
