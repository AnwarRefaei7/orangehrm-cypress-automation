const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true, //عشان نسحب فيديو مثلا للنكد ان 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false //خاص بالرقرشن تست
    
  },
});
