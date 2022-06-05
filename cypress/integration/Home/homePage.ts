describe('Assert all elements of the homepage', () => {
  before(() => {
    cy.visitHomePage();
  });

  it('Home page should contain all required elements on the page', () => {
    cy.get('.brand').should('be.visible').should('exist');
    cy.get('.search-query').should('be.visible').should('exist').should('be.enabled');
    cy.get('#signin_button')
      .should('be.visible')
      .should('exist')
      .should('be.enabled');
    cy.get('.span12').should('be.visible').should('exist');
    cy.get('#online_banking_features').should('be.visible').should('exist');
    cy.get('#online-banking').scrollIntoView().should('be.visible').should('exist');
    cy.get('.extra-inner').should('be.visible').should('exist');
  });
});
