import Image from "next/image";
import type { CSSProperties } from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/workout-tracking-justlog/id6749898793";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rimapps.justlog";
export const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/just-log?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-just-log-2";
export const UNEED_URL = "https://www.uneed.best/best-products-by-tag/tracking";
export const CONTACT_URL = "mailto:justlogapp@gmail.com";
export const FEEDBACK_URL = "https://tally.so/r/w4y9ao";
export const INSTAGRAM_URL = "https://instagram.com/justlogapp";

/** A phone frame showing a 390×844 app screen, sized by its outer width. */
export function Phone({
  screen,
  width,
  radius = 46,
  className = "",
  style,
  priority = false,
}: {
  screen: string;
  width: number;
  radius?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}) {
  const inner = width - 16;
  return (
    <div
      aria-hidden="true"
      className={`jl-phone-shadow shrink-0 box-border bg-jl-frame p-2 ${className}`}
      style={{ width, height: Math.round((inner * 844) / 390) + 16, borderRadius: radius, ...style }}
    >
      <div className="relative h-full w-full overflow-hidden" style={{ borderRadius: radius - 8 }}>
        <Image
          src={`/images/screens/${screen}.png`}
          alt=""
          width={780}
          height={1688}
          sizes={`${inner}px`}
          priority={priority}
          className="block h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="flex h-14 items-center gap-2.5 rounded-[11px] border border-[#A6A6A6] bg-black pl-[17px] pr-5 text-white transition-transform hover:scale-[1.03]"
      style={{ fontFamily: "-apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
        <path
          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
          fill="#fff"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.02em]">Download on the</span>
        <span className="mt-px text-[25px] font-semibold tracking-[-0.02em]">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayButton() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className="flex h-14 items-center gap-[11px] rounded-[11px] border border-[#A6A6A6] bg-black pl-[17px] pr-5 text-white transition-transform hover:scale-[1.03]"
      style={{ fontFamily: "'Product Sans', 'Google Sans', Roboto, Arial, sans-serif" }}
    >
      <svg aria-hidden="true" width="27" height="27" viewBox="0 0 24 24">
        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z" fill="#FBBC04" />
        <path d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" fill="#4285F4" />
        <path d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" fill="#34A853" />
        <path d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" fill="#EA4335" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[11px] tracking-[0.06em]">GET IT ON</span>
        <span className="mt-0.5 text-2xl font-medium tracking-[-0.01em]">Google Play</span>
      </span>
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <AppStoreButton />
      <GooglePlayButton />
    </div>
  );
}

export function ProductHuntBadge({ size = "sm" }: { size?: "sm" | "lg" }) {
  const lg = size === "lg";
  return (
    <a
      href={PRODUCT_HUNT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Product Hunt: #2 Product of the Day"
      className={`flex shrink-0 items-center border border-[#E5E5E0] bg-white text-[#111113] ${
        lg ? "h-[62px] gap-3 rounded-[14px] pl-3 pr-[21px]" : "h-[50px] gap-2.5 rounded-[11px] pl-2.5 pr-[17px]"
      }`}
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <svg aria-hidden="true" width={lg ? 38 : 31} height={lg ? 38 : 31} viewBox="0 0 40 40">
        <path d="M13 22 8 36l6-3 3 6 5-14z" fill="#DA552F" />
        <path d="M27 22l5 14-6-3-3 6-5-14z" fill="#FF6154" />
        <circle cx="20" cy="16" r="13" fill="#B9BCC2" />
        <circle cx="20" cy="16" r="10.5" fill="#D8DADF" />
        <text x="20" y="21" textAnchor="middle" fontFamily="Helvetica,Arial,sans-serif" fontWeight="700" fontSize="14" fill="#6B6E75">
          2
        </text>
      </svg>
      <span className="flex flex-col leading-[1.05]">
        <span className={`font-bold tracking-[0.04em] ${lg ? "text-[11px]" : "text-[9px]"}`}>PRODUCT HUNT</span>
        <span className={`mt-0.5 font-bold tracking-[-0.01em] ${lg ? "text-xl" : "text-base"}`}>#2 Product of the Day</span>
      </span>
    </a>
  );
}

export function Check({ size = 24 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full bg-jl-accent text-jl-onaccent"
      style={{ width: size, height: size }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

export function Cross() {
  return (
    <span aria-hidden="true" className="flex text-jl-faint">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    </span>
  );
}
