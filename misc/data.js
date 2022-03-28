export default {
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
  flavorRules: [
    (v) => !!v || "Flavor is required",
    (v) => (v && v.length < 100) || "Must be under 100 characters",
  ],
  selectScore: null,
  scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  scoreRules: [(v) => !!v || "Score is required"],
  selectBrand: "",
  otherBrand: "",
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
    "Other",
  ],
  brandRules: [(v) => !!v || "Brand is required"],
  review: "",
  reviewRules: [
    (v) => !!v || "Review is required",
    (v) => (v && v.length < 100) || "Must be under 100 characters",
  ],
  sparklingWaters: [
    {
      flavor: "Lemon",
      brand: "La Croix",
      rating: 10,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Grape",
      brand: "bubly",
      rating: 5,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Orange",
      brand: "Polar",
      rating: 8,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Cherry",
      brand: "Waterloo",
      rating: 6,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Green Apple",
      brand: "Schweppes",
      rating: 5,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Lime",
      brand: "Simply Balanced",
      rating: 7,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Cucumber",
      brand: "Spindrift",
      rating: 6,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Pink Grapefruit",
      brand: "Perrier",
      rating: 5,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Citrus",
      brand: "Adirondack",
      rating: 6,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
    {
      flavor: "Pomegranate Lemonade",
      brand: "Perrier",
      rating: 8,
      review: "Great, but there is still room for improvement. Keep it up!",
    },
  ],
  editMode: false,
  editItemIndex: null,
  editItem: {
    flavor: "",
    brand: "",
    rating: null,
    review: "",
  },
};
