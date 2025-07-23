/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Dropdown TC', function()
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//validacija vrednosti iz statickog dropdown-a

cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

//validacija vrednosti iz dinamickog dropdown-a

cy.get('#autocomplete').type('Ru')
cy.wait(2000)

//funkcija koja vrsi pretragu dinamicnih vrednosti po parent selektoru i hvata odredjenu vrednost

cy.get('.ui-menu-item div').each(($el, index, $list) =>
{
    if($el.text()==="Russian Federation")
    {
        $el.click()
    }
}
)


    }
    )
}

)