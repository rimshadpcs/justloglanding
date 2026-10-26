import Image from "next/image";

const ACCENT = "#D4FF3A";

const storyStats = [
  { label: "TIME", value: "1h 08m" },
  { label: "VOLUME", value: "6,420 kg" },
  { label: "SETS", value: "27" },
  { label: "PRs", value: "2", accent: true },
];

const storyBadges = ["🏆 2 PRs", "🥈 2nd best Pull day", "🔥 3-week streak"];

function DotsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="1.8" fill="#fff" />
      <circle cx="12" cy="12" r="1.8" fill="#fff" />
      <circle cx="19" cy="12" r="1.8" fill="#fff" />
    </svg>
  );
}

function ViewerAvatar() {
  return (
    <svg viewBox="0 0 40 40" width="22" height="22" className="-ml-[7px] box-border block rounded-full border-2 border-black bg-[#DBDBDB]">
      <circle cx="20" cy="16" r="7" fill="#FFFFFF" />
      <path d="M6 38c1-9 7-13 14-13s13 4 14 13z" fill="#FFFFFF" />
    </svg>
  );
}

/** A Pull day share image posted as a story, with the plain stats card fanned out behind it (520×660 stage). */
export function ShareStoryMockup() {
  return (
    <div className="relative h-[660px] w-[520px]">
      {/* Plain "Card" style share image */}
      <div
        aria-hidden="true"
        className="absolute left-[250px] top-[70px] box-border flex h-[462px] w-[260px] rotate-6 flex-col gap-3.5 rounded-[30px] bg-[#161618] px-[22px] py-6 text-[#F4F4F5] shadow-[0_30px_70px_rgba(17,17,19,0.2)]"
      >
        <span className="flex items-center justify-between">
          <span className="flex h-6 items-center rounded-lg bg-[#FF073A] px-[9px] text-[11px] font-bold tracking-[0.06em] text-white">
            PULL DAY
          </span>
          <span className="text-[11px] text-[#A1A1AA]">Mon, 12 Oct</span>
        </span>
        <span className="font-mono text-[50px] font-semibold leading-none tracking-[-0.05em]">1:08</span>
        <span className="grid grid-cols-3 gap-1.5 border-y border-[#2C2C30] py-2.5 font-mono text-[15px] font-semibold">
          <span>6,420</span>
          <span>27</span>
          <span className="text-jl-accent">2</span>
        </span>
        <Image
          src="/images/logan/logan-solid.webp"
          alt="Logan the beaver flexing"
          width={130}
          height={130}
          className="mt-auto h-[130px] w-[130px] self-end object-contain"
        />
      </div>

      {/* Story */}
      <div
        role="img"
        aria-label="The Pull day share image posted as a story: a pull-up photo with workout stats, seen by 1,284 people"
        className="absolute left-0 top-0 box-border h-[650px] w-[340px] -rotate-3 overflow-hidden rounded-[38px] border-[7px] border-jl-frame bg-black shadow-[0_40px_90px_rgba(17,17,19,0.3)]"
      >
        <div className="absolute inset-x-0 top-0 h-[572px] overflow-hidden rounded-b-[18px] bg-[#1E2026]">
          <Image src="/images/landing/pullday.webp" alt="Lifter hanging from a pull-up bar in a gym" fill sizes="326px" className="object-cover" />
          <div className="absolute inset-x-0 top-0 h-[260px] bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_72%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[170px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.72)_70%)]" />

          {/* Story progress + header */}
          <div aria-hidden="true" className="absolute inset-x-2.5 top-2.5 grid grid-cols-3 gap-1">
            <span className="block h-[2.5px] rounded-sm bg-white" />
            <span className="block h-[2.5px] rounded-sm bg-[linear-gradient(90deg,#fff_0_42%,rgba(255,255,255,0.35)_42%)]" />
            <span className="block h-[2.5px] rounded-sm bg-white/35" />
          </div>
          <div aria-hidden="true" className="absolute inset-x-3 top-[22px] flex items-center gap-2 text-white">
            <span className="box-border h-[30px] w-[30px] shrink-0 rounded-full bg-[linear-gradient(45deg,#D4FF3A,#2EE6A6)] p-0.5">
              <svg viewBox="0 0 40 40" width="100%" height="100%" className="box-border block rounded-full border-2 border-black bg-[#2B3A67]">
                <circle cx="20" cy="23" r="11" fill="#F6D2B5" />
                <path d="M7 21c0-9 6-14 13-14s13 5 13 14l-3-4-2 4-3-6-2 5-3-6-3 6-2-5-3 6-2-4z" fill="#1B1B22" />
                <ellipse cx="15.5" cy="24" rx="2.4" ry="3.2" fill="#1B1B22" />
                <ellipse cx="24.5" cy="24" rx="2.4" ry="3.2" fill="#1B1B22" />
                <path d="M17.5 29.5q2.5 1.6 5 0" fill="none" stroke="#B5524A" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="8" y="15.5" width="24" height="3" rx="1.5" fill={ACCENT} />
              </svg>
            </span>
            <span className="text-[13px] font-semibold">jack&amp;lift</span>
            <span className="text-xs opacity-70">2h</span>
            <span className="ml-auto flex items-center gap-3.5">
              <DotsIcon />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </span>
          </div>

          {/* Share image overlay */}
          <div className="absolute inset-0 box-border flex flex-col gap-3 px-5 pb-[18px] pt-[66px] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
            <span className="flex items-center justify-between">
              <span className="text-[26px] font-bold tracking-[-0.02em]">Pull day</span>
              <span className="text-xs opacity-75">MON 12 OCT</span>
            </span>
            <div className="grid grid-cols-2 gap-x-3.5 gap-y-2.5">
              {storyStats.map((s) => (
                <span key={s.label} className="flex flex-col">
                  <span className="text-[11px] font-semibold tracking-[0.06em] opacity-85">{s.label}</span>
                  <span
                    className="whitespace-nowrap text-[34px] font-bold leading-[1.05] tracking-[-0.04em]"
                    style={{ color: s.accent ? ACCENT : "#FFFFFF" }}
                  >
                    {s.value}
                  </span>
                </span>
              ))}
            </div>
            <span className="mt-auto flex flex-wrap gap-[5px]">
              {storyBadges.map((b) => (
                <span key={b} className="flex h-6 items-center rounded-xl bg-white/15 px-[9px] text-[11.5px] font-semibold">
                  {b}
                </span>
              ))}
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Image src="/images/logan/icon-final.png" alt="Justlog app icon" width={24} height={24} className="rounded-md" />
              justlog.app
            </span>
          </div>
        </div>

        {/* Story footer */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-16 items-center gap-2.5 px-[18px] text-white">
          <span className="flex items-center pl-[7px]">
            <ViewerAvatar />
            <ViewerAvatar />
            <ViewerAvatar />
          </span>
          <span className="flex flex-col leading-[1.15]">
            <span className="text-xs font-semibold">Activity</span>
            <span className="text-[11px] opacity-70">Seen by 1,284</span>
          </span>
          <span className="ml-auto flex items-center gap-4">
            <span className="flex items-center gap-[5px] text-xs font-semibold">
              <svg width="19" height="19" viewBox="0 0 24 24">
                <path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 7.5 2.7c0 5.4-7.5 10-7.5 10z" fill="#FF3B5C" />
              </svg>
              312
            </span>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
              <path d="M21 3 3 10.5l7 2.5 2.5 7z" />
              <path d="m10 13 4-4" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

const shortsActions = [
  { label: "2.1K", path: "M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 7.5 2.7c0 5.4-7.5 10-7.5 10z" },
  { label: "48", path: "M4 5h16v10H10l-4 4v-4H4z" },
  { label: "Save", path: "M6 4h12v16l-6-4-6 4z" },
  { label: "Share", path: "M14 5l6 6-6 6M20 11h-8a7 7 0 0 0-7 7" },
  { label: "Remix", path: "M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4M12 9v6M9 12h6" },
];

const shortsNav = [
  { label: "Home", path: "M3 11l9-7 9 7v9h-6v-6H9v6H3z" },
  { label: "Shorts", path: "M9 4l9 5-6 3 6 3-9 5V4z" },
  { label: "", path: "" },
  { label: "Subscriptions", path: "M4 8h16v12H4zM7 4h10M10 11v6l5-3z" },
  { label: "You", path: "" },
];

/** An exercise card with a Watch now button pointing at a paused short-form video (560×540 stage). */
export function TutorialMockup() {
  return (
    <div className="relative h-[540px] w-[560px]">
      <div className="absolute left-0 top-[90px] box-border flex w-[330px] flex-col gap-3.5 rounded-[26px] bg-jl-s1 p-[18px] shadow-[0_24px_60px_rgba(17,17,19,0.12)]">
        <span className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-jl-soft font-mono text-xs font-semibold text-jl-ink">
            CH
          </span>
          <span className="flex flex-col gap-px">
            <span className="text-lg font-semibold tracking-[-0.015em]">Incline Smith Press</span>
            <span className="text-[13px] text-jl-muted">Set 2 of 3 · 60 kg × 8</span>
          </span>
        </span>
        <span className="flex gap-2">
          <span className="flex h-[34px] items-center rounded-[17px] bg-jl-bg px-3 text-[13px] font-medium text-jl-muted">Rest 2:00</span>
          <span className="flex h-[34px] items-center gap-1.5 rounded-[17px] bg-jl-accent px-3 text-[13px] font-semibold text-jl-onaccent shadow-[0_0_0_4px_rgba(212,255,58,0.22)]">
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="4" />
              <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
            </svg>
            Watch now
          </span>
        </span>
        <span className="block h-px bg-jl-line" />
        <span className="grid grid-cols-[30px_1fr_1fr] gap-1.5 font-mono text-[13px] font-medium text-jl-muted">
          <span>1</span>
          <span>55 kg</span>
          <span>8</span>
          <span className="text-jl-text">2</span>
          <span className="text-jl-text">60 kg</span>
          <span className="text-jl-text">8</span>
        </span>
      </div>

      <svg aria-hidden="true" width="90" height="60" viewBox="0 0 90 60" className="absolute left-[300px] top-[150px]">
        <path d="M6 46 C30 10, 58 6, 82 20" fill="none" stroke="#4A6B00" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
        <path d="M72 12 L84 21 L70 27" fill="none" stroke="#4A6B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div
        role="img"
        aria-label="A short-form video of an incline Smith press, paused in a video player"
        className="absolute right-0 top-0 box-border h-[510px] w-[256px] overflow-hidden rounded-[32px] border-[6px] border-jl-frame bg-black shadow-[0_34px_80px_rgba(17,17,19,0.28)]"
      >
        <div className="absolute inset-x-0 bottom-12 top-0 bg-[#1E2026]">
          <Image src="/images/landing/inclinesmith.webp" alt="Incline Smith machine press demonstration" fill sizes="244px" className="object-cover" />
        </div>
        <div className="absolute inset-x-0 top-0 h-[70px] bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5))]" />
        <div className="absolute inset-x-0 bottom-12 h-[200px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_75%)]" />
        <div aria-hidden="true" className="absolute right-3 top-3 flex items-center gap-3.5">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4" />
          </svg>
          <DotsIcon />
        </div>
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[42%] flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8 5.2v13.6L19 12z" fill="#fff" />
          </svg>
        </span>

        <div aria-hidden="true" className="absolute bottom-[62px] right-1.5 flex w-11 flex-col items-center gap-[11px] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
          {shortsActions.map((a) => (
            <span key={a.label} className="flex flex-col items-center gap-0.5 text-[10.5px] font-semibold">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={a.path} />
              </svg>
              {a.label}
            </span>
          ))}
          <span className="box-border flex h-7 w-7 items-center justify-center rounded-[7px] border-2 border-white bg-[#FF6A3D] text-[10px] font-extrabold">
            F
          </span>
        </div>

        <div aria-hidden="true" className="absolute bottom-[60px] left-3 right-[54px] flex flex-col gap-[7px] text-white">
          <span className="flex items-center gap-[7px]">
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#FF6A3D] text-[11px] font-extrabold">
              F
            </span>
            <span className="text-xs font-semibold">@formfirst</span>
            <span className="flex h-6 items-center rounded-xl bg-white px-2.5 text-[10.5px] font-bold text-[#0F0F0F]">Subscribe</span>
          </span>
          <span className="truncate text-xs leading-[1.3]">🔥 The perfect incline Smith press in 30 seconds</span>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-around border-t border-[#272727] bg-[#0F0F0F] text-white">
          {shortsNav.map((n, i) =>
            n.label === "" ? (
              <span key={i} className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#272727]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </span>
            ) : (
              <span key={n.label} className="flex flex-col items-center gap-px text-[8.5px]">
                {n.path ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={n.path} />
                  </svg>
                ) : (
                  <span className="block h-[17px] w-[17px] rounded-full bg-jl-accent" />
                )}
                {n.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
