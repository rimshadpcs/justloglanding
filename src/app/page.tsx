import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_URL,
  Check,
  Cross,
  FEEDBACK_URL,
  INSTAGRAM_URL,
  Phone,
  ProductHuntBadge,
  StoreButtons,
  UNEED_URL,
} from "@/components/landing";
import { ShareStoryMockup, TutorialMockup } from "@/components/showcase";
import { WidgetShowcase } from "@/components/widgets";

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-20 min-[1400px]:px-[120px]";
const h2 = "m-0 text-[40px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[56px]";
const eyebrow = "text-sm font-semibold tracking-[0.1em]";

const otherApps = [
  "$9.99/month for features you never use",
  "Social feeds on your workout screen",
  "AI coaches stating the obvious",
  "Five taps to find today’s routine",
  "Pings during dinner",
];

const justlogPerks = [
  "1,100+ exercises with smart search",
  "Last, best and PRs on every set",
  "Weight, reps, time and distance",
  "Colour-coded calendar and counters",
  "Notifications only while you train",
  "No unnecessary data collection",
];

// offset: how far the phone is pulled up so the relevant part of the screen shows in the card.
const features = [
  {
    title: "Last & best on every set",
    body: "See what you lifted last time and your best, right next to the set you’re logging.",
    screen: "workout",
    offset: -30,
  },
  {
    title: "Finds it however you type it",
    body: "benchpress, bench-press or bench press. 1,100+ exercises, one search.",
    screen: "picker",
    offset: 0,
  },
  {
    title: "A calendar that tells the story",
    body: "Every workout coloured by routine. Spot your rhythm, and the gaps, at a glance.",
    screen: "history",
    offset: 0,
  },
  {
    title: "Log sets from the lock screen",
    body: "Complete a set and watch your rest timer without opening the app.",
    screen: "notification",
    offset: -60,
  },
  {
    title: "Rate how it felt",
    body: "Meh, Solid or Crushed it. Next time, you’ll know what you were up against.",
    screen: "finish",
    offset: 0,
  },
  {
    title: "Counters for everything else",
    body: "Push-ups through the day? Tap +1 and see today, this week and all time.",
    screen: "counter-stats",
    offset: -169,
  },
  {
    title: "Full-screen timer for timed sets",
    body: "Planks, holds and carries: start a timed set and it goes full screen. Play, pause, +10s, done.",
    screen: "timer",
    offset: -40,
  },
  {
    title: "Every PR, celebrated",
    body: "Beat your best and you’ll know instantly. No digging through charts.",
    screen: "workout-pr",
    offset: 0,
  },
];

const tabataPoints = [
  {
    title: "A timer you can see from across the room",
    body: "Lime for work, dark for rest. Rounds, beeps and lock-screen controls.",
  },
  { title: "It actually tracks", body: "Log reps between rounds and see where you faded." },
  { title: "Beat last time", body: "Total reps, PRs and a weekly view, just for Tabata." },
];

const importSources = [
  { title: "Apple Notes", sub: "or any notes app", icon: "M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h5" },
  { title: "Your trainer", sub: "their message or plan", icon: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5" },
  {
    title: "An AI chat",
    sub: "the plan it wrote you",
    icon: "M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z",
  },
  { title: "Other apps", sub: "export a CSV and import", icon: "M12 4v11M7 10l5 5 5-5M5 19h14" },
];

const importedExercises = [
  { name: "Bench Press", sub: "Chest · barbell", sets: "4 × 8" },
  { name: "Incline Dumbbell Press", sub: "Chest · dumbbell", sets: "3 × 10" },
  { name: "Cable Fly", sub: "New exercise", sets: "3 × 12", isNew: true },
  { name: "Lateral Raise", sub: "Shoulders · dumbbell", sets: "3 sets" },
];

const shareStyles = ["Photo", "Transparent", "Card", "Stats", "Text"];

const shareTargets = [
  {
    name: "Instagram Stories",
    icon: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  { name: "TikTok", icon: "M9 18V6l10-2v12M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM19 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z" },
  { name: "Snapchat", icon: "M4 8h3l2-3h6l2 3h3v11H4zM12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" },
];

const testimonials = [
  {
    quote:
      "Always had issues searching exercises in other apps. Worried about missing spaces or hyphens, but this search actually works.",
    highlight: false,
  },
  { quote: "Amazing UI design and colors. Really clean and easy on the eyes.", highlight: true },
  {
    quote: "Love that weekly calendar part. So easy to see my past and next routines. Very efficient.",
    highlight: false,
  },
];

const moods = [
  { img: "logan-meh", label: "😐 Meh", alt: "Logan, Meh" },
  { img: "logan-solid", label: "💪 Solid", alt: "Logan, Solid" },
  { img: "logan-crushed-it", label: "🔥 Crushed it", alt: "Logan, Crushed it" },
];

const faqs = [
  {
    q: "Why is Logan a beaver?",
    a: "Beavers turn trees into logs. You turn workouts into logs. A little more each time.",
  },
  { q: "Why no social features?", a: "Your workout isn’t content. No feeds, no followers, no likes." },
  { q: "Will you add meal tracking?", a: "No. Justlog does one job and does it well." },
  { q: "Any notifications?", a: "Only while you train: rest timer and set controls. Never marketing." },
  { q: "Can I create custom exercises?", a: "Yes. Add any exercise tracked by weight, reps, time or distance." },
  { q: "How many exercises are there?", a: "1,100+, with search that ignores spaces and hyphens." },
  { q: "Is it free?", a: "Logging is free forever. Pro adds extras when you want them." },
  {
    q: "Can I bring my routine from another app?",
    a: "Yes. Paste it from your notes, a trainer or an AI chat, or import a CSV export.",
  },
];

function Logo({ size = 36, radius = 8 }: { size?: number; radius?: number }) {
  return (
    <Image
      src="/images/logan/icon-final.png"
      alt=""
      width={size}
      height={size}
      className="block shrink-0"
      style={{ borderRadius: radius }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-jl-bg text-jl-text">
      {/* Header */}
      <header className={`${container} flex h-20 items-center gap-6 lg:h-24 lg:gap-10`}>
        <Link href="/" className="flex items-center gap-3 text-jl-text">
          <Logo />
          <span className="text-[22px] font-semibold tracking-[-0.02em]">Justlog</span>
        </Link>
        <nav aria-label="Main" className="hidden flex-1 justify-center gap-6 whitespace-nowrap text-base lg:flex xl:gap-8">
          <a href="#features" className="text-jl-muted transition-colors hover:text-jl-text">Features</a>
          <a href="#tabata" className="text-jl-muted transition-colors hover:text-jl-text">Tabata</a>
          <a href="#widgets" className="text-jl-muted transition-colors hover:text-jl-text">Widgets</a>
          <a href="#why" className="text-jl-muted transition-colors hover:text-jl-text">Why Justlog</a>
          <a href="#logan" className="text-jl-muted transition-colors hover:text-jl-text">Meet Logan</a>
          <a href="#faq" className="text-jl-muted transition-colors hover:text-jl-text">FAQ</a>
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <div className="hidden sm:block lg:hidden xl:block">
            <ProductHuntBadge />
          </div>
          <a
            href="#download"
            className="flex h-[50px] items-center rounded-2xl bg-jl-text px-[22px] text-[15px] font-semibold text-jl-bg transition-opacity hover:opacity-85"
          >
            Download
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className={`${container} grid items-center gap-10 pb-6 pt-8 lg:min-h-[760px] lg:grid-cols-2 lg:pt-0`}
        >
          <div className="flex flex-col gap-7">
            <h1 className="m-0 text-[60px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[80px] xl:text-[96px]">
              Just log.
              <br />
              <span className="mt-2.5 inline-block -rotate-2 rounded-[22px] bg-jl-accent px-[18px] pb-1.5 text-jl-onaccent">
                No fluff.
              </span>
            </h1>
            <p className="m-0 max-w-[500px] text-lg leading-[1.45] text-jl-muted sm:text-[21px]">
              The workout tracker that gets out of your way. See what you lifted last time, beat it, log the set.
            </p>
            <StoreButtons />
            <div className="flex items-center gap-5 text-[15px] text-jl-muted">
              <span className="flex items-center gap-1.5">
                <span className="font-mono font-semibold text-jl-text">4.7</span>
                <span className="tracking-[2px] text-jl-ink" aria-label="5 stars">★★★★★</span>
              </span>
              <span className="h-1 w-1 rounded-sm bg-jl-faint" />
              <span>
                <span className="font-mono font-semibold text-jl-text">10,000+</span> downloads
              </span>
            </div>
          </div>

          {/* Hero visual: a 580×720 stage scaled to fit */}
          <div className="relative h-[410px] sm:h-[600px] lg:h-[504px] xl:h-[620px] min-[1400px]:h-[720px]">
            <div className="absolute left-1/2 top-0 h-[720px] w-[580px] origin-top -translate-x-1/2 scale-[0.56] sm:scale-[0.83] lg:left-auto lg:right-0 lg:origin-top-right lg:translate-x-0 lg:scale-[0.7] xl:scale-[0.86] min-[1400px]:scale-100">
              <div aria-hidden="true" className="jl-glow absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full" />
              <div className="absolute left-[30px] top-[60px] -rotate-6">
                <Phone screen="main" width={297} priority />
              </div>
              <div className="absolute right-5 top-5">
                <Phone screen="workout" width={320} priority />
              </div>
              <Image
                src="/images/logan/logan-idle.webp"
                alt="Logan the beaver waving"
                width={270}
                height={270}
                priority
                className="absolute -left-[70px] bottom-2.5 z-[3] h-[270px] w-[270px] object-contain"
              />
              <div className="absolute -left-[60px] bottom-[286px] z-[4] flex w-60 flex-col gap-[3px] rounded-[22px] bg-jl-s1 px-4 py-3.5 shadow-[0_12px_30px_rgba(17,17,19,0.12)]">
                <span className="text-lg font-bold tracking-[-0.01em]">Hey, I’m Logan! 👋</span>
                <span className="text-sm leading-[1.4] text-jl-muted">I help you log every workout with Justlog.</span>
                <span aria-hidden="true" className="absolute -bottom-[7px] left-24 h-4 w-4 rotate-45 rounded-[3px] bg-jl-s1" />
              </div>
            </div>
          </div>
        </section>

        {/* As featured in */}
        <section aria-label="As featured in" className={`${container} flex flex-col items-center gap-7 pt-10 lg:pb-10`}>
          <span className={`${eyebrow} text-jl-muted`}>AS FEATURED IN</span>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
            <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-3xl bg-jl-s1">
              <ProductHuntBadge size="lg" />
              <span className="text-sm text-jl-muted">Featured and won</span>
            </div>
            <a
              href={UNEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-3xl bg-jl-s1 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-[62px] items-center text-[40px] font-black tracking-[0.02em] text-[#1C1C1C]" style={{ fontFamily: "Arial, sans-serif" }}>
                UNEED<span className="-mt-[22px] ml-0.5 text-2xl text-[#F5A623]">✦</span>
              </span>
              <span className="text-sm text-jl-muted">Top tracking apps of the year</span>
            </a>
            <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-3xl bg-jl-s1">
              <span className="flex h-[62px] items-center gap-2.5">
                <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24">
                  <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" fill="#FF6600" />
                </svg>
                <span className="text-[22px] font-bold leading-none text-[#FF6600]" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                  Hacker
                  <br />
                  News
                </span>
              </span>
              <span className="text-sm text-jl-muted">Show HN</span>
            </div>
            <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-3xl bg-jl-s1">
              <span className="flex h-[62px] items-center gap-2.5">
                <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0Zm5.4 17.2h2.4V6.8H5.4v10.4Zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4v10.4Z" fill="#0E2150" />
                </svg>
                <span className="text-[22px] font-bold leading-none text-[#0E2150]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Indie
                  <br />
                  Hackers
                </span>
              </span>
              <span className="text-sm text-jl-muted">Built in public</span>
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className={`${container} flex scroll-mt-6 flex-col gap-12 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
            <h2 className={`${h2} max-w-[640px]`}>Fitness apps got bloated. We went the other way.</h2>
            <p className="m-0 max-w-[380px] text-lg leading-normal text-jl-muted">
              Every year apps add feeds, coaches and clutter. We kept the one thing that makes you stronger: the log.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-[22px] rounded-[28px] bg-jl-s1 p-7 sm:p-9 md:min-h-[400px]">
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold text-jl-muted">Other apps</span>
                <svg role="img" aria-label="Chart: other apps keep adding features over time" width="180" height="44" viewBox="0 0 180 44">
                  <path d="M4 40 L50 34 L90 22 L130 14 L176 4" fill="none" stroke="#A1A1AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="176" cy="4" r="3.5" fill="#A1A1AA" />
                </svg>
              </div>
              <ul className="m-0 flex list-none flex-col gap-[18px] p-0">
                {otherApps.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[17px] text-jl-muted">
                    <Cross />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[22px] rounded-[28px] border-[1.5px] border-jl-ink bg-jl-soft p-7 sm:p-9 md:min-h-[400px]">
              <div className="flex items-center gap-2.5">
                <Logo size={26} radius={6} />
                <span className="text-[15px] font-semibold">Justlog</span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {justlogPerks.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[17px]">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className={`${container} flex scroll-mt-6 flex-col gap-12 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className={`${eyebrow} text-jl-ink`}>FEATURES</span>
            <h2 className={h2}>
              Everything you need at the gym.
              <br className="hidden sm:block" /> Nothing you don’t.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="relative box-border h-[500px] overflow-hidden rounded-[28px] bg-jl-s1 px-6 pt-[26px]">
                <h3 className="m-0 text-xl font-semibold tracking-[-0.02em]">{f.title}</h3>
                <p className="mb-0 mt-2 text-sm leading-[1.45] text-jl-muted">{f.body}</p>
                <div className="absolute inset-x-0 bottom-0 flex h-[320px] justify-center overflow-hidden">
                  <Phone screen={f.screen} width={234} radius={40} style={{ marginTop: f.offset }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabata */}
        <section
          id="tabata"
          className={`${container} grid scroll-mt-6 items-start gap-10 pt-24 lg:grid-cols-2 lg:pt-[110px]`}
        >
          <div className="flex flex-col gap-6 lg:pt-10">
            <span className="flex h-[30px] items-center self-start rounded-[15px] bg-jl-soft px-3 text-[13px] font-semibold tracking-[0.08em] text-jl-ink">
              NEW · TABATA
            </span>
            <h2 className={h2}>
              Morning cardio.
              <br />
              Evening lifts.
            </h2>
            <p className="m-0 max-w-[480px] text-[19px] leading-normal text-jl-muted">
              Jump rope at 7, bench at 7. Tabata lives in its own space, with its own timers and history, so your lifting
              log stays clean.
            </p>
            <ul className="m-0 mt-2 flex list-none flex-col gap-[18px] p-0">
              {tabataPoints.map((p) => (
                <li key={p.title} className="flex items-start gap-3.5">
                  <span className="mt-px">
                    <Check size={28} />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-lg font-semibold">{p.title}</span>
                    <span className="text-[15px] leading-[1.45] text-jl-muted">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tabata visual: a 600×640 stage scaled to fit */}
          <div className="relative h-[360px] sm:h-[540px] lg:h-[500px] xl:h-[550px] min-[1400px]:h-[640px]">
            <div className="absolute left-1/2 top-0 h-[640px] w-[600px] origin-top -translate-x-1/2 scale-[0.56] sm:scale-[0.84] lg:scale-[0.78] xl:scale-[0.86] min-[1400px]:scale-100">
              <div aria-hidden="true" className="jl-glow absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full" />
              <div className="absolute left-[300px] top-0 z-[1] rotate-[5deg]">
                <Phone screen="tabata-done" width={297} />
              </div>
              <div className="absolute left-10 top-5 z-[2] -rotate-[5deg]">
                <Phone screen="tabata-run" width={297} />
              </div>
            </div>
          </div>
        </section>

        {/* Widgets */}
        <section id="widgets" className={`${container} flex scroll-mt-6 flex-col items-center gap-11 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className={`${eyebrow} text-jl-ink`}>WIDGETS</span>
            <h2 className={h2}>Your week, on your home screen.</h2>
            <p className="m-0 max-w-[620px] text-[19px] leading-normal text-jl-muted">
              Check your weekly goal, start your next workout, tap +1 on a counter or kick off a Tabata, without opening
              the app.
            </p>
          </div>
          <WidgetShowcase />
        </section>

        {/* Switching from another app */}
        <section
          id="switch"
          className={`${container} grid scroll-mt-6 items-center gap-14 pt-24 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-20 lg:pt-[110px] xl:grid-cols-[minmax(0,1fr)_520px]`}
        >
          <div className="flex flex-col gap-[18px]">
            <span className={`${eyebrow} text-jl-ink`}>SWITCHING?</span>
            <h2 className={h2}>Coming from another app? We’ve got you.</h2>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal text-jl-muted">
              Paste your routine from anywhere, or import a CSV export. Messy is fine. Logan turns it into exercises, sets
              and reps, and keeps your names as you wrote them.
            </p>
            <div className="mt-2.5 grid max-w-[560px] gap-3 sm:grid-cols-2">
              {importSources.map((src) => (
                <div key={src.title} className="flex items-center gap-3.5 rounded-[20px] bg-jl-s1 px-[18px] py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-jl-s2">
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={src.icon} />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-semibold">{src.title}</span>
                    <span className="text-sm text-jl-muted">{src.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-[18px]">
            <div
              aria-label="Example of a messy pasted workout"
              className="-rotate-2 rounded-[28px] bg-jl-s1 px-6 py-[26px] font-mono text-base leading-[1.65] text-jl-muted shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:px-[30px] sm:text-[19px]"
            >
              push day tmrw!!
              <br />
              bench 4x8 (80kg last wk)
              <br />
              incline db press 3 sets of 10
              <br />
              cable flys 3x12
              <br />
              lat raises till failure
            </div>
            <div aria-hidden="true" className="flex justify-center text-jl-ink">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </div>
            <div className="flex flex-col gap-3 rounded-[28px] bg-jl-s1 px-[18px] pb-2.5 pt-[18px] shadow-[0_24px_60px_rgba(17,17,19,0.12)]">
              <div className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4D4DFF] text-white">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
                  </svg>
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-xl font-semibold tracking-[-0.02em]">Push day</span>
                  <span className="text-[13px] text-jl-muted">4 exercises · 13 sets</span>
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-jl-accent text-jl-onaccent">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M8 5.2v13.6L19 12z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col">
                {importedExercises.map((ex, i) => (
                  <div key={ex.name} className={`flex items-center gap-3 px-1 py-2.5 ${i > 0 ? "border-t border-jl-line" : ""}`}>
                    <span className="w-6 font-mono text-[13px] font-medium text-jl-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex min-w-0 flex-1 flex-col gap-px">
                      <span className="text-base font-semibold">{ex.name}</span>
                      <span className={`text-[13px] ${ex.isNew ? "text-jl-ink" : "text-jl-muted"}`}>{ex.sub}</span>
                    </span>
                    <span className="flex h-8 min-w-[58px] items-center justify-center rounded-xl bg-jl-s2 px-2.5 font-mono text-sm font-medium">
                      {ex.sets}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/logan/logan-welcome-back.webp"
              alt=""
              width={140}
              height={140}
              className="absolute -right-2 -top-[70px] h-[100px] w-[100px] object-contain sm:-right-[50px] sm:h-[140px] sm:w-[140px]"
            />
          </div>
        </section>

        {/* Share */}
        <section
          id="share"
          className={`${container} grid scroll-mt-6 items-center gap-12 pt-24 lg:grid-cols-[442px_minmax(0,1fr)] lg:gap-16 lg:pt-[110px] min-[1400px]:grid-cols-[520px_minmax(0,1fr)] min-[1400px]:gap-[90px]`}
        >
          {/* 520×660 stage scaled to fit */}
          <div className="relative order-2 h-[400px] sm:h-[594px] lg:order-1 lg:h-[561px] min-[1400px]:h-[660px]">
            <div className="absolute left-1/2 top-0 origin-top -translate-x-1/2 scale-[0.6] sm:scale-90 lg:left-0 lg:origin-top-left lg:translate-x-0 lg:scale-[0.85] min-[1400px]:scale-100">
              <ShareStoryMockup />
            </div>
          </div>
          <div className="order-1 flex flex-col gap-[18px] lg:order-2">
            <span className={`${eyebrow} text-jl-ink`}>SHARE</span>
            <h2 className={h2}>Turn your stats into a story worth posting.</h2>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal text-jl-muted">
              Finish a workout and get a cool, story-ready image in one tap. Your gym photo, your numbers, your PRs. Or a
              see-through version to drop on any photo or video.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {shareStyles.map((style, i) => (
                <span
                  key={style}
                  className={`flex h-[38px] items-center rounded-[19px] px-4 text-[15px] font-semibold ${
                    i === 0 ? "bg-jl-text text-jl-bg" : "bg-jl-s1"
                  }`}
                >
                  {style}
                </span>
              ))}
            </div>
            <div className="mt-1 flex flex-col gap-2.5">
              <span className="text-sm font-semibold text-jl-muted">Post straight to</span>
              <div className="flex flex-wrap gap-2.5">
                {shareTargets.map((t) => (
                  <span key={t.name} className="flex h-11 items-center gap-[9px] rounded-[22px] bg-jl-s1 pl-3 pr-4 text-[15px] font-semibold">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-jl-text text-jl-bg">
                      <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={t.icon} />
                      </svg>
                    </span>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to */}
        <section
          id="howto"
          className={`${container} grid scroll-mt-6 items-center gap-12 pt-24 lg:grid-cols-[minmax(0,1fr)_476px] lg:gap-16 lg:pt-[110px] min-[1400px]:grid-cols-[minmax(0,1fr)_560px] min-[1400px]:gap-20`}
        >
          <div className="flex flex-col gap-[18px]">
            <span className={`${eyebrow} text-jl-ink`}>HOW TO</span>
            <h2 className={h2}>Not sure how to do it? Watch it in one tap.</h2>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal text-jl-muted">
              Every exercise has a Watch now button. It opens a short form video on YouTube, so you&apos;re not typing exercise
              names into search between sets.
            </p>
          </div>
          {/* 560×540 stage scaled to fit */}
          <div className="relative h-[324px] sm:h-[513px] lg:h-[459px] min-[1400px]:h-[540px]">
            <div className="absolute left-1/2 top-0 origin-top -translate-x-1/2 scale-[0.6] sm:scale-95 lg:left-auto lg:right-0 lg:origin-top-right lg:translate-x-0 lg:scale-[0.85] min-[1400px]:scale-100">
              <TutorialMockup />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={`${container} flex flex-col gap-11 pt-24 lg:pt-[100px]`}>
          <h2 className={`${h2} text-center`}>Lifters notice the difference.</h2>
          <div className="grid items-center gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className={`m-0 box-border flex flex-col gap-5 rounded-[28px] p-8 md:min-h-[280px] ${
                  t.highlight ? "bg-jl-accent text-jl-onaccent" : "bg-jl-s1 text-jl-text"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-6 text-[56px] font-bold leading-[0.6] ${t.highlight ? "text-jl-onaccent" : "text-jl-ink"}`}
                >
                  “
                </span>
                <blockquote
                  className={`m-0 flex-1 leading-[1.4] tracking-[-0.01em] ${
                    t.highlight ? "text-2xl font-semibold" : "text-[19px] font-medium"
                  }`}
                >
                  {t.quote}
                </blockquote>
                <figcaption className={`text-sm ${t.highlight ? "text-[rgba(11,11,12,0.65)]" : "text-jl-muted"}`}>
                  Long term user
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Meet Logan */}
        <section
          id="logan"
          className={`${container} grid scroll-mt-6 items-center gap-10 pt-24 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-[60px] lg:pt-[90px]`}
        >
          <div className="flex flex-col gap-4">
            <span className={`${eyebrow} text-jl-ink`}>MEET LOGAN</span>
            <h2 className={h2}>Your gym buddy who never forgets a set.</h2>
            <p className="m-0 text-lg leading-normal text-jl-muted">
              Logan remembers last time, cheers your PRs and tells you how each lift went. No feeds, no pep talks. Just a
              beaver who logs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {moods.map((m) => (
              <div key={m.img} className="flex flex-col items-center gap-1.5 rounded-[28px] bg-jl-s1 px-3 pb-5 pt-[18px]">
                <Image
                  src={`/images/logan/${m.img}.webp`}
                  alt={m.alt}
                  width={190}
                  height={190}
                  className="aspect-square h-auto w-full max-w-[190px] object-contain"
                />
                <span className="text-center text-sm font-semibold sm:text-base">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className={`${container} grid scroll-mt-6 gap-10 pt-24 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20 lg:pt-[110px]`}
        >
          <div className="flex flex-col gap-4">
            <h2 className={h2}>Questions, answered.</h2>
            <p className="m-0 text-[17px] leading-normal text-jl-muted">
              Something else?{" "}
              <a href={CONTACT_URL} className="font-semibold text-jl-ink underline">
                Contact us
              </a>
            </p>
          </div>
          <div className="grid content-start gap-x-12 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="flex flex-col gap-2 border-t border-jl-line py-[26px]">
                <h3 className="m-0 text-[19px] font-semibold tracking-[-0.01em]">{f.q}</h3>
                <p className="m-0 text-base leading-normal text-jl-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="download" className={`${container} scroll-mt-6 pt-20 lg:pt-28`}>
          <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[40px] bg-jl-frame px-6 pt-12 text-[#F4F4F5] sm:px-12 md:flex-row md:px-20 md:py-0 lg:h-[440px]">
            <div className="relative flex flex-col gap-[22px] md:py-16">
              <h2 className="m-0 text-[52px] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[72px]">
                Ready to
                <br />
                <span className="text-jl-accent">just log?</span>
              </h2>
              <p className="m-0 text-[19px] text-[#A1A1AA]">Join 10,000+ lifters who ditched the bloated apps.</p>
              <StoreButtons />
            </div>
            <Image
              src="/images/logan/logan-crushed-it.webp"
              alt="Logan cheering"
              width={320}
              height={320}
              className="relative h-auto w-[240px] object-contain sm:w-[320px]"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${container} flex flex-col gap-8 py-16 text-[15px] md:flex-row md:items-center md:gap-10 lg:py-24`}>
        <div className="flex items-center gap-3">
          <Logo size={30} radius={7} />
          <span className="flex flex-col">
            <span className="text-[17px] font-semibold">Justlog</span>
            <span className="text-sm text-jl-muted">The opposite of a complicated fitness app.</span>
          </span>
        </div>
        <nav aria-label="Footer" className="flex flex-1 flex-wrap gap-x-7 gap-y-3 md:justify-end">
          <Link href="/privacy" className="text-jl-muted transition-colors hover:text-jl-text">Privacy</Link>
          <Link href="/terms" className="text-jl-muted transition-colors hover:text-jl-text">Terms</Link>
          <a href={CONTACT_URL} className="text-jl-muted transition-colors hover:text-jl-text">
            Contact
          </a>
          <a href={FEEDBACK_URL} target="_blank" rel="noopener noreferrer" className="text-jl-muted transition-colors hover:text-jl-text">
            Send feedback
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-jl-text">
            @justlogapp
          </a>
        </nav>
      </footer>
    </div>
  );
}
