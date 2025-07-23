/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Mouse Hover over TC', ()=>
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//hvatanje nevidljivog elementa ispod hover over opcije koristeci .invoke('show') metode
cy.get('div.mouse-hover-content').invoke('show')

//klik na element koji nam treba pozivajuci ga preko atributa
cy.contains('Top').click()

//validacija da li se nakon klika na 'top' u URL dodao nastavak 'top'
cy.url().should('include','top')


    }
    )
}

)