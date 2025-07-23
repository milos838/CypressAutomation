/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Alias & Konstanta TC', function()
    {

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(3000)

//pravimo alias od parenta .products
cy.get('.products').as('productLokator')

//trazimo child sa odredjenim imenom koristeci loop
cy.get('@productLokator').find('.product').each(($el, index, $list) =>
{
    //deklarisanje konstante koja sadrzi zeljeno ime
    const textVeg=$el.find('h4.product-name').text()

    if(textVeg.includes('Cashews'))
    {
       $el.find('button').click()
    }
}

)
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()





    }
    )
}

)