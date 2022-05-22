descrive('Testa se todos os elementos do componente "partners" estão presentes', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const partners1 = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/62324c77a3b8d6a446a1e06e_1.png';
  const partners2 = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/62324c777b0fd04c6e3db72b_2.png';
  const partners3 = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/6257283deb0e9d1ed745c97e_3.png';
  const partners4 = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/6257284c5593d463f133f10d_4.png';

  it('O titulo do componente está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('h1')
              .should('have.value', 'Empresas que estão de olho em Trybers')
  });

  it('O icone para trocar a imagem para esquerda está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('img')
              .should('have.src', 'pendente')
  });

  it('O icone para trocar a imagem para direita está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('img')
              .should('have.src', 'pendente2')
  });

  it('Ao carregar a pagina a primeira imagem está caregada', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('img')
              .should('have.src', partners1)
  });

  it('Ao clicar no icone "seta para esquerda" a imagem partner4 é exibida', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('p')
              .should('have.class', 'leftArrow')
                .click()
                  .find('img')
                    .should('have.src', partners4)
  })

  it('Ao clicar no icone "seta para direita" a imagem partner4 é exibida', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('p')
              .should('have.class', 'rightArrow')
                .click()
                  .find('img')
                    .should('have.src', partners2)
  });

  it('O "dot nav " é funcional', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('div')
              .should('have.class', 'dotNav')
                .find('div')
                  .should('have.id', 'dot3')
                    .click()
                      .find('img')
                        .should('have.src', partners3)

  });

  it('O botão de "Quero ser uma empresa parceira" encaminha para a pagina correta', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'partners')
            .find('a')
              .should('have.value', 'Quero ser empresa parceira')
                .click()
    cy.url().should('includes', 'pages/trabalhe-conosco.html');
  })
});
