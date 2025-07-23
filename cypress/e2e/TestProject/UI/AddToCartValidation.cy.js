/// <reference types='Cypress'/>
import HomePage from "./pageObjects/HomePage"

describe('Add item to Cart', function()
{

    before(function() 
    {
        cy.fixture('testproject').then(function(data)
    {
        this.data=data

    })
        
    })

    it('Test Case - Add to Cart functionality', function()

    /*
        Test case STR:
        1. Open URL 'https://gigatron.rs/' 
        2. Click on 'Prijava' option
        3. Enter 'milostest83@gmail.com' into Email adresa field
        4. Enter '*******' into Lozinka field
        5. Click on 'Prijavite se' button
        6. Click on 'Gaming' tab
        7. Click on 'Play Station' from 'Konzole'
        8. Click on 'Cart' button for item 'SONY konzola PLAYSTATION 4 SLIM 500GB -'
        9. Click on 'Korpa' icon
        10. Verify item displayed in the Cart                             Expected result: 'SONY konzola PLAYSTATION 4 SLIM 500GB - item is added to the Cart 
        */
    {


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

        //Clicking on Gaming tab
        cy.get('#header-nav > :nth-child(4) > a').click()

        //Click on Play Station link
        cy.get(':nth-child(1) > :nth-child(3) > .menu-component > :nth-child(1) > :nth-child(1) > ul > :nth-child(1) > .menu_com_link').click({ force: true })

        //Click on 'Cart' button for item 'SONY konzola PLAYSTATION 4 SLIM 500GB -'
        cy.get('.item').each(($el, index, $list) =>
        {
        if($el.text().includes(this.data.console))
        {
        cy.get('.item__bottom__cart').eq(index).click()
        }
}
)

        cy.wait(2000)
        
        //Click on 'Korpa' icon
        cy.contains('Korpa').click()

        //Filtering validation
        cy.get('.titleItemLink').should('contain',this.data.console)
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