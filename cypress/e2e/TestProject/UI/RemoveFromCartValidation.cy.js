/// <reference types='Cypress'/>
import HomePage from "./pageObjects/HomePage"
describe('Cart - Item removal', function()
{
    before(function() 
    {
        cy.fixture('testproject').then(function(data)
    {
        this.data=data

    })
        
    })
    it('Test Case - Remove item from Cart functionality', function()
    {
         /*
        Test case STR:

        Precondition - Items "EDEN ED-605 Partybox zvučnik","AIWA KBTUS-710 Partybox zvučnik" are added to Cart

        1. Open URL 'https://gigatron.rs/' 
        2. Click on 'Prijava' option
        3. Enter 'milostest83@gmail.com' into Email adresa field
        4. Enter '*****' into Lozinka field
        5. Click on 'Prijavite se' button
        6. Click on 'Korpa' icon
        7. Verify Sum of product prices                                                             Expected result: Sum(price1, price2...) = Iznos kupovine
        8. Click on 'X' button for item 'EDEN Bluetooth zvučni sistem PartyBox ED-605'
        9. Verify items in the cart                                                                 Expected result: AIWA KBTUS-710 Partybox zvučnik is present in the cart
        10. Click on 'X' button for item 'AIWA KBTUS-710 Partybox zvučnik'
        11. Verify page response                                                                    Expected result: 'Vasa korpa je prazna' displayed on the page
        */

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        

        const homePage = new HomePage()

        homePage.getURL()

        //There are 2x 'Prijava' links, we need to select visible one in order to reach log in window
        cy.get('.hd-reg:visible').click()
        
        //Populating Email and Password fields
        homePage.getEmail().type(Cypress.env('email'))
        homePage.getPassword().type(Cypress.env('password'))

        //Submiting Log In
        homePage.getSubmit().click()

        cy.wait(1000)

        
        // Adding multiple items to Cart to create precondition
        
        cy.get('.burger-button').click()
        cy.contains('TV, audio, video').should('be.visible').click({ force: true })
        cy.contains('Zvučnici').click()
        cy.wait(2000)

        this.data.itemName.forEach(function(element)
    {
        cy.selectItem(element)
    })

        //Click on 'Korpa' icon
        cy.contains('Korpa').click({ force: true })
        
/*
        //Verify sum of product prices 
        var sum=0
        cy.get('div[class="main-content"] div b').each(($el, index, $list) =>
        {
            //izvlacenje cifre iz stringa
            const amount=$el.text()

            
            // 'var' se stavlja kada varijablu hocemo da re-use u daljem kodu, .split(" ") metoda se koristi za razdvajanje stringa
            var res= amount.split(" ")
            //izvlacenje samo 'cifre' iz stringa - amount (index [0] znaci da izvlacimo prvi deo stringa)
            res= res[0].trim()
            //sabiranje (obavezno koristiti odgovarajucu metodu za konverziju stringova u brojeve)
            sum= Number(sum)+parseFloat(res)
            
        }).then(function()
        {
            //na kraju loop-a koristimo .then() da bi cypress sacekao da se loop zavrsi i prikazao pravu vrednost zbira
        cy.log(sum) 
        })

        //provera da li je zbir cena proizvoda jednak ukupnom totalu (i ovde se mora razdvojiti i trimovati string totala)
        cy.get('.final-price').then(function(element)
    {
        const amount = element.text()
        var result = amount.split(" ")
        var total = result[0].trim()
        
        //validacija jednakosti
        expect(parseFloat(total)).to.equal(sum)
    }) */

        //Remove specific product from the cart
        cy.get('.cart-items').each(($el, index, $list) =>
        {
        if($el.text().includes(this.data.product))
        {
        cy.get('.remove-item').eq(index).click({ multiple: true })
        }

        cy.wait(2000)
        //Validation that second product remained in the Cart
        cy.get('.titleItemLink > h4').should('contain','AIWA KBTUS-710 Partybox zvučnik')

         
        cy.get('.remove-item').click()

        //Item removal validation 
        cy.get('.col > h3').should('contain',"Vaša korpa je prazna") 
        

})})

//House cleaning
it('Logout User', function () {
    cy.get(
      '#header__center__login__and__cart > .user > .user-opt > :nth-child(2) > .user-identity-name'
    ).trigger('mouseover');
    cy.get('.drop-menu-holder').contains('Odjavi se').click({ force: true });
  });
})



       

        
        

