/**
 * Curated Unsplash photos matching the site's themes.
 * All images are free for commercial use under the Unsplash License.
 *
 * If a specific URL ever stops resolving, the SmartImage component
 * hides the broken result and the underlying gradient/SVG art stays
 * visible so the layout never looks empty.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = {
  src: u("1610375461246-83df859d849d"),
  alt: "Goldbarren im warmen Licht",
};

/** Large background on the dark hero overlay (used very subtly with vignette) */
export const heroAmbient = {
  src: u("1620714223084-8fcacc6dfd8d", 1800),
  alt: "Warmes Licht auf Gold",
};

export const collage = {
  src: u("1605100804763-247f67b3557e", 1400),
  alt: "Goldschmuck elegant arrangiert",
};

export const tiles = {
  goldBars: {
    src: u("1610375461246-83df859d849d", 1200),
    alt: "Gestapelte Feingoldbarren 999.9",
  },
  jewelry: {
    src: u("1599707367072-cd6ada2bc375", 1200),
    alt: "Feine Goldkette mit Ring und Brosche",
  },
  silver: {
    src: u("1594044516047-96d2b8b80e11", 1200),
    alt: "Antikes Silberbesteck und Silbergefäße",
  },
  antiques: {
    src: u("1509048191080-d2984bad6ae5", 1200),
    alt: "Antike goldene Taschenuhr auf Holz",
  },
  gems: {
    src: u("1515562141207-7a88fb7ce338", 1200),
    alt: "Geschliffener Diamantring mit funkelnden Facetten",
  },
};

/** Images for the "Was wir ankaufen" editorial split layout */
export const editorial = {
  gold: {
    src: u("1610375461246-83df859d849d", 1400),
    alt: "Feingold in warmem Licht",
  },
  jewelry: {
    src: u("1605100804763-247f67b3557e", 1400),
    alt: "Exklusiver Goldschmuck",
  },
  watch: {
    src: u("1509048191080-d2984bad6ae5", 1400),
    alt: "Antike goldene Taschenuhr",
  },
  diamond: {
    src: u("1515562141207-7a88fb7ce338", 1400),
    alt: "Geschliffener Diamant",
  },
};

export const earring = {
  src: u("1535632787350-4e68ef0ac584", 1200),
  alt: "Einzelner edler Ohrring im Porträtstil",
};

export const blackForest = {
  src: u("1528312635006-8ea0bc49ec63", 1600),
  alt: "Schwarzwald-Panorama mit Tannen",
};

/** Aktionstage CTA dark photo banner */
export const aktionstageBanner = {
  src: u("1624365168968-8ddc9e0baba5", 1800),
  alt: "Goldene Münzen und Schmuck in warmem Studio-Licht",
};

/** Testimonial / editorial quote portrait */
export const editorialPortrait = {
  src: u("1511632765486-a01980e01a18", 1200),
  alt: "Zufriedener Kunde mit edlem Erbstück",
};

/** Secondary lifestyle images */
export const secondary = {
  goldCoins: {
    src: u("1620714223084-8fcacc6dfd8d", 1200),
    alt: "Sammlung von Goldmünzen",
  },
  pearls: {
    src: u("1611652022419-a9419f74343d", 1200),
    alt: "Perlenkette auf hellem Untergrund",
  },
  watch: {
    src: u("1587925148663-5328a8a2f0d2", 1200),
    alt: "Luxusuhr in Nahaufnahme",
  },
};
