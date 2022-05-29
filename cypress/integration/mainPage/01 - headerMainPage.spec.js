describe('Verifica se o cabeçalho possui os componentes corretos e necessarios', () => {
  beforeEach(() => {
    cy.visit('./mainPage.html');
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
  cy.url().should('includes', './mainPage.html')
  });

  it('Ao clicar no link "Formação" é enviado para "./formacao-desenvolvimento-web.html', () => {
    cy.get('header')
        .find('a')
          .contains('Formação')
            .click()
  cy.url().should('includes', './formacao-desenvolvimento-web.html')
  });

  it('Ao clicar no link "Investimentos" é enviado para "./msc-modelo-de-sucesso-compartilhado.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Investimentos')
            .click()
  cy.url().should('includes', './msc-modelo-de-sucesso-compartilhado.html')
  });

  it('Ao clicar no link "Contrate Trybers" é enviado para "./empresas-parceiras.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Contrate Trybers')
            .click()
  cy.url().should('includes', './empresas-parceiras.html')
  });

  it('Ao clicar no link "Blog" é enviado para "./blog"', () => {
    cy.get('header')
        .find('a')
          .contains('Blog')
            .click()
  cy.url().should('includes', './blog')
  });

  it('Ao clicar no link "Trabalhe conosco" é enviado para "./trabalhe-conosco.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Trabalhe conosco')
            .click()
  cy.url().should('includes', './trabalhe-conosco.html')
  });

    it('Ao clicar no link "Duvidas" é enviado para "duvidas.html"', () => {
    cy.get('header')
        .find('a')
          .contains('Dúvidas')
            .click()
  cy.url().should('includes', './duvidas.html')
  });

  it('Ao clicar no link "Login" é enviado para "./course"', () => {
    cy.get('header')
        .find('a')
          .contains('Login')
            .click()
  cy.url().should('includes', './course.html')
  });

    it('Ao clicar no link "Inscreva-se" é enviado para "./registration"', () => {
    cy.get('header')
        .find('a')
          .contains('Inscreva-se')
            .click()
    cy.url().should('includes', './registration.html')
  });
});
