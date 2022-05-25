describe('Testa se todos os elementos do componente "partners" estão presentes', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const partners1 = '../src/partners/partner1.png';
  const partners2 = '../src/partners/partner2.png';
  const partners3 = '../src/partners/partner3.png';
  const partners4 = '../src/partners/partner4.png';

  it('O titulo do componente está presente', () => {
    cy.get('section#partners')
        .find('h1')
          .invoke('text')
            .should('contain', 'Empresas que estão de olho em Trybers')
  });

  it('O icone para trocar a imagem para esquerda está presente', () => {
    cy.get('section#partners')
        .find('p')
          .invoke('text')
            .should('contain', '<')
  });

  it('O icone para trocar a imagem para direita está presente', () => {
    cy.get('section#partners')
        .find('p')
          .invoke('text')
            .should('contain', '>')
  });

  it('Ao carregar a pagina a primeira imagem está caregada', () => {
    cy.get('section#partners')
        .find('img')
          .should('have.attr', 'src')
            .should('contain', partners1)
  });

  it('Ao clicar no icone "seta para esquerda" a imagem partner4 é exibida', () => {
    cy.get('section#partners')
            .find('p#leftArrow')
              .click()
    cy.get('section#partners')
        .find('img')
          .should('have.css', 'display', 'inherit')
            .should('contain', partners4)
  })

  it('Ao clicar no icone "seta para direita" a imagem partner2 é exibida', () => {
    cy.get('section#partners')
            .find('p#rigthArrow')
              .click()
    cy.get('section#partners')
        .find('img')
          .should('have.css', 'display', 'inherit')
            .should('contain', partners2)
  });

  it('O "dot nav " é funcional', () => {
    cy.get('section#partners')
        .find('div#dotNav')
          .find('p.dot3')
            .click()
    cy.get('section#partners')
        .find('img')
          .should('have.src', partners3)

  });

  it('O botão de "Quero ser uma empresa parceira" encaminha para a pagina correta', () => {
    cy.get('section#partners')
        .find('a')
          .invoke('text')
            .should('contain', 'Quero ser uma empresa parceira')
    cy.get('section#partners')
        .find('a')
          .click()
    cy.url().should('includes', 'empresas-parceiras.html');
  })
});
