const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://d28dp6fycxce58.cloudfront.net",
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
