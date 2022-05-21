describe('Verifica se a section "hero" possui os recursos corretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const cardImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9cadd60bc5798_Ellipse%201.png';
  const cardName = 'Anderson Adriano Godoy';
  const cardContract = 'Contratado pela Accenture';
  const cardDescription ="Iniciei minha jornada na Trybe em Abril e logo nos primeiros meses já me senti muito mais confiante, que em anos de faculdade e pós graduação. Com apenas 2 meses de curso, junto a um amigo, fomos capazes de criar um site com informações em tempo real do COVID-19. Desafios e projetos práticos, nos proporcionam uma vivência real do dia a dia de uma pessoa desenvolvedora, atrelado às soft skills. Tenho a plena certeza que venho me tornando uma pessoa melhor!";
  it('Existem 6 relatorios', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .should('length', 6)
  });

  it('O primeiro card possui uma img', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .find('img')
              .should('have.src', cardImage)
  });

  it('O primeiro card possui o nome do aluno', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .find('h1')
              .should('contain', cardName)
  });

  it('O primeiro card possui a turma do aluno', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .find('p')
              .should('contain', 'Turma 05')
  });

  it('O primeiro card possui a contratação do aluno', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .find('h1')
              .should('contain', cardContract)
  });

  it('O primeiro card possui o relato do aluno', () => {
    cy.get('body')
      .find('section')
        .should('id', 'reports')
          .find('div')
            .find('p')
              .should('contain', cardDescription)
  });

  it('Ao clicar no botão "Quero me inscrever" é enviado para "pages/registration"', () => {
    cy.get('body')
        .find('section')
          .should('id', 'reports')
            .find('a')
              .contains('Quero me inscrever')
                .click()
    cy.url().should('includes', 'pages/registration.html')
  });

});