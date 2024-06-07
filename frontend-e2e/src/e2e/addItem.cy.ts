import 'cypress-localstorage-commands';
import { generateValidToken } from '../support/generateValidToken';

describe('Add item', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should add an item to a list', () => {
    const token = generateValidToken();
    localStorage.setItem('user', token);

    cy.visit('http://localhost:4200');

    cy.get('input[type="text"]')
      .type('dune')
      .should('have.value', 'dune')
      .get('svg[data-testid="SearchIcon"]')
      .click()
      .wait(1000);

    cy.get('button[type="button"]')
      .contains('Sigue el viaje')
      .click()
      .wait(1500);
    cy.get('button').contains('Añadir a lista').click().wait(1000);

    cy.get('button').contains('Crear una nueva lista').click().wait(1000);
    cy.get('input[name="listTitle"]')
      .type('Prueba')
      .should('have.value', 'Prueba')
      .get('label')
      .contains('Descripción')
      .get('textarea[name="listDescription"]')
      .type('Lista de prueba creada desde Cypress')
      .wait(1000);

    cy.visit('http://localhost:4200/user/123/list');
  });
});
