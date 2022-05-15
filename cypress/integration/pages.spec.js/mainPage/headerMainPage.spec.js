describe('Verifica se o cabeçalho possui os componentes corretos e necessarios', () => {
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
          .should('have.length', 9)
  });
  it('Ao clicar na logo volta para a mainPage', () => {
    cy.get('header')
        .find('img')
          .click()
  cy.url().should('includes', 'pages/mainPage.html')
  });
  it('Ao clicar no link "Formação" é enviado para "pages/formacao"', () => {
    cy.get('header')
        .find('a')
          .contains('Formação')
            .click()
  cy.url().should('includes', 'pages/formacao.html')
  });
  it('Ao clicar no link "Investimentos" é enviado para "pages/investimento"', () => {
    cy.get('header')
        .find('a')
          .contains('Investimentos')
            .click()
  cy.url().should('includes', 'pages/investimento.html')
  });
  it('Ao clicar no link "Contrate Trybers" é enviado para "pages/empresasParceiras"', () => {
    cy.get('header')
        .find('a')
          .contains('Contrate Trybers')
            .click()
  cy.url().should('includes', 'pages/empresasParceiras.html')
  });
  it('Ao clicar no link "Blog" é enviado para "pages/blog"', () => {
    cy.get('header')
        .find('a')
          .contains('Blog')
            .click()
  cy.url().should('includes', 'pages/blog.html')
  });
  it('Ao clicar no link "Trabalhe conosco" é enviado para "pages/trabalheConosco"', () => {
    cy.get('header')
        .find('a')
          .contains('Trabalhe conosco')
            .click()
  cy.url().should('includes', 'pages/trabalheConosco.html')
  });
    it('Ao clicar no link "Duvidas" é enviado para "pages/duvidas"', () => {
    cy.get('header')
        .find('a')
          .contains('Duvidas')
            .click()
  cy.url().should('includes', 'pages/duvidas.html')
  });
  it('Ao clicar no link "Login" é enviado para "pages/login"', () => {
    cy.get('header')
        .find('a')
          .contains('Login')
            .click()
  cy.url().should('includes', 'pages/login.html')
  });
    it('Ao clicar no link "Inscreva-se" é enviado para "pages/inscrevase"', () => {
    cy.get('header')
        .find('a')
          .contains('Inscreva-se')
            .click()
  cy.url().should('includes', 'pages/inscrevase.html')
  });
});
