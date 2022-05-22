describe('Testa se o componente "methods", possui todos os elementos necessarios', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html')
  });

  const methodTitle = 'Nosso trabalho é te ajudar a conseguir o seu';
  const methodSubtitle = 'Ensino de qualidade é ensino completo.';

  const firstHoverIcon = '../src/tagIco.svg';
  const firstHoverText = 'Ensinamos a programar';
  const firstHoverMainText = 'Nosso currículo é desenhado em parceria com pessoas referência em tecnologia e as empresas mais buscadas para se trabalhar do mercado.';
  
  const secondHoverIcon = '../src/brainIco.svg';
  const secondHoverText = 'Ensinamos a aprender';
  const secondHoverMainText = 'Nossas metodologias ativas garantem que você aprenda a aprender colocando a mão na massa.';
  
  const thirdHoverIcon = '../src/conectionIcon.svg';
  const thirdHoverText = 'Ensinamos a trabalhar';
  const thirdHoverMainText = 'Ensinamos tudo que o mercado busca: conhecimento em programação e soft skills.';
  
  it('O componente "methods" possui um titulo', () => {
    cy.get('section.methods')
        .find('h2')
          .should('contain', methodTitle);
  });

  it('O componente "methods" possui um sub titulo', () => {
    cy.get('section.methods')     
        .find('p')
          .should('contain', methodSubtitle);
  });

  it('O componente "firstHover" possui uma imagem', () => {
    cy.get('section.methods')
        .find('div.firstHover')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', firstHoverIcon)
  });

  it('O componente "firstHover" possui um texto', () => {
    cy.get('section.methods')
        .find('div.firstHover')
          .find('p')
            .should('contain', firstHoverText)
  });

  it('O texto principal referente ao componente "firstHover" é exibido', () => {
    cy.get('section.methods')
        .find('p#firstHoverInfo')
          .invoke('text')
            .should('includes', firstHoverMainText)
  });

  it('O componente "secondHover" possui uma imagem', () => {
    cy.get('section.methods')
        .find('div.secondHover')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', secondHoverIcon)
  });

  it('O componente "secondHover" possui um texto', () => {
    cy.get('section.methods')
        .find('div.secondHover')
          .find('p')
            .should('contain', secondHoverText)
  });

  it('O texto referente ao componente "secondHover" é exibido', () => {
    cy.get('section.methods')
        .find('div.secondHover')
          .trigger('mousehover')
    cy.get('section.methods')
        .find('p#secondHoverInfo')
          .invoke('text')
            .should('includes', secondHoverMainText)
  });

  it('O componente "thirdHover" possui uma imagem', () => {
    cy.get('section.methods')
        .find('div.thirdHover')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', thirdHoverIcon)
  });

  it('O componente "thirdHover" possui um texto', () => {
    cy.get('section.methods')         
        .find('div.thirdHover')
          .find('p')
            .should('contain', thirdHoverText)
  });

  it('O texto referente ao componente "thirdHover" é exibido', () => {
    cy.get('section.methods')
        .find('div.thirdHover')
          .trigger('mousehover')
    cy.get('section.methods')
        .find('p#thirdHoverInfo')
          .invoke('text')
            .should('includes', thirdHoverMainText)
  });
});
