/// <reference types='Cypress'/>

// da bi mogli da testiramo frejmove moramo instalirati plugin a to se radi ukucavanjem koda u konzolu 'npm install -D cypress-iframe'
//nakon instaliranja plugina da bi frejm testiranje radilo moramo da dodamo sledece lajnove

/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My practice test suite', function()
{
    it('Framework test case', ()=>
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//prvo pozivamo frejm 
cy.frameLoaded('#courses-iframe')

//trazenje Mentorship linka u frejmu (gde imamo 7 elemenata) sa koriscenjem indexa
cy.iframe().find("a[href='mentorship']").eq(0).click()
cy.wait(2000)

//jednostavna validacija koja ce prebrojati ponudjene pakete u okviru stranice (treba nam 2)

cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length',2)

    }
    )
}

)