describe('Verifica se o componente "formation" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const studantImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61a63619b1532da5f56f8e55_estudante-trybe.png';

  it('O componente possui um titulo', () => {
    cy.get('section.formation')
        .find('h1')
          .invoke('text')
            .should('contain', 'Conheça nossa formação')
  });

  it('O "modulo 1" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('spam#method1')
            .should('contain', 'Módulo 1:')
  });

  it('O "modulo 1" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
         .find('p#methodsTxt1')
          .invoke('text')
            .should('contain', 'Fundamentos de desenvolvimento web')
  });

  it('O "modulo 2" possui o respectivo titulo', () => {
    cy.get('section.formation')
    .find('div#methods')
      .find('spam#method2')
        .should('contain', 'Módulo 2:')
  });

  it('O "modulo 2" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
         .find('p#methodsTxt2')
          .invoke('text')
            .should('contain', 'Desenvolvimento Front-end')
  });

  it('O "modulo 3" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('spam#method3')
            .should('contain', 'Módulo 3:')
  });

  it('O "modulo 3" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
         .find('p#methodsTxt3')
          .invoke('text')
            .should('contain', 'Desenvolvimento Back-end')
  });

  it('O "modulo 4" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('spam#method1')
            .should('contain', 'Módulo 1:')
  });

  it('O "modulo 4" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
         .find('p#methodsTxt4')
          .invoke('text')
            .should('contain', 'Ciência da Computação')
  });

  it('O componente possui uma imagem', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', studantImage)
  });
  
  it('O componente possui um botão para o pdf da formação', () => {
    cy.get('section.formation')
        .find('div#methods')
            .find('p#getFormation')
  });
  
  it('Ao cliclar no botão um spam abre', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('p#getFormation')
            .click()
  });//testes ainda precisam ser escritos.
});
