/// <reference types='Cypress'/>

import HomePage from "../../pageObjects/HomePage"
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

    it('Framework2 test', function()
    
    {
         

        //deklarisanje objekta koji ce importovati klasu u kejs
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //pozivanje svih parametara iz klase
        homePage.getName().type(this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.getPassword().type(this.data.password)
        homePage.getGender().type(this.data.gender)
        homePage.getCheckbox().check()
        homePage.getRadiobutton().check()
        homePage.getShop().click()

        this.data.productName.forEach(function(element)
    {
        cy.selectProduct(element)
    })

        cy.contains('Checkout').click()

        //sabiranje cena proizvoda (jako bitno - dobro izvuci lokator koji ce pokupiti pojedinacne cene svakog proizvoda)
        //deklarisanje 'sum' vrednosti pre loop-a
        var sum=0
        
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
        {
            //izvlacenje cifre iz stringa
            const amount=$el.text()
            // 'var' se stavlja kada varijablu hocemo da re-use u daljem kodu, .split(" ") metoda se koristi za razdvajanje stringa
            var res= amount.split(" ")
            //izvlacenje samo 'cifre' iz stringa - amount (index [1] znaci da izvlacimo drugi deo stringa)
            res= res[1].trim()

            //sabiranje (obavezno koristiti metodu Number() da se konvertuju stringovi u brojeve)
            sum=Number(sum)+Number(res)

        }).then(function()
        {
            //na kraju loop-a koristimo .then() da bi cypress sacekao da se loop zavrsi i prikazao pravu vrednost zbira
        cy.log(sum) 
        })

        //provera da li je zbir cena proizvoda jednak ukupnom totalu (i ovde se mora razdvojiti i trimovati string totala)
        cy.get('h3 strong').then(function(element)
    {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        //validacija jednakosti
        expect(Number(total)).to.equal(sum)

    })


        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('Russ')

        //podesavanje timeout-a za naredni step
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('.suggestions > ul > li > a').click()

        cy.get('#checkbox2').check({force: true})
        cy.get('input[type="submit"]').click()

        //validacija zavrsne poruke koja sadrzi 'Success' text
        cy.get('.alert').then(function(element)
    {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
    })
    

}
)