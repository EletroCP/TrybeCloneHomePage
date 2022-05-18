describe('Verifica se a section "hero" possui os recursos corretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  })
  const heroTitle = 'A porta de entrada para sua carreira em tecnologia'
  const heroText = 'Construímos nosso currículo com base no que o mercado de trabalho busca em profissionais de tecnologia. Com o Modelo de Sucesso Compartilhado, você tem a opção de começar a pagar apenas quando estiver trabalhando.'
  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'heroSection')
            .find('h1')
              .invoke('text')
                .should('includes', heroTitle)
  });
  it('O componente possui um texto de apresentação', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'heroSection')
          .find('p')
            .invoke('text')
              .should('includes', heroText)
  })
  it('Possui um botão de inscição', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'heroSection')
          .find('a')
  })
  it('O botão redireciona para a pagina de inscrição', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'heroSection')
          .find('p')
            .click()
    cy.url().should('includes', 'pages/inscrevase.html')
  })
  it('O componente possui a heroImage', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'heroSection')
          .find('img')
  })
});
