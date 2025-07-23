/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Calendar handling TC', function()
    {

// deklarisanje zeljenog datuma upotrebom 3 varijable
const monthNumber = '8'
const date = '26'
const year = '2028'
//deklarisanje liste vrednosti koja nam treba za validaciju datuma
const expectedList = [monthNumber,date,year]


cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
//klik na kalendar polje
cy.get('.react-date-picker__inputGroup').click()
//klik na mesec i godinu
cy.get('.react-calendar__navigation__label').click()
//ponavljamo klik da bi dobili izbor godine
cy.get('.react-calendar__navigation__label').click()

//klik na dugme koje sadrzi zeljenu godinu
cy.contains('button',year).click()


/*klick na dugme koje sadrzi zeljeni mesec, hvatamo ga preko indexa s obzitom da oni pociju sa vrednosti 0 moramo na konstantu dodati -1, Number() je 
funkcija koja konvertuje string u broj*/
cy.get('button[class="react-calendar__tile react-calendar__year-view__months__month"]').eq(Number(monthNumber)-1).click()


//klick na dugme koje sadrzi zeljeni datum
cy.contains('abbr',date).click()

/* Validacija izabranog datuma se vrsi pretragom vrednosti iz samog polja, posto svaki broj je vrednost za sebe onda ne mozemo izvuci text
vec moramo kroz upit da izvucemo svaku vrednost pojedinacno*/

cy.get('.react-date-picker__inputGroup__input').each(($el,index) =>
{
    //linija za iscitavanje svake od vrednosti posebno po 'val' HTML podatku
    cy.wrap($el).invoke('val').should('eq', expectedList[index])
}


)


    }
    )
}

)