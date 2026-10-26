import { APP_STORE_URL, INSTAGRAM_URL, PLAY_STORE_URL } from "@/components/landing";

export const SITE_URL = "https://justlog.app";
export const SITE_NAME = "Justlog";
export const HOME_TITLE = "Justlog – Simple Workout Tracker & Gym Log";
export const HOME_DESCRIPTION =
  "Justlog puts last week's numbers on every set, so you always know what to beat. A free workout log for iPhone and Android.";
export const APP_DESCRIPTION =
  "A minimalist workout tracker that shows last week's numbers on every set. No social feed, no meal plans, notifications only while you train.";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/images/logan/icon-final.png`;

const appOffer = (url: string) => ({ "@type": "Offer", price: "0", priceCurrency: "USD", url });

/** Organization, WebSite, WebPage and both store apps, linked by @id. Values match the public store listings. */
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
      about: [{ "@id": `${SITE_URL}/#app-ios` }, { "@id": `${SITE_URL}/#app-android` }],
      inLanguage: "en",
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app-ios`,
      name: SITE_NAME,
      alternateName: "Workout tracking : Justlog",
      description: APP_DESCRIPTION,
      operatingSystem: "iOS 17.6 or later",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Workout tracker",
      contentRating: "4+",
      softwareVersion: "2.1",
      datePublished: "2025-08-15",
      image: LOGO_URL,
      url: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      publisher: { "@id": ORG_ID },
      author: { "@id": ORG_ID },
      offers: appOffer(APP_STORE_URL),
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app-android`,
      name: SITE_NAME,
      alternateName: "Workout tracker Log - Justlog",
      description: APP_DESCRIPTION,
      operatingSystem: "Android",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Workout tracker",
      image: LOGO_URL,
      url: PLAY_STORE_URL,
      installUrl: PLAY_STORE_URL,
      publisher: { "@id": ORG_ID },
      author: { "@id": ORG_ID },
      offers: appOffer(PLAY_STORE_URL),
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
