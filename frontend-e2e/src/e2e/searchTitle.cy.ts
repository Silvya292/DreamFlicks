import 'cypress-localstorage-commands';

describe('List lists', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should search a film and watch the trailer', () => {
    cy.visit('http://localhost:4200');

    cy.get('input[type="text"]')
      .type('dune')
      .should('have.value', 'dune')
      .get('svg[data-testid="SearchIcon"]')
      .click()
      .wait(1500);

    cy.get('button[type="button"]')
      .contains('Sigue el viaje')
      .click()
      .wait(1000);
    cy.get('button[data-testid="watchTrailerButton"]').click().wait(2000);

    cy.visit('http://localhost:4200/film/693134');
  });
});
