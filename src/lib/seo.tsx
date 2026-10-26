import { APP_STORE_URL, INSTAGRAM_URL, PLAY_STORE_URL } from "@/components/landing";

export const SITE_URL = "https://justlog.app";
export const SITE_NAME = "Justlog";
export const HOME_TITLE = "Justlog – Simple Workout Tracker & Gym Log";
export const HOME_DESCRIPTION =
  "Justlog puts last week's numbers on every set, so you always know what to beat. A free workout log for iPhone and Android.";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/images/logan/icon-final.png`;

/**
 * Organization, WebSite and WebPage, linked by @id. Both store listings are in the Organization's sameAs.
 * MobileApplication is left out on purpose: Google treats it as invalid without aggregateRating or review,
 * and a rating may only be marked up if the same rating and count are shown on the page.
 */
export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Alifba LTD",
      brand: { "@type": "Brand", name: SITE_NAME },
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
      email: "justlogapp@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "justlogapp@gmail.com",
        availableLanguage: "en",
      },
      sameAs: [
        INSTAGRAM_URL,
        "https://www.producthunt.com/products/just-log",
        "https://www.indiehackers.com/product/justlog",
        APP_STORE_URL,
        PLAY_STORE_URL,
      ],
    },
    { "@type": "WebSite", "@id": WEBSITE_ID, name: SITE_NAME, url: `${SITE_URL}/`, inLanguage: "en", publisher: { "@id": ORG_ID } },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      inLanguage: "en",
    },
  ],
};

/** FAQPage built from the same Q&A the page renders, so the markup always matches what's visible. */
export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function legalPage(path: "/privacy" | "/terms", name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
