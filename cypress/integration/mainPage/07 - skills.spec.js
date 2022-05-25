describe('O component "skills" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const tagIcon = '../src/tagIcon2.svg';
  const heartIcon = '../src/heartIco.svg';
  const paperPlane = '../src/papperPlaneIco.svg';
  
  it('O componente possui um titulo', () => {
    cy.get('section#skills')
        .find('h1')
          .should('have.text', 'Durante toda a formação')
  });

  it('O componente possui a imagem de "tag"', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#tag')
            .find('img')
              .should('have.attr', 'src')
                .should('contain', tagIcon)
  });

  it('O componente possui a imagem de "coração"', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#heart')
            .find('img')
              .should('have.attr', 'src')
                .should('contain', heartIcon)
  });

  it('O componente possui a imagem de "aviãozinho"', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#plane')
            .find('img')
              .should('have.attr', 'src')
                .should('contain', paperPlane)
  });

  it('O texto de "desenvolvimento" está presente', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#tag')
            .find('p')
              .invoke('text')
                .should('contain', 'Desenvolvimento de software na vida real');
  });

  it('O texto de "skill" está presente', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#heart')
            .find('p')
              .invoke('text')
                .should('contain', 'Soft skills');
  });

  it('O texto de "metodologias" está presente', () => {
    cy.get('section#skills')
        .find('div#icons')
          .find('div#plane')
            .find('p')
              .invoke('text')
                .should('contain', 'Metodologias ágeis');
  });
});
