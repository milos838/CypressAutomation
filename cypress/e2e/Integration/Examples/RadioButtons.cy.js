/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Radio Buttons TC', function()
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//cekiranje radio button-a i validacija da li je isto selektovano

cy.get('input[value="radio3"]').check().should('be.checked')

    }
    )
}

)