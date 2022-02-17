describe('Typical User Flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Runs all animations on first load properly and in order', () => {
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

  it('Shows the projects animation when they entered the viewport', () => {
    cy.log('wait for animation')

    cy.get('header').should('be.visible')

    cy.get('[data-cy="project"]').should('not.exist')

    cy.get('[data-cy="view-all-projects"]').should('not.exist')

    cy.get('[data-cy="project-wrapper"]').each(($wrapper) => {
      cy.get($wrapper)
        .scrollIntoView({ duration: 1000 })
        .within(() => {
          cy.get('[data-cy="project"]').should('exist')
        })
    })
    
    cy.get('[data-cy="view-all-projects"]').should('exist')
  })
})
