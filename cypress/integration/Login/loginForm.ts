import { loginData } from '../../factories/login';

describe('User can log in', () => {
  beforeEach(() => {
    cy.visitLoginPage();
  });

  it('User can login with correct credentials', () => {
    const login = loginData.build();
    const { username, password } = login;
    cy.fillLoginForm(username, password);
    cy.submitSignInButton();
    cy.get('#account_summary_tab').should('be.visible').should('exist');
    cy.logout();
  });

  it('User can login with keep me sign in button and with correct credentials', () => {
    const login = loginData.build();
    const { username, password } = login;
    cy.fillLoginForm(username, password);
    cy.checkKeepMeSignedIn();
    cy.submitSignInButton();
    cy.get('#account_summary_tab').should('be.visible').should('exist');
    cy.logout();
  });
});
