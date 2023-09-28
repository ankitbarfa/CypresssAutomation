describe('Sample Test Suite', () => {
    it('Visits the website', () => {
      cy.visit('https://www.example.com');
      cy.contains('Example Domain');
    });
  
    it('Performs a search', () => {
      cy.visit('https://www.example.com');
      cy.get('input[type="text"]').type('Cypress Testing');
      cy.get('input[type="submit"]').click();
      cy.url().should('include', 'search');
    });
  });
  