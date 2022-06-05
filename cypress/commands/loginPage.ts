declare namespace Cypress {
  interface Chainable {
    /**
         * Fill the login form
        * @param username - takes username or id
        * @param password - takes user password
        */
    fillLoginForm(username: string, password: string): Chainable<Element>

    /**
         * Click on sign in button
         */
    submitSignInButton(): Chainable<Element>

    /**
         * Click on Keep me signed in checkbox
         */
    checkKeepMeSignedIn(): Chainable<Element>

    /**
         * Click on logout
         */
    logout(): Chainable<Element>
  }
}

Cypress.Commands.add('fillLoginForm', (username, password) => {
  cy.get('#user_login').type(username);
  cy.get('#user_password').type(password);
});

Cypress.Commands.add('submitSignInButton', () => {
  cy.get('.btn').click();
});

Cypress.Commands.add('checkKeepMeSignedIn', () => {
  cy.get('#user_remember_me').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('.dropdown-toggle')
    .eq(1)
    .click();
  cy.get('#logout_link').click();
});
