/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { feedbackData } from '../../factories/feedback';

describe('Feedback form assertions', () => {
  beforeEach(() => {
    cy.visitFeedbackPage();
  });
  it('Fill the feedbackPage with all data', () => {
    const model = feedbackData.build();
    const { name, email, subject, comment } = model;
    cy.fillFeedbackForm(name, email, subject, comment);
    cy.ClickSendFeedbackMessageButton();
    cy.get('#feedback-title').should('be.visible');
  });
});
