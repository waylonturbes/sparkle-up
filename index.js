let sparkleUp = new Vue({
  el: "#sparkle-up",
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#3f51b5",
          secondary: "#b0bec5",
          accent: "#8c9eff",
          error: "#b71c1c",
        },
      },
    },
  }),
  data: {
    appName: "Sparkle Up",
    sparklingWaters: [
      {
        flavor: "Lemon",
        brand: "La Croix",
      },
      {
        flavor: "Grape",
        brand: "bubly",
      },
      {
        flavor: "Orange",
        brand: "Polar",
      },
      {
        flavor: "Cherry",
        brand: "Waterloo",
      },
      {
        flavor: "Green Apple",
        brand: "Schweppes",
      },
      {
        flavor: "Lime",
        brand: "Simply Balanced",
      },
      {
        flavor: "Cucumber",
        brand: "Spindrift",
      },
      {
        flavor: "Pink Grapefruit",
        brand: "Perrier",
      },
      {
        flavor: "Citrus",
        brand: "Adirondack",
      },
      {
        flavor: "Pomegranate Lemonade",
        brand: "Perrier",
      },
    ],
  },
});
