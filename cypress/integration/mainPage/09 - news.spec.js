describe('Verifica se o componente "news", possui os componentes coretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const g1News = 'https://g1.globo.com/economia/pme/pequenas-empresas-grandes-negocios/noticia/2020/03/22/escola-de-programacao-banca-estudos-de-alunos-e-so-recebe-se-ele-conseguir-trabalho.ghtml';
  const g1Image = '../src/news/g1.svg';
  const exameNews = 'https://exame.com/revista-exame/temporada-de-caca-aos-devs/';
  const exameImage = '../src/news/exame.svg';
  const istoeNews = 'https://www.istoedinheiro.com.br/startup-que-forma-desenvolvedor-e-cobra-apos-aluno-conseguir-emprego-capta-r-42-milhoes/';
  const istoeImage = '../src/news/isoe.svg';
  const folhaSPNews = 'https://www1.folha.uol.com.br/mpme/2020/01/empresarios-contam-como-adaptaram-ao-brasil-ideias-de-negocio-do-exterior.shtml';
  const folhaSPImage = '../src/news/fdsp.svg';
  
  it('O componente possui um titulo', () => {
    cy.get('nav#news') 
        .find('h1')
          .invoke('text')
            .should('contain', 'Confira o que andam falando sobre nós')
  });

  it('Possui 4 links', () => {
    cy.get('nav#news')
        .find('a')
          .should('have.length', 4)
  });

  it('O primeiro link possui a imagem e link correto', () => {
    cy.get('nav#news')
        .find('a#g1')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', g1Image)
    cy.get('nav#news')
        .find('a#g1')
          .should('have.attr', 'href')
            .should('contain', g1News)
  });

  it('O segundo link possui a imagem e link correto', () => {
    cy.get('nav#news')
        .find('a#exame')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', exameImage)
    cy.get('nav#news')
        .find('a#exame')
          .should('have.attr', 'href')
            .should('contain', exameNews)
  });

  it('O terceiro link possui a imagem e link correto', () => {
    cy.get('nav#news')
        .find('a#istoe')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', istoeImage)
    cy.get('nav#news')
        .find('a#istoe')
          .should('have.attr', 'href')
            .should('contain', istoeNews)
  });

  it('O quarto link possui a imagem e link correto', () => {
    cy.get('nav#news')
        .find('a#fdsp')
          .find('img')
            .should('have.attr', 'src')
              .should('contain', folhaSPImage)
    cy.get('nav#news')
        .find('a#fdsp')
          .should('have.attr', 'href')
            .should('contain', folhaSPNews)
  });
});
