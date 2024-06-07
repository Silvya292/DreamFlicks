import 'cypress-localstorage-commands';
import { generateValidToken } from '../support/generateValidToken';

describe('List lists', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should login and list lists', () => {
    const token = generateValidToken();
    localStorage.setItem('user', token);

    cy.visit('http://localhost:4200/user/123/list');

    cy.contains('Mis listas');
  });
});
