describe('Verifica se o componente "formation" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const studantImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61a63619b1532da5f56f8e55_estudante-trybe.png';

  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('h1')
              .invoke('text')
                .should('contain', 'Conheça nossa formação')
  });

  it('O "modulo 1" possui o respectivo titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('spam')
              .invoke('text')
                .should('contain', 'Módulo 1:')
  });

  it('O "modulo 1" possui o respectivo texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('p')
              .invoke('text')
                .should('contain', 'Fundamentos de desenvolvimento web')
  });

  it('O "modulo 2" possui o respectivo titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('spam')
              .invoke('text')
                .should('contain', 'Módulo 2:')
  });

  it('O "modulo 2" possui o respectivo texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('p')
              .invoke('text')
                .should('contain', 'Desenvolvimento Front-end')
  });

  it('O "modulo 3" possui o respectivo titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('spam')
              .invoke('text')
                .should('contain', 'Módulo 3:')
  });

  it('O "modulo 3" possui o respectivo texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('p')
              .invoke('text')
                .should('contain', 'Desenvolvimento Back-end')
  });

  it('O "modulo 4" possui o respectivo titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('spam')
              .invoke('text')
                .should('contain', 'Módulo 4:')
  });

  it('O "modulo 4" possui o respectivo texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('p')
              .invoke('text')
                .should('contain', 'Ciência da Computação')
  });

  it('O componente possui uma imagem', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('img')
              .should('have.src', studantImage)
  });

  it('O componente possui um botão para o pdf da formação', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('button')
  });

  it('Ao cliclar no botão um spam abre', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'formation')
            .find('button')
              .click()
  });

  //testes ainda precisam ser escritos.
});
