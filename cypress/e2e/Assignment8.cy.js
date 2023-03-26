///<reference types = "cypress"/>

describe('The sanity test suite for consumersenergy site', () => {

  it('navigate to the main page', () => {
    cy.visit('https://consumersenergymanagement.ca/')
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
  })
  before(() => {
    cy.visit('https://consumersenergymanagement.ca/')

  })

  beforeEach(() => {
    cy.visit('https://consumersenergymanagement.ca/')

  })

  after(() => {
    cy.log("after all")
  })

  afterEach(() => {
    cy.log("after each")
    })
    it('verify tabs of the main page visible', () => {
      cy.visit('https://consumersenergymanagement.ca/')
      cy.get('#menu-item-31 > a').should("be.visible")
      cy.get('#menu-item-36 > a').should("be.visible")
      cy.get('#menu-item-32 > [href="products/"]').should("be.visible")
      cy.get('#menu-item-34 > [href="services/"]').should("be.visible")
      cy.get('#menu-item-35 > [href="tools-resources/"]').should("be.visible")
      cy.get('#menu-item-673 > a').should("be.visible")
      cy.get('#menu-item-1589 > a').should("be.visible")
      cy.get('#menu-item-1725 > a').should("be.visible")
      cy.get('#menu-item-1727 > a').should("be.visible")
      cy.get('#menu-item-1726 > a').should("be.visible")
    })
    it('Verify clicking on Home tab', () => {

      cy.get('#menu-item-31 > a').click()
      cy.url().should('eq', 'https://consumersenergymanagement.ca/')
    })
    it('Verify clicking on About tab', () => {
      cy.get('#menu-item-36 > a').click()
      cy.url().should('eq', 'https://consumersenergymanagement.ca/about-us/')
    })
      it('Verify clicking on Products tab', () => {
        cy.get('#menu-item-32 > [href="products/"]').click()
        cy.url().should('eq', 'https://consumersenergymanagement.ca/products/')
  })
  it('Verify clicking on Services tab', () => {
    cy.get('#menu-item-34 > [href="services/"]').click()
    cy.get('ul > :nth-child(1) > p').should("have.text", 'Attic Insulation Services in Toronto by Consumers Energy Management helps insulate your home and ensure heating and cooling is retained.')

  })
  it('Verify clicking on Tools tab', () => {
    cy.get('#menu-item-35 > [href="tools-resources/"]').click()
    cy.url().should('eq', 'https://consumersenergymanagement.ca/tools-resources/')
  })
  it('Verify clicking on Promotion tab', () => {
    cy.get('#menu-item-673 > a').click()
    cy.get(':nth-child(1) > .p-pro-btn > a').should("have.text", 'view promotion')
  })
  it('Verify clicking on Careers tab', () => {
    cy.get('#menu-item-1589 > a').click()
    cy.url().should('eq', 'https://consumersenergymanagement.ca/careers/')
  })
  it('Verify clicking on Blog tab', () => {
    cy.get('#menu-item-1725 > a').click()
    cy.url().should('eq', 'https://consumersenergymanagement.ca/blog/')

  })
  it('Verify clicking on FAQ tab', () => {
    cy.get('#menu-item-1727 > a').click()
    cy.get('[type="button"]').should("be.visible")
  })

  it('Verify clicking on Contact tab', () => {
    cy.get('#menu-item-1726 > a').click()
    cy.url().should('eq', 'https://consumersenergymanagement.ca/contact-us/')




  })
})
