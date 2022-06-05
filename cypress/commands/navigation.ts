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
     * Navigates to the feedback page of our application
     */
     visitFeedbackPage(): Chainable<Element>

    /**
     * @param seconds - how many seconds should the execution wait
     */
    waitForSeconds(seconds: number): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit((Cypress.env('homePageUrl')));
});

Cypress.Commands.add('visitLoginPage', () => {
  cy.visit((Cypress.env('loginPageUrl')));
});

Cypress.Commands.add('visitFeedbackPage', () => {
  cy.visit((Cypress.env('feedbackPageUrl')));
});

Cypress.Commands.add('waitForSeconds', (seconds) => {
  cy.wait(seconds * 1000);
});
