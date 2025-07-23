/// <reference types='Cypress'/>
import HomePage from "./pageObjects/HomePage"

describe('Filter functionality', function()
{
    before(function() 
    {
        cy.fixture('testproject').then(function(data)
    {
        this.data=data

    })
        
    })
    it('Test Case - Filter product with dropdown list and check box', function()
    {
        /*
        Test case STR:
        1. Open URL 'https://gigatron.rs/' 
        2. Click on 'Prijava' option
        3. Enter 'milostest83@gmail.com' into Email adresa field
        4. Enter '******' into Lozinka field
        5. Click on 'Prijavite se' button
        6. Click on 'Proizvodi'
        7. Select 'Klima Uredjaji' from 'Proizvodi'
        8. Select 'Inverter Klime'
        9. Filter 'Gree' items in the view
        10. Verify displayed list of items                            Expected result: Only 'Gree' items from section 'Inverter Klime' are displayed in the view 
        */

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        

        const homePage = new HomePage()
        homePage.getURL()

        //There are 2x 'Prijava' links, we need to select visible one in order to reach log in window
        cy.get('.hd-reg:visible').click()
        
        //Populating Email and Password fields
        homePage.getEmail().type(Cypress.env('email'))
        homePage.getPassword().type(Cypress.env('password'))

        //Submiting Log In
        homePage.getSubmit().click()

        cy.wait(1000)

        //Clicking on hamburger menu
        cy.get('.burger-button').click()

        //Selecting 'Klima uredjaji' section
        
        cy.contains('Klima uređaji').should('be.visible').click({ force: true })

        //Filtering to 'Inverter klime'
        cy.contains('Inverter klime').click({ force: true })

        //Selecting 'Gree' check box
        cy.contains('Gree').click({ force: true })

        //Filtering validation
        cy.get('.selected-filter-text').should('have.text',"Gree")

        
    })
    //House cleaning
    it('Logout User', function () {
        cy.get(
          '#header__center__login__and__cart > .user > .user-opt > :nth-child(2) > .user-identity-name'
        ).trigger('mouseover');
        cy.get('.drop-menu-holder').contains('Odjavi se').click({ force: true });
      });
}
)
