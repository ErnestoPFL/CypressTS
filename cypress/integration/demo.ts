declare namespace Cypress {
    interface Chainable {
    /**
     * Navigates to the home page of our application
     */
    visitHomePage(): Chainable<Element>

    /**
     * Navigates to the login page of our application
     */
    visitLoginPage(): Chainable<Element>

    /**
     * Navigates to the feedback of our application
     */
    visitFeedbackPage(): Chainable<Element>

    /**
     * @param seconds - how many seconds should the execution waits
     */
    waitForSeconds(seconds:number): Chainable<Element>

    }
}

Cypress.Commands.add('visitHomePage', () => {
    cy.visit('http://zero.webappsecurity.com/')
  })
  
  Cypress.Commands.add('visitLoginPage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })
  
  Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
  })
  
  Cypress.Commands.add('
waitForSeconds', (seconds) => {
    cy.wait(seconds * 1000)
  })
  