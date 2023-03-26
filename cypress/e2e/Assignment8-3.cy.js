///<reference types = "cypress"/>
const select_state = '[onchange="displaysub()"]'
const select_city = '[name="stage2"]'
const select_home = '[tabindex="2"]'
const SQ_ft = '[tabindex="3"]'
const age = '[tabindex="4"]'
const current_heating = '[tabindex="10"]'


describe('Saving calculator -  Heat Prices calculations test', () => {

    Cypress.on('uncaught:exception', () => false)

    it('navigate to the savings-calculator page', () => {
        cy.visit('savings-calculator/')
        cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')
    })

    before(() => {
        cy.visit('https://consumersenergymanagement.ca/savings-calculator/')

    })

    beforeEach(() => {
        cy.visit('savings-calculator/')

    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })
    it('Populate all the fields at step 1 with the test data of your choice', () => {
        cy.get('[name="gastherm"]').clear().type('2{enter}')
        cy.get('[name="propaneGas"]').clear().type('3{enter}')
        cy.get('[name="oilgal"]').clear().type('4{enter}')
        cy.get('[name="skwhr"]').clear().type('5{enter}')
        cy.get('[name="wkwhr"]').clear().type('6{enter}')

        cy.get(select_state).should('be.visible')
        cy.get(select_state).select('Alberta', { force: true })
        cy.get('[value="Alberta"]').should('be.visible')

        cy.get(select_city).select('Calgary')
        cy.get('[value="11"]').should('be.visible')

        cy.get(select_home).should('be.visible')
        cy.get(select_home).select(5, { force: true })
        cy.get('[value="3"]').should('be.visible')

        cy.get(SQ_ft).should('be.visible')
        cy.get(SQ_ft).select(3, { force: true })
        cy.get('[value="1000"]').should('be.visible')

        cy.get(age).should('be.visible')
        cy.get(age).type(30).click()

        cy.get(current_heating).should('be.visible')
        cy.get('[name="heattype"]').select('Electric', { force: true })
        cy.get('[value="Electric"]').should('be.visible')

        cy.get('[name="eheattype"]').should('be.visible')
        cy.get('[name="eheattype"]').select('75%', { force: true })
        cy.get('[value="75"]').should('be.visible')

        cy.get('[name="heatingtype"]').should('be.visible')
        cy.get('[name="heatingtype"]').select('Natural Gas', { force: true })
        cy.get('[value="bNaturalGas"]').should('be.visible')

        cy.get('[name="eheatingtype"]').should('be.visible')
        cy.get('[name="eheatingtype"]').select('55%', { force: true })
        cy.get('[value="55"]').should('be.visible')

        cy.get('#AHS').should('not.empty')
        cy.get('#CHC').should('not.empty')
        cy.get('#NHC').should('not.empty')

        cy.get('#VTAS').should('not.empty')
        cy.get('#VTES').should('not.empty')
    })
})
