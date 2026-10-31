import Image from "next/image";
import {
  CONTACT_URL,
  Check,
  Cross,
  Phone,
  PRODUCT_HUNT_URL,
  StoreButtons,
  UNEED_URL,
} from "@/components/landing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FeatureStory } from "@/components/feature-story";
import { ShareStoryMockup, TutorialMockup } from "@/components/showcase";
import { WidgetShowcase } from "@/components/widgets";
import { JsonLd, faqPage, homeGraph } from "@/lib/seo";

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

// Shown greyscale in a single strip; colour comes back on hover.
const featuredIn = [
  {
    caption: "#2 Product of the Day",
    href: PRODUCT_HUNT_URL,
    logo: (
      <>
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"
            fill="#DA552F"
          />
        </svg>
        Product Hunt
      </>
    ),
  },
  {
    caption: "Top tracking apps of the year",
    href: UNEED_URL,
    logo: (
      <span className="text-[24px] font-black tracking-[0.02em]" style={{ fontFamily: "Arial, sans-serif" }}>
        UNEED<span className="ml-0.5 align-top text-sm text-[#F5A623]">✦</span>
      </span>
    ),
  },
  {
    caption: "Show HN",
    logo: (
      <>
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
          <path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" fill="#FF6600" />
        </svg>
        Hacker News
      </>
    ),
  },
  {
    caption: "Built in public",
    logo: (
      <>
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0Zm5.4 17.2h2.4V6.8H5.4v10.4Zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4v10.4Z" fill="#0E2150" />
        </svg>
        Indie Hackers
      </>
    ),
  },
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
  { q: "Will you add meal tracking?", a: "No. There are great food apps. We’re a great log." },
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
      src="/images/logan/icon-96.webp"
      alt="Justlog app icon"
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
      <SiteHeader container={container} />

      <JsonLd data={homeGraph} />
      <JsonLd data={faqPage(faqs)} />

      <main>
        {/* Hero */}
        <section className="rounded-b-[40px] bg-jl-accent pt-20 lg:pt-24">
          <div className={`${container} grid items-center gap-10 pb-10 pt-8 lg:min-h-[760px] lg:grid-cols-2 lg:pb-6 lg:pt-0`}>
          <div className="flex flex-col gap-7">
            <h1 className="m-0 text-[60px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[80px] xl:text-[96px]">
              Just log.
              <br />
              <span className="mt-2.5 inline-block -rotate-2 rounded-[22px] bg-jl-onaccent px-[18px] pb-1.5 text-jl-accent">
                No fluff.
              </span>
            </h1>
            <p className="m-0 max-w-[500px] text-lg leading-[1.45] text-jl-onaccent/70 sm:text-[21px]">
              Last week’s numbers are waiting on every set. Beat them, tick it off, rest.
            </p>
            <StoreButtons />
            <div className="flex items-center gap-5 text-[15px] text-jl-onaccent/70">
              <span className="flex items-center gap-1.5">
                <span className="font-mono font-semibold text-jl-text">4.7</span>
                <span className="tracking-[2px] text-jl-onaccent" aria-label="5 stars">★★★★★</span>
              </span>
              <span className="h-1 w-1 rounded-sm bg-jl-onaccent/40" />
              <span>
                <span className="font-mono font-semibold text-jl-text">10,000+</span> downloads
              </span>
            </div>
          </div>

          {/* Hero visual: a 580×720 stage scaled to fit */}
          <div className="relative h-[410px] sm:h-[600px] lg:h-[504px] xl:h-[620px] min-[1400px]:h-[720px]">
            <div className="absolute left-1/2 top-0 h-[720px] w-[580px] origin-top -translate-x-1/2 scale-[0.56] sm:scale-[0.83] lg:left-auto lg:right-0 lg:origin-top-right lg:translate-x-0 lg:scale-[0.7] xl:scale-[0.86] min-[1400px]:scale-100">
              <div aria-hidden="true" className="jl-glow-white absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full" />
              <div className="absolute left-[30px] top-[60px] -rotate-6">
                <Phone screen="main" width={297} priority alt="Justlog home screen with this week’s workouts and saved routines" />
              </div>
              <div className="absolute right-5 top-5">
                <Phone screen="workout" width={320} priority alt="Justlog active workout showing last and best sets for Weighted Pull Ups" />
              </div>
              <Image
                src="/images/logan/logan-idle.webp"
                alt="Logan the beaver waving"
                width={270}
                height={270}
                priority
                className="absolute -left-[70px] bottom-2.5 z-[3] h-[270px] w-[270px] object-contain max-sm:-left-[10px]"
              />
              <div className="absolute -left-[60px] bottom-[286px] z-[4] max-sm:left-0 flex w-60 flex-col gap-[3px] rounded-[22px] bg-jl-s1 px-4 py-3.5 shadow-[0_12px_30px_rgba(17,17,19,0.12)]">
                <span className="text-lg font-bold tracking-[-0.01em]">Hey, I’m Logan 👋</span>
                <span className="text-sm leading-[1.4] text-jl-muted">I remember your numbers so you don’t have to.</span>
                <span aria-hidden="true" className="absolute -bottom-[7px] left-24 h-4 w-4 rotate-45 rounded-[3px] bg-jl-s1" />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* As featured in */}
        <section aria-label="As featured in and what lifters say" className={`${container} flex flex-col gap-6 pt-16 lg:pt-20`}>
          <span className={`${eyebrow} text-jl-muted`}>AS FEATURED IN</span>
          <ul className="m-0 grid list-none grid-cols-2 gap-y-8 p-0 md:grid-cols-4 md:divide-x md:divide-jl-line">
            {featuredIn.map((f) => {
              const body = (
                <>
                  <span className="flex h-9 items-center gap-2 text-[19px] font-bold leading-none text-jl-text">
                    {f.logo}
                  </span>
                  <span className="text-[13px] text-jl-muted">{f.caption}</span>
                </>
              );
              return (
                <li key={f.caption} className="flex md:px-8 md:first:pl-0">
                  {f.href ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-2 opacity-70 grayscale transition-[filter,opacity] hover:opacity-100 hover:grayscale-0"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex flex-col gap-2 opacity-70 grayscale transition-[filter,opacity] hover:opacity-100 hover:grayscale-0">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <h2 className={`${h2} mt-14`}>Heard on the gym floor.</h2>
          <div className="mt-4 grid w-full items-stretch gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className={`m-0 box-border flex flex-col gap-5 rounded-[28px] p-8 md:min-h-[240px] ${
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

        {/* Why */}
        <section id="why" className={`${container} flex scroll-mt-28 flex-col gap-12 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
            <h2 className={`${h2} max-w-[640px]`}>Other apps want your attention. We want your next rep.</h2>
            <p className="m-0 max-w-[440px] text-lg leading-normal text-jl-muted">
              Justlog is a free workout tracker for iPhone and Android that shows your last and best numbers on every set.
              No feeds, coaches, streak guilt or upsells. We kept the log, because the log is what makes you stronger.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-[22px] rounded-[28px] bg-jl-s1 p-7 sm:p-9 md:min-h-[400px]">
              <span className="text-[15px] font-semibold text-jl-muted">Other apps</span>
              <ul className="m-0 flex list-none flex-col gap-[18px] p-0">
                {otherApps.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[17px] text-jl-muted">
                    <Cross />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[22px] rounded-[28px] bg-jl-soft p-7 sm:p-9 md:min-h-[400px]">
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
        <section id="features" className={`${container} flex scroll-mt-28 flex-col gap-12 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className={`${eyebrow} text-jl-ink`}>FEATURES</span>
            <h2 className={h2}>
              Built for the 90 seconds
              <br className="hidden sm:block" /> between sets.
            </h2>
          </div>
        </section>
        <FeatureStory />

        {/* More than lifting */}
        <section aria-labelledby="more-heading" className={`${container} flex flex-col gap-12 pt-24 lg:pt-[110px]`}>
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className={`${eyebrow} text-jl-ink`}>MORE THAN LIFTING</span>
            <h2 id="more-heading" className={h2}>
              Not just
              <br className="hidden sm:block" /> sets and reps.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Tabata */}
            <article id="tabata" className="flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-[32px] bg-[#111113] p-6 text-[#F4F4F5] sm:p-8">
              <div className="flex flex-col gap-3">
                <span className="flex h-[30px] items-center self-start rounded-[15px] bg-jl-accent px-3 text-[13px] font-semibold tracking-[0.08em] text-jl-onaccent">
                  NEW · TABATA
                </span>
                <h3 className="m-0 text-[30px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">Morning cardio. Evening lifts.</h3>
                <p className="m-0 max-w-[460px] text-base leading-normal text-[#A1A1AA] sm:text-lg">
                  Tabata has its own timers and history, so jump rope never clutters your bench log.
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <div className="relative h-[640px] w-[600px] [zoom:0.48] sm:[zoom:0.72] md:[zoom:0.8] lg:[zoom:0.62] xl:[zoom:0.78] min-[1400px]:[zoom:0.84]">
                  <div aria-hidden="true" className="jl-glow absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full opacity-60" />
                  <div className="absolute left-[300px] top-0 z-[1] rotate-[5deg]">
                    <Phone screen="tabata-done" width={297} alt="Justlog Tabata session summary with jumps per round" />
                  </div>
                  <div className="absolute left-10 top-5 z-[2] -rotate-[5deg]">
                    <Phone screen="tabata-run" width={297} alt="Justlog Tabata timer counting down a jump rope round" />
                  </div>
                </div>
              </div>
            </article>

            {/* Share */}
            <article id="share" className="flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-[32px] bg-[#EEFFB8] p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <span className={`${eyebrow} text-jl-ink`}>SHARE</span>
                <h3 className="m-0 text-[30px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">Turn your stats into a story.</h3>
                <p className="m-0 max-w-[460px] text-base leading-normal text-[#4B5243] sm:text-lg">
                  Finish a workout and get a story-ready image with your time, volume and PRs, on your own photo if you
                  like. Post to Instagram, TikTok or Snapchat.
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <div className="[zoom:0.55] sm:[zoom:0.72] md:[zoom:0.78] lg:[zoom:0.6] xl:[zoom:0.72] min-[1400px]:[zoom:0.8]">
                  <ShareStoryMockup />
                </div>
              </div>
            </article>

            {/* Widgets */}
            <article id="widgets" className="flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-[32px] bg-[#1F2A06] p-6 text-[#F4F4F5] sm:p-8">
              <div className="flex flex-col gap-3">
                <span className={`${eyebrow} text-jl-accent`}>WIDGETS</span>
                <h3 className="m-0 text-[30px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">Your week, on your home screen.</h3>
                <p className="m-0 max-w-[460px] text-base leading-normal text-[#B9C29E] sm:text-lg">
                  Weekly goal, streak, next workout and a +1 counter, right on your home screen.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="sm:w-[872px] sm:[zoom:0.58] md:[zoom:0.73] lg:[zoom:0.44] xl:[zoom:0.555] min-[1400px]:[zoom:0.6]">
                  <WidgetShowcase bare />
                </div>
              </div>
            </article>

            {/* How to */}
            <article id="howto" className="flex scroll-mt-28 flex-col gap-6 overflow-hidden rounded-[32px] bg-jl-s1 p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <span className={`${eyebrow} text-jl-ink`}>HOW TO</span>
                <h3 className="m-0 text-[30px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">Not sure how? Watch it in one tap.</h3>
                <p className="m-0 max-w-[460px] text-base leading-normal text-jl-muted sm:text-lg">
                  Every exercise has a Watch now button that opens a short YouTube video. No typing into search with sweaty thumbs.
                </p>
              </div>
              <div className="mt-auto flex justify-center">
                <div className="[zoom:0.52] sm:[zoom:0.85] md:[zoom:0.9] lg:[zoom:0.68] xl:[zoom:0.85] min-[1400px]:[zoom:0.92]">
                  <TutorialMockup />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Switching from another app */}
        <section
          id="switch"
          className={`${container} grid scroll-mt-28 items-center gap-14 pt-24 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-20 lg:pt-[110px] xl:grid-cols-[minmax(0,1fr)_520px]`}
        >
          <div className="flex flex-col gap-[18px]">
            <span className={`${eyebrow} text-jl-ink`}>SWITCHING?</span>
            <h2 className={h2}>Coming from another app? We’ve got you.</h2>
            <p className="m-0 max-w-[520px] text-[19px] leading-normal text-jl-muted">
              Paste it from your notes, a trainer’s message or an AI chat, or import a CSV from your old app. Logan
              sorts it into exercises, sets and reps, and keeps your names as you wrote them.
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
              alt="Logan the beaver peeking over a log"
              width={140}
              height={140}
              className="absolute -right-2 -top-[70px] h-[100px] w-[100px] object-contain sm:-right-[50px] sm:h-[140px] sm:w-[140px]"
            />
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className={`${container} grid scroll-mt-28 gap-10 pt-24 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20 lg:pt-[110px]`}
        >
          <div className="flex flex-col gap-4">
            <h2 className={h2}>Questions, answered.</h2>
            <p className="m-0 text-[17px] leading-normal text-jl-muted">
              Something else?{" "}
              <a href={CONTACT_URL} className="font-semibold text-jl-ink underline">
                Contact us
              </a>
            </p>
            <figure className="m-0 mt-6 flex flex-col gap-3 rounded-[28px] bg-jl-s1 p-5">
              <div className="grid grid-cols-3 gap-2">
                {moods.map((m) => (
                  <div key={m.img} className="flex flex-col items-center gap-1">
                    <Image
                      src={`/images/logan/${m.img}.webp`}
                      alt={m.alt}
                      width={120}
                      height={120}
                      className="aspect-square h-auto w-full max-w-[120px] object-contain"
                    />
                    <span className="text-center text-[13px] font-semibold">{m.label}</span>
                  </div>
                ))}
              </div>
              <figcaption className="text-[15px] leading-normal text-jl-muted">
                <span className="font-semibold text-jl-text">Meet Logan.</span> He reacts to every lift, so you can tell
                how it went without reading a chart.
              </figcaption>
            </figure>
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

      </main>

      <SiteFooter container={container} />
    </div>
  );
}
