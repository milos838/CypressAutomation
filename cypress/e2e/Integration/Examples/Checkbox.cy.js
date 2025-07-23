/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Check box TC', function()
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//select checkbox i provera da li je checkbox selektiran (+ da li je to option1)
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//unselect checkbox i provera da li je box deselektiran
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//da bi selektovali vise checkboxova kreiramo lokator koji hvata celu grupu zatim kliknemo da boxove pozivajuci njihova imena
cy.get('input[type="checkbox"]').check(['option2','option3'])

    }
    )
}

)