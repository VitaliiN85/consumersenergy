///<reference types = "cypress"/>
const select_state = '[onchange="displaysub()"]'
const select_city = '[name="stage2"]'
describe('The sanity calculating savings test site', () => {


    it('navigate to the savings-calculator page', () => {
        cy.visit('/savings-calculator/')
        cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')
    })
    before(() => {
        cy.visit('savings-calculator/')

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
    it('Verify all the Canadian provinces are on the state list(Alberta, Calgary) and can be chosen', () => {
        cy.get(select_state).should('be.visible')
        cy.get(select_state).select('Alberta', { force: true })
        cy.get('[value="Alberta"]').should('be.visible')
    
        cy.get(select_city).select('Calgary')
        cy.get('[value="11"]').should('be.visible')
        // expect(response.statusText).equal("OK")
    })
    it('Verify all the Canadian provinces are on the state list(British Columbia) and can be chosen', () => {
        cy.get(select_state).should('be.visible')
        cy.get(select_state).select(7, { force: true })
        cy.get('[value="BritishColumbia"]').should('be.visible')
    
        cy.get(select_city).select('Vancuver')
        cy.get('Vancuver').should('be.visible')
        expect(response.status).equal(403)
})
it('Verify all the Canadian provinces are on the state list(Saskatchewan, Regina) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Saskatechewan', { force: true })
    cy.get('[value="Saskatechewan"]').should('be.visible')

    cy.get(select_city).select('Regina')
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(Manitoba, Winnipeg) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Manitoba', { force: true })
    cy.get('[value="Manitoba"]').should('be.visible')

    cy.get(select_city).select('Winnepeg') ///the name of the city is wrong
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(Ontario, Toronto) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Ontario', { force: true })
    cy.get('[value="Ontario"]').should('be.visible')

    cy.get(select_city).select('Toronto') 
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(Quebec, Montreal) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Quebec', { force: true })
    cy.get('[value="Quebec"]').should('be.visible')

    cy.get(select_city).select('Montreal') 
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(New Brunswick, Fredrickton ) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('New Brunswick', { force: true })
    cy.get('[value="NewBrunswick"]').should('be.visible')

    cy.get(select_city).select('Fredrickton') 
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(Nova Scotia) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Nova Scotia', { force: true })
    cy.get('[value="NovaScotia"]').should('be.visible')

    cy.get(select_city).select('Halifax') 
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(Newfoundland) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Newfoundland', { force: true })
    cy.get('[value="Newfoundland"]').should('be.visible')

    cy.get(select_city).select('St Johns') 
    cy.get('[value="11"]').should('be.visible')
})
it('Verify all the Canadian provinces are on the state list(NorthwestTerritory) and can be chosen', () => {
    cy.get(select_state).should('be.visible')
    cy.get(select_state).select('Northwest Territory', { force: true })
    cy.get('[value="NorthwestTerritory"]').should('be.visible')

    cy.get(select_city).select('Fort Smith') 
    cy.get('[value="11"]').should('be.visible')

    })
})
// })