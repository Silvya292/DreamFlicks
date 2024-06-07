import 'cypress-localstorage-commands';
import { generateValidToken } from '../support/generateValidToken';

describe('List lists', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should create a new list and edit the information, then delete it', () => {
    const token = generateValidToken();
    localStorage.setItem('user', token);

    cy.visit('http://localhost:4200/user/123/list');

    cy.contains('Mis listas');
    cy.get('button').contains('Crear nueva lista').click();

    cy.get('input[name="listTitle"]')
      .type('Prueba')
      .should('have.value', 'Prueba')
      .get('label')
      .contains('Descripción')
      .get('textarea[name="listDescription"]')
      .type('Lista de prueba creada desde Cypress')
      .wait(1000);

    cy.get('button[type="submit"]').click().wait(2000);
    cy.get('button').contains('Editar lista').click();

    cy.get('input[name="listTitle"]')
      .clear()
      .type('Título de prueba editado')
      .should('have.value', 'Título de prueba editado');

    cy.get('button[type="submit"]').click().wait(2000);
    cy.get('button').contains('Eliminar lista').click().wait(2000);
  });
});
