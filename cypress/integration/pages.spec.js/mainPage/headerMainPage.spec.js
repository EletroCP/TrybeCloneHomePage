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

  it('Ao clicar no link "Formação" é enviado para "pages/formacao-desenvolvimento-web.html', () => {
    cy.get('header')
        .find('a')
          .contains('Formação')
            .click()
  cy.url().should('includes', 'pages/formacao-desenvolvimento-web.html')
  });

  it('Ao clicar no link "Investimentos" é enviado para "pages/msc-modelo-de-sucesso-compartilhado.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Investimentos')
            .click()
  cy.url().should('includes', 'pages/msc-modelo-de-sucesso-compartilhado.html')
  });

  it('Ao clicar no link "Contrate Trybers" é enviado para "pages/empresas-parceiras.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Contrate Trybers')
            .click()
  cy.url().should('includes', 'pages/empresas-parceiras.html')
  });

  it('Ao clicar no link "Blog" é enviado para "pages/blog"', () => {
    cy.get('header')
        .find('a')
          .contains('Blog')
            .click()
  cy.url().should('includes', 'pages/blog')
  });

  it('Ao clicar no link "Trabalhe conosco" é enviado para "pages/trabalhe-conosco.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Trabalhe conosco')
            .click()
  cy.url().should('includes', 'pages/trabalhe-conosco.html')
  });

    it('Ao clicar no link "Duvidas" é enviado para "duvidas.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Dúvidas')
            .click()
  cy.url().should('includes', 'pages/duvidas.html')
  });

  it('Ao clicar no link "Login" é enviado para "pages/course"', () => {
    cy.get('header')
        .find('a')
          .contains('Login')
            .click()
  cy.url().should('includes', 'pages/course.html')
  });

    it('Ao clicar no link "Inscreva-se" é enviado para "pages/registration"', () => {
    cy.get('header')
        .find('a')
          .contains('Inscreva-se')
            .click()
  cy.url().should('includes', 'pages/registration.html')
  });
});
