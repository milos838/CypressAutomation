const { defineConfig } = require('cypress')


module.exports = defineConfig({

//ovde upisujemo override comande za ceo projekat

  projectId: "fn8kdd",

  
  env: {
    //deklarisanje defaultnog URLa
    url: "https://gigatron.rs/",
    //deklarisanje dafaultnog mejla
    email: "milostest83@gmail.com",
    //deklarisanje defaultne lozinke
    password: "test1test1"

  },
  //povecavanje timeout-a
  defaultCommandTimeout: 5000,
  //dodavanje reportera
  reporter: 'cypress-mochawesome-reporter',
  //podesavanje viewporta za sve app
  viewportHeight: 1980,
  viewportWidth: 1080,
  


  e2e: {
    
    specPattern: 'C:/Users/Milos/CypressAutomation/cypress/e2e'

      
    },

  
    
  },
);
