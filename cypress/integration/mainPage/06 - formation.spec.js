describe('Verifica se o componente "formation" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const studantImage = '../src/methodsImage.png';

  it('O componente possui um titulo', () => {
    cy.get('section.formation')
        .find('h1')
          .invoke('text')
            .should('contain', 'Conheça nossa formação')
  });

  it('O "modulo 1" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method1')
            .find('h1')
              .should('contain', 'Módulo 1:')
  });

  it('O "modulo 1" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method1')
            .find('p')
              .invoke('text')
                .should('contain', 'Fundamentos de desenvolvimento web')
  });

  it('O "modulo 2" possui o respectivo titulo', () => {
    cy.get('section.formation')
    .find('div#methods')
      .find('span#method2')
        .find('h1')
          .should('contain', 'Módulo 2:')
  });

  it('O "modulo 2" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method2')
            .find('p')
              .invoke('text')
                .should('contain', 'Desenvolvimento Front-end')
  });

  it('O "modulo 3" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method3')
            .find('h1')
              .should('contain', 'Módulo 3:')
  });

  it('O "modulo 3" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
         .find('span#method3')
          .find('p')
            .invoke('text')
              .should('contain', 'Desenvolvimento Back-end')
  });

  it('O "modulo 4" possui o respectivo titulo', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method4')
            .find('h1')
              .should('contain', 'Módulo 4:')
  });

  it('O "modulo 4" possui o respectivo texto', () => {
    cy.get('section.formation')
        .find('div#methods')
          .find('span#method4')
            .find('p')
              .invoke('text')
                .should('contain', 'Ciência da Computação')
  });

  it('O componente possui uma imagem', () => {
    cy.get('section.formation')
        .find('img')
          .should('have.attr', 'src')
            .should('contain', studantImage)
  });
  
  it('O componente possui um botão para o pdf da formação', () => {
    cy.get('section.formation')
        .find('p#getFormation')
  });
  
  it('Ao cliclar no botão um span abre', () => {
    cy.get('section.formation')
        .find('p#getFormation')
          .click()
  });//testes ainda precisam ser escritos.
});
