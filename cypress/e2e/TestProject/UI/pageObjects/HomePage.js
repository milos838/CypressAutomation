class HomePage
{
getURL()
{
    return cy.visit(Cypress.env('url'))
}
getEmail()
{
    return cy.get('#email')
}
getPassword()
{
    return cy.get('#password')
}
getSubmit()
{
    return cy.get('#loginSubmit')
}

}
export default HomePage