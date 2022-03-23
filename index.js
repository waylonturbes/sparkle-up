let sparkleUp = new Vue({
  el: "#sparkle-up",
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  }),
  data: {
    appName: "Sparkle Up",
    icons: [
      {
        svg: "mdi-linkedin",
        link: "https://www.linkedin.com/in/waylon-turbes/",
      },
      { svg: "mdi-github", link: "https://github.com/waylonturbes" },
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
  },
});
