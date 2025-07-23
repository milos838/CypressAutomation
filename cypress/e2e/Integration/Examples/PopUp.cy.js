/// <reference types='Cypress'/>

describe('My practice test suite', function()
{
    it('Pop-up windows TC', function()
    {

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//hendlovanje pop-upova kod kojih imamo samo dugme za konfirmaciju - cypress ce sam otvoriti popup i kliknuti na dugme za konfirmaciju (pogledaj log kejsa)

cy.get('input[value="Alert"]').click()

//komanda za trigerovanje popupa u pozadini preko koje se moze validirati sadrzaj popupa

cy.on('window:alert', (str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
}
)

//hendlovanje pop-upova kod kojih imamo nekoliko dugmica - cypress ce sam otvoriti popup i kliknuti na dugme za konfirmaciju (pogledaj log kejsa)

cy.get('input[value="Confirm"]').click()

cy.on('window:confirm', (str)=>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
}
)

    }
    )
}

)