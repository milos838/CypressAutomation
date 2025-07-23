/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Web tables TC', ()=>
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//prvo mora da se napravi lokator koji ce da izvuce odredjenu vrednost iz tabele i tu moramo da vodimo racuna kako se hvata cela kolona --tr td:nth-child(2)

cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
{
    //deklarisanje varijable koja prolazi kroz vrednosti
    const text= $el.text()

    //postavljanje uslova koji ce dohvatiti zeljenu vrednost
    if(text.includes("Python"))
    {
       
        //hvatanje sledeceg polja u redu koristeci .next() i verifikacija njegove vrednosti pomocu deklarisanja funkcije
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
            const priceText= price.text()
            expect(priceText).to.equal('25')
        })


    } 


}
)


    }
    )
}

)