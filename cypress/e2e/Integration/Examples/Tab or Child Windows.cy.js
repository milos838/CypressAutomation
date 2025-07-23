/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Another tab/Child window  TC', ()=>
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

/* Cypress ne podrzava testiranje u drugom tabu ili novom prozoru stoga moramo koristiti jquery funkciju 'invoke',
 koja ce da skine target=_blank iz HTML elementa i da otvori link u istom tabu/prozoru */

 cy.get('#opentab').invoke('removeAttr','target').click()

 // Cypress ne dozvoljava cross origin validiranje znaci da bi promenili source moramo da koristimo 'origin' funkciju i unutar nje da vrsimo validaciju

 cy.origin("qaclickacademy.com", () =>
 {

    cy.get('#navbarSupportedContent a[href="about.html"]').click()

 })


    }
    )
}

)