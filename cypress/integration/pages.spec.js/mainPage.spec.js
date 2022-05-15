describe('Testando o testador', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });
  it('Se possui um header com a cor correta', () => {
    cy.get('header')
    .should('have.css', 'backgroundColor', 'rgb(3, 107, 82)')
  });
  it('Possui um logo', () => {
    cy.get('header')
        .find('img')
          .should('have.attr', 'src')
  });
  it('Possui a quantidade correta de links', () => {
    cy.get('header')
        .find('a')
          .should('have.length', 8)
  });
})