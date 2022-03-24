export const data = {
  appName: "Sparkle Up",
  icons: [
    {
      svg: "mdi-linkedin",
      link: "https://www.linkedin.com/in/waylon-turbes/",
    },
    { svg: "mdi-github", link: "https://github.com/waylonturbes" },
  ],
  valid: true,
  flavor: "",
  flavorRules: [(v) => !!v || "Flavor is required"],
  selectScore: null,
  scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  scoreRules: [(v) => !!v || "Score is required"],
  selectBrand: null,
  brands: [
    "La Croix",
    "bubly",
    "Polar",
    "Waterloo",
    "Schweppes",
    "Simply Balanced",
    "Spindrift",
    "Perrier",
    "Adirondack",
    "Perrier",
  ],
  brandRules: [(v) => !!v || "Brand is required"],
  review: "",
  reviewRules: [
    (v) => !!v || "Review is required",
    (v) => (v && v.length > 20) || "Must be 20 or more character",
  ],
  sparklingWaters: [
    {
      flavor: "Lemon",
      brand: "La Croix",
      rating: 10,
    },
    {
      flavor: "Grape",
      brand: "bubly",
      rating: 5,
    },
    {
      flavor: "Orange",
      brand: "Polar",
      rating: 8,
    },
    {
      flavor: "Cherry",
      brand: "Waterloo",
      rating: 6,
    },
    {
      flavor: "Green Apple",
      brand: "Schweppes",
      rating: 5,
    },
    {
      flavor: "Lime",
      brand: "Simply Balanced",
      rating: 7,
    },
    {
      flavor: "Cucumber",
      brand: "Spindrift",
      rating: 6,
    },
    {
      flavor: "Pink Grapefruit",
      brand: "Perrier",
      rating: 5,
    },
    {
      flavor: "Citrus",
      brand: "Adirondack",
      rating: 6,
    },
    {
      flavor: "Pomegranate Lemonade",
      brand: "Perrier",
      rating: 8,
    },
  ],
};
