describe('Testa se o componente "methods", possui todos os elementos necessarios', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html')
  });

  const methodTitle = 'Nosso trabalho é te ajudar a conseguir o seu';
  const methodSubtitle = 'Ensino de qualidade é ensino completo.';

  const firstHoverIcon = 'src="https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca6bd5bc5755_web-programming%202.svg"';
  const firstHoverText = 'Ensinamos a programar';
  const firstHoverMainText = 'Nosso currículo é desenhado em parceria com pessoas referência em tecnologia e as empresas mais buscadas para se trabalhar do mercado.';
  
  const secondHoverIcon = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca89c3bc5756_001-brain%202.svg';
  const secondHoverText = 'Ensinamos a aprender';
  const secondHoverMainText = 'Nossas metodologias ativas garantem que você aprenda a aprender colocando a mão na massa.';
  
  const thirdHoverIcon = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca3399bc5754_001-network%202.svg';
  const thirdHoverText = 'Ensinamos a trabalhar';
  const thirdHoverMainText = 'Ensinamos tudo que o mercado busca: conhecimento em programação e soft skills.';
  
  it('O componente "methods" possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('h2')
              .should('contain', methodTitle);
  });

  it('O componente "methods" possui um sub titulo', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'methods')
          .find('p')
            .should('contain', methodSubtitle);
  });

  it('O componente "firstHover" possui uma imagem', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'firstHover')
                .find('img')
                  .should('have.src', firstHoverIcon)
  });

  it('O componente "firstHover" possui um texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'firstHover')
                .find('p')
                  .should('contain', firstHoverText)
  });

  it('O texto principal referente ao componente "firstHover" é exibido', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'firstHoverMainText')
                .invoke('text')
                  .should('have.src', firstHoverMainText)
  });

  it('O componente "secondHover" possui uma imagem', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'secondHover')
                .find('img')
                  .should('have.src', secondHoverIcon)
  });

  it('O componente "secondHover" possui um texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'secondHover')
                .find('p')
                  .should('contain', secondHoverText)
  });

  it('O texto referente ao componente "secondHover" é exibido', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'secondHoverMainText')
                .trigger('mousehover')
                  .invoke('text')
                    .should('have.src', secondHoverMainText)
  });

  it('O componente "thirdHover" possui uma imagem', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'thirdHover')
                .find('img')
                  .should('have.src', thirdHoverIcon)
  });

  it('O componente "thirdHover" possui um texto', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'thirdHover')
                .find('p')
                  .should('contain', thirdHoverText)
  });

  it('O texto referente ao componente "thirdHover" é exibido', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'methods')
            .find('div')
              .should('have.class', 'thirdHoverMainText')
                .trigger('mousehover')
                  .invoke('text')
                    .should('have.src', thirdHoverMainText)
  });
});
