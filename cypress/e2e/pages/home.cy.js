describe('Home page', () => {
    beforeEach(() => {
      cy.visit('/en/US');
    });
  
    it('should contain home page text', () => {
      cy.get('[data-testid="welcome-message"]').contains('WHICH BLU PRODUCT ARE YOU?');
      // Find a link with an href attribute containing "product" and click it
      cy.get('a[href*="product"]').eq(0).click();
      // The new url should include "/product"
      cy.url().should('include', '/product')
      // The new page should contain an products list
      cy.get('[data-testid="products"]').should('have.length', 4);
    });
  });
  