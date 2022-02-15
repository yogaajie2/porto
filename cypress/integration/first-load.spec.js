const devices = ['iphone-x', 'ipad-mini', 'macbook-11']

describe('First Load', () => {
  devices.forEach(device => {
    it('Runs all animations on first load properly and in order', () => {
      cy.viewport(device)

      cy.visit('/')
  
      cy.contains('//').should('have.class', 'animate-fade-in-out')
  
      cy.get('[data-cy="page-header"]')
        .should('have.class', 'opacity-0')
        .and('have.class', 'scale-75')
        .and('have.class', 'duration-500')
      
      cy.get('[data-cy="page-header"]')
        .should('have.class', 'opacity-100')
        .and('have.class', 'scale-100')
        .and('have.class', 'duration-500')
  
      cy.get('[data-cy="page-subtitle"]')
        .should('have.class', 'opacity-100')
        .and('have.class', 'duration-300')
  
      cy.get('header')
        .should('have.class', '-translate-y-0')
        .and('have.class', 'duration-300')
        .and('have.class', 'ease-in-out')
  
      cy.get('[data-cy="page-title"]')
        .should('have.class', 'opacity-100')
        .and('have.class', 'translate-y-0')
        .and('have.class', 'duration-500')
  
      cy.get('[data-cy="logo"]')
        .should('have.class', 'opacity-100')
        .and('have.class', 'duration-300')
  
      cy.get('[data-cy="brand"]')
        .should('have.class', 'opacity-100')
        .and('have.class', '-translate-x-0')
        .and('have.class', 'duration-500')
    })
  })
})
