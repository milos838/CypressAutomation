/// <reference types='Cypress'/>

describe('Framework suite', function()
{

    //pokrece se funkcija svaki put pre svih testova u bloku
    before(function() 
    {
    
        /*pozivamo .json fajl iz Fixture foldera koji sadrzi podatke o imenu, emailu, lozinki i polu zatim deklarisemo globalnu varijablu kako bi povukli te podatke 
        svaki put u testu*/
        cy.fixture('framework1').then(function(data)
    {
        this.data=data

    })
        
    })
    it('Framework test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1)>.form-control').type(this.data.name)
        cy.get(':nth-child(2)>.form-control').type(this.data.email)
        cy.get('#exampleInputPassword1').type(this.data.password)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get('#exampleCheck1').check()
        cy.get('#inlineRadio2').check()

        //validacija da li je u Two-way polju upisana ista vrednost kao i za Name
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)

        //validacija koji je minimum karaktera koji moze da se upise polje Name (treba nam min 2)
        cy.get(':nth-child(1)>.form-control').should('have.attr','minlength','2')

        //validacija da li je radio button 3 disabled
        cy.get('#inlineRadio3').should('be.disabled')


        //drugi deo - navigacija do Shop stranice

        cy.get('a[href="/angularpractice/shop"]').click()

        /*pravimo loop koji ce da prodje kroz sve proizvode i uhvati element sa odredjenim textom
        ali cemo to uraditi preko custom command funkcije koja se nalazi u support/commands.js*/
        
        cy.selectProduct('Nokia')

        // 1. ocemo da dodamo jos jedan proizvod u korpu koristeci istu metodu

        cy.selectProduct('Blackberry')

        /* 2. ocemo da dodamo vise elemenata od jednom koristeci podatke koji su upisani u .json fajl
        pozivamo productName (koji sadrzi vise elemenata) preko array-a*/

        this.data.productName.forEach(function(element)
    {
        cy.selectProduct(element)
    })

    }
)

}
)