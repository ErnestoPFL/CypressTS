/* eslint-disable @typescript-eslint/no-unsafe-argument */
declare namespace Cypress {
  interface Chainable {
    /**
        * fill the feedback form
         * @param name - takes first name of the user
         * @param email - takes email of the user
         * @param subject - takes the subject of the feedback
         * @param comment - takes a description of the feedback
         */
    fillFeedbackForm(
      name: string,
      email: any,
      subject: string,
      description: any): Chainable<Element>

    /**
       * Click on send message
       */
    ClickSendFeedbackMessageButton(): Chainable<Element>
  }
}

Cypress.Commands.add('fillFeedbackForm', (name, email, subject, comment) => {
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.get('#subject').type(subject);
  cy.get('#comment').type(comment);
});

Cypress.Commands.add('ClickSendFeedbackMessageButton', () => {
  cy.get('.btn-signin').click();
});
