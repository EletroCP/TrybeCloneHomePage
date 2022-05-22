describe('Testa se o componente footer possui todos os elementos necessarios', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const logoTrybe = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca4630bc5747_Logo.svg';
  const bCorp = 'https://www.bcorporation.net/en-us/find-a-b-corp/company/trybe';
  const bCorpImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/620cf1098a5cb1366149dc35_selo-empresa-b.svg';
  const instaSrc = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca3bb9bc5788_Vector.svg';
  const faceSrc = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca23e9bc5789_facebook.svg';
  const twitterSrc = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca33debc578a_twitter.svg';
  const linkedInSrc = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca4311bc578b_linkedin.svg';
  const youtubeSrc = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca281fbc578c_youtube.svg';
  
  it('O componente possui todos os links', () => {
    cy.get('footer')
        .find('a')
          .should('have.lengt', 14)
  });
  
  it('O componente possui o logo da trybe', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', logoTrybe)
  });

  it('O componente possui um link para bcorporation.net', () => {
    cy.get('footer')
        .find('a')
          .should('have.href', bCorp)
            .find('img')
              .should('have.src', bCorpImage)
  });

  it('O componente possui um link para a pagina "Trabalhe conosco"', () => {
    cy.get('footer')
        .find('a')
          .should('have.value', 'Trabalhe conosco')
            .click()
    cy.url().should('includes', 'pages/trabalhe-conosco.html')
  });

  it('O componente possui um link para a pagina "Ajuda"', () => {
    cy.get('footer')
        .find('a')
          .should('have.value', 'Fale com a gente')
            .click()
    cy.url().should('includes', 'nãoImplementado')
  });

  it('O componente possui um link para a pagina "empresas-parceiras"', () => {
    cy.get('footer')
        .find('a')
          .should('have.value', 'Quero ser empresa parceira')
            .click()
    cy.url().should('includes', 'pages/empresas-parceiras.html')
  });

  it('O componente possui um link para a pagina "blog"', () => {
    cy.get('footer')
        .find('a')
          .should('have.value', 'Quero ser empresa parceira')
            .click()
    cy.url().should('includes', 'pages/blog.html')
  });

  it('O componente possui um link para a pagina do instagram', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', instaSrc)
            .click()
    cy.url().should('includes', 'https://www.instagram.com/betrybe/')
  });

  it('O componente possui um link para a pagina do facebook', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', faceSrc)
            .click()
    cy.url().should('includes', 'https://www.facebook.com/betrybe')
  });

  it('O componente possui um link para a pagina do twitter', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', twitterSrc)
            .click()
    cy.url().should('includes', 'https://twitter.com/betrybe')
  });

  it('O componente possui um link para a pagina do linkedIn', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', linkedInSrc)
            .click()
    cy.url().should('includes', 'https://www.linkedin.com/school/betrybe/')
  });

  it('O componente possui um link para a pagina do youtube', () => {
    cy.get('footer')
        .find('img')
          .should('have.src', youtubeSrc)
            .click()
    cy.url().should('includes', 'https://www.youtube.com/channel/UCZeN5eLUwiIyMaQjKR_ydVg?sub_confirmation=1')
  });

  it('O componente possui o nome da empresa e seu CNPJ', () => {
    cy.get('footer')
        .find('p')  
          .should('have.value', 'Trybe Desenvolvimento de Software LTDA  |  CNPJ 34.389.271/0001-00')
  });
});
