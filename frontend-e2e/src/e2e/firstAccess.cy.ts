describe('First access', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Visits the home page', () => {
    cy.visit('http://localhost:4200/');
  });
});
