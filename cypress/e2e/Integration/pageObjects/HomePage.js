//deklarisanje klase HomePage

class HomePage
{
    //pravimo metode za pozivanje svakog parametra posebno
getName()
{
    return cy.get(':nth-child(1)>.form-control')
}
getEmail()
{
    return cy.get(':nth-child(2)>.form-control')
}
getPassword()
{
    return cy.get('#exampleInputPassword1')
}
getGender()
{
    return cy.get('#exampleFormControlSelect1')
}
getCheckbox()
{
    return cy.get('#exampleCheck1')
}
getRadiobutton()
{
    return cy.get('#inlineRadio2')
}
getShop()
{
    return cy.get('a[href="/angularpractice/shop"]')
}


}

//exportovanje klase u sve kejseve
export default HomePage