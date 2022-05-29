describe('Testa se o componente footer possui todos os elementos necessarios', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const logoTrybe = '../src/logoTrybe.svg';
  const bCorp = 'https://www.bcorporation.net/find-a-b-corp/company/trybe/';
  const bCorpImage = '../src/seloEmpresa-b.svg';
  const instaSrc = '../src/icons/instaIcon.svg';
  const faceSrc = '../src/icons/faceIco.svg';
  const twitterSrc = '../src/icons/twitterIco.svg';
  const linkedInSrc = '../src/icons/linkedInIco.svg';
  const youtubeSrc = '../src/icons/youtubeIco.svg';
  
  it('O componente possui todos os links', () => {
    cy.get('footer')
        .find('a')
          .should('have.length', 13)
  });
  
  it('O componente possui o logo da trybe', () => {
    cy.get('footer')
        .find('img')
          .should('have.attr', 'src')
          .should('contain', logoTrybe)
  });

  it('O componente possui um link para bcorporation.net', () => {
    cy.get('footer')
        .find('div#logos')
          .find('a')
            .should('have.attr', 'href')
              .should('contain', bCorp)
    cy.get('footer')
        .find('div#logos')
          .find('a')
            .find('img')
              .should('have.attr', 'src')
                .should('contain', bCorpImage)
  });

  it('O componente possui um link para a pagina "Trabalhe conosco"', () => {
    cy.get('footer')
        .find('a')
          .contains('Trabalhe conosco')
            .should('have.attr', 'href')
              .should('includes', './trabalhe-conosco.html')
  });

  it('O componente possui um link para a pagina "Ajuda"', () => {
    cy.get('footer')
        .find('a')
          .contains('Fale com a gente')
            .should('have.attr', 'href')
              .should('includes', 'nãoImplementado')
  });

  it('O componente possui um link para a pagina "empresas-parceiras"', () => {
    cy.get('footer')
        .find('a')
          .contains('Quero ser empresa parceira')
            .should('have.attr', 'href')
              .should('includes', './empresas-parceiras.html')
  });

  it('O componente possui um link para a pagina "blog"', () => {
    cy.get('footer')
        .find('a')
          .contains('Blog')
            .should('have.attr', 'href')
              .should('includes', './blog.html')
  });

  it('O componente possui um link para a pagina do instagram', () => {
    cy.get('footer')
        .find('a#logoInsta')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', instaSrc)
  });

  it('O componente possui um link para a pagina do facebook', () => {
    cy.get('footer')
        .find('a#logoFace')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', faceSrc)
  });

  it('O componente possui um link para a pagina do twitter', () => {
    cy.get('footer')
        .find('a#logoTwitter')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', twitterSrc)
  });

  it('O componente possui um link para a pagina do linkedIn', () => {
    cy.get('footer')
        .find('a#logoLinkedIn')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', linkedInSrc)
  });

  it('O componente possui um link para a pagina do youtube', () => {
    cy.get('footer')
        .find('a#logoYoutube')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', youtubeSrc)
  });

  it('O componente possui o nome da empresa e seu CNPJ', () => {
    cy.get('footer')
        .find('p')
          .invoke('text')  
            .should('contain', 'Trybe Desenvolvimento de Software LTDA  |  CNPJ 34.389.271/0001-00')
  });
});
