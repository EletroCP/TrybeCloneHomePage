description('Verifica se o componente "news", possui os componentes coretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const g1News = 'https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/03/22/escola-de-programacao-banca-estudos-de-alunos-e-so-recebe-se-ele-conseguir-trabalho.ghtml';
  const g1Image = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61b35efd71ec3b81c42b9828_logo-globo.svg';
  const exameNews = 'https://exame.com/revista-exame/temporada-de-caca-aos-devs/';
  const exameImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61b35f0a40d0899804879ab9_logo-exame.svg';
  const istoeNews = 'https://www.istoedinheiro.com.br/startup-que-forma-desenvolvedor-e-cobra-apos-aluno-conseguir-emprego-capta-r-42-milhoes/';
  const istoeImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61b35f18d70d73bf82bb03d6_logo-istoe-dinheiro.svg';
  const folhaSPNews = 'https://www1.folha.uol.com.br/mpme/2020/01/empresarios-contam-como-adaptaram-ao-brasil-ideias-de-negocio-do-exterior.shtml';
  const folhaSPImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61b35f2f33b80811e1a6d006_logo-folha-de-sao-paulo.svg';
  
  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'news')
            .find('h1')
              .should('have.value', 'Confira o que andam falando sobre nós')
  });

  it('Possui 4 links', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'news')
            .find('a')
              .should('have.length', 4)
  });

  it('O primeiro link possui a imagem e link correto', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'news')
          .find('a')
            .should('have.href', g1News)
              .find('img')
                .should('have.src', g1Image)
                  .click()
    cy.url().should('contain', g1News)
  });

  it('O segundo link possui a imagem e link correto', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'news')
          .find('a')
            .should('have.href', exameNews)
              .find('img')
                .should('have.src', exameImage)
                  .click()
    cy.url().should('contain', exameNews)
  });

  it('O terceiro link possui a imagem e link correto', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'news')
          .find('a')
            .should('have.href', istoeNews)
              .find('img')
                .should('have.src', istoeNews)
                  .click()
    cy.url().should('contain', istoeNews)
  });

  it('O quarto link possui a imagem e link correto', () => {
    cy.get('body')
      .find('section')
        .should('have.class', 'news')
          .find('a')
            .should('have.href', folhaSPNews)
              .find('img')
                .should('have.src', folhaSPImage)
                  .click()
    cy.url().should('contain', folhaSPNews)
  });
});
