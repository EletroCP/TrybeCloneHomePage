describe('O component "skills" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const tagIcon = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca328ebc575c_Group.svg';
  const heartIcon = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9caca24bc575d_Vector.svg';
  const paperPlane = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca5464bc575b_Group-1.svg';
  
  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('h1')
              .should('have.value', 'Durante toda a formação')
  });

  it('O componente possui a imagem de "tag"', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('img')
              .should('have.src', tagIcon)
  });

  it('O componente possui a imagem de "coração"', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('img')
              .should('have.src', heartIcon)
  });

  it('O componente possui a imagem de "aviãozinho"', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('img')
              .should('have.src', paperPlane)
  });

  it('O texto de "desenvolvimento" está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('p')
              .should('have.value', 'Desenvolvimento de software na vida real');
  });

  it('O texto de "skill" está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('p')
              .should('have.value', 'Soft skills');
  });

  it('O texto de "metodologias" está presente', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'skills')
            .find('p')
              .should('have.value', 'Metodologias ágeis');
  });
});
