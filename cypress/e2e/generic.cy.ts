import { navigationLinks } from '../../lib/data/index';

describe('Generic tests', () => {
  it('is possible to access all pages of the website', () => {
    cy.visit(Cypress.env('baseUrl'));

    navigationLinks.map((link) => {
      cy.visit(Cypress.env('baseUrl') + '/' + link);
    });
  });

  it('is possible to change the color mode', () => {
    cy.visit(Cypress.env('baseUrl'));

    cy.get('html').should('have.class', 'light').and('not.have.class', 'dark');

    cy.get('[alt="Dark mode"]').click();
    cy.get('[alt="Dark mode"]').should('not.exist');

    cy.get('html').should('have.class', 'dark').and('not.have.class', 'light');

    cy.get('[alt="Light mode"]').click();
    cy.get('[alt="Light mode"]').should('not.exist');

    cy.get('html').should('have.class', 'light').and('not.have.class', 'dark');
  });
});
