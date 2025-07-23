// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// 
Cypress.Commands.add('selectProduct', (productName) => {
cy.get('.card-title').each(($el, index, $list) =>
{
    if($el.text().includes(productName))
    {
        cy.get('.btn.btn-info').eq(index).click()
    }

})})

Cypress.Commands.add('selectItem', (itemName) => {
    cy.get('.item').each(($el, index, $list) =>
    {
        if($el.text().includes(itemName))
        {
            cy.get('.item__bottom__cart').eq(index).click()
        }
    
    })})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })