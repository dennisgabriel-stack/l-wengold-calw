/**
 * Curated Unsplash photos matching the site's themes.
 * All images are free for commercial use under the Unsplash License.
 */

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = {
  src: u("1610375461246-83df859d849d"),
  alt: "Goldbarren im warmen Licht",
};

export const collage = {
  src: u("1624365168968-8ddc9e0baba5", 1400),
  alt: "Goldmünzen und Schmuck arrangiert",
};

export const tiles = {
  goldBars: {
    src: u("1610375461246-83df859d849d", 1200),
    alt: "Gestapelte Feingoldbarren 999.9",
  },
  jewelry: {
    src: u("1605100804763-247f67b3557e", 1200),
    alt: "Goldkette, Ringe und Schmuckstücke",
  },
  silver: {
    src: u("1583526241256-cb18e8fbfc4b", 1200),
    alt: "Antikes Silberbesteck und Silberteile",
  },
  antiques: {
    src: u("1518930259200-3e7a92c94c1a", 1200),
    alt: "Antike goldene Taschenuhr",
  },
  gems: {
    src: u("1599643478518-a784e5dc4c8f", 1200),
    alt: "Geschliffener Diamant mit funkelnden Facetten",
  },
};

export const earring = {
  src: u("1535632066927-ab7c9ab60908", 1200),
  alt: "Einzelner edler Ohrring mit Perle",
};

export const blackForest = {
  src: u("1528312635006-8ea0bc49ec63", 1600),
  alt: "Schwarzwald-Panorama mit Tannen",
};

/** Secondary lifestyle images for decorative usage */
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
