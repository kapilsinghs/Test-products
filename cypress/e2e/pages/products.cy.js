describe('Product page', () => {
  beforeEach(() => {
    cy.visit('/en/US/product');
  });

  it('should contain all products', () => {
    // four products should be displayed
    cy.get('[data-testid="products"]').should('have.length', 4);

    cy.get('[data-testid="products"]')
    .eq(0)
    .contains('Menthol Blu PLUS+ Tank');

    cy.get('[data-testid="products"]')
    .eq(1)
    .contains('14.99');

    // User Avatar should be displayed
    cy.get('[data-testid=usericon]', { timeout: 10000 }).should('be.visible');
    cy.get('[data-testid=usericon]', { timeout: 10000 }).should('have.attr', 'src', 'https://www.w3schools.com/howto/img_avatar.png')

    // scroll to see if navbar hide
    cy.scrollTo(0, 300);
    cy.get('menu')
    .should('satisfy', ($el) => {
      const classList = Array.from($el[0].classList); 
      return classList.includes('menu--hidden')
    });
  });
});
