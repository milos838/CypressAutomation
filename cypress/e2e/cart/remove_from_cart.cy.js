/// <reference types='Cypress'/>
import HomePage from "../TestProject/UI/pageObjects/HomePage";
describe('Cart - Item removal', function () {
  const homePage = new HomePage();

  before(() => {
    cy.visit(Cypress.env('url'));
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it('Test Case - Remove item from Cart functionality', function () {
    //There are 2x 'Prijava' links, we need to select visible one in order to reach log in window
    cy.get('.hd-reg:visible').click();

    //Populating Email and Password fields
    homePage.getEmail().type(Cypress.env('email'));
    homePage.getPassword().type(Cypress.env('password'));
    //Submiting Log In
    homePage.getSubmit().click();
    cy.wait(1000);
    // Adding multiple items to Cart to create precondition
    cy.get('.burger-button').click();
    cy.contains('TV, audio, video').should('be.visible').click({ force: true });
    cy.contains('Zvučnici').click();
    cy.wait(2000);

    //dodavanje bilo koja 2 itema iz tabele
    cy.get('.item__bottom > .item__bottom__cart > button')
      .then(function ($items) {
        return Cypress._.sampleSize($items.toArray(), 2);
      })
      .click({ multiple: true });

    //Click on 'Korpa' icon
    cy.contains('Korpa').click({ force: true });
    cy.wait(2000);

    // Check that there are 2 elements in cart
    cy.get('.col-12 > .remove-item').should('have.length', 2);

    // Remove one
    cy.get('.col-12 > .remove-item').eq(0).click();

    // Confirm that there is only 1 left
    cy.get('.col-12 > .remove-item').should('have.length', 1);

    // Remove last one
    cy.get('.col-12 > .remove-item').click();

    // //Item removal validation
    cy.get('.col > h3').should('contain', 'Vaša korpa je prazna');
  });

  it('Logout User', function () {
    cy.get(
      '#header__center__login__and__cart > .user > .user-opt > :nth-child(2) > .user-identity-name'
    ).trigger('mouseover');
    cy.get('.drop-menu-holder').contains('Odjavi se').click({ force: true });
  });
});
