describe('Login', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Visits the home page and open sing in modal', () => {
    cy.visit('http://localhost:4200/');

    cy.get('button').contains('Inicia sesión').click();
  });
});
