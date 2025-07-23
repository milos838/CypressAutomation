/// <reference types='Cypress'/>
import HomePage from "./pageObjects/HomePage"
describe('TestProject suite', function()
{

    
    before(function() 
    {
        cy.fixture('testproject').then(function(data)
    {
        this.data=data

    })
        
    })

    it('Test Case - Log In with email and password', function()
    {
        /*
        Test case STR:
        1. Open URL 'https://gigatron.rs/' 
        2. Click on 'Prijava' option
        3. Enter 'milostest83@gmail.com' into Email adresa field
        4. Enter '******' into Lozinka field
        5. Click on 'Prijavite se' button
        6. Verify URL on which user is landed                    ER: https://gigatron.rs/korisnik
        7. Search for 'E-mail' field under 'Moji Podaci' tab
        8. Verify displayed email data                           ER: E-mail:milostest83@gmail.com

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

        //URL validation
        cy.url().should('eq','https://gigatron.rs/korisnik')

        //Email validation
        cy.get('.truncate').should('have.text','E-mail:milostest83@gmail.com')
    })
    //House cleaning
    it('Logout User', function () {
        cy.get(
          '#header__center__login__and__cart > .user > .user-opt > :nth-child(2) > .user-identity-name'
        ).trigger('mouseover');
        cy.get('.drop-menu-holder').contains('Odjavi se').click({ force: true });
      });
})