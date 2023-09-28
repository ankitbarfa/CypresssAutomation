const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  env: {
    url:"https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   // specPattern: 'cypress/integration/training/*.js'
   specPattern: 'cypress/integration/examples/*.js'
  },
});
