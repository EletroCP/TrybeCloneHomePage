describe('Testa se o componente "preFooter" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const preFooterImage = '../src/preFooterImage.png';
  const preFooterTitle = 'A sua conquista é a nossa. A Trybe só ganha quando você começar a ganhar.';
  const preFooterText = 'Confiamos tanto no seu sucesso profissional que você não precisa pagar nada até estar trabalhando e com uma remuneração de, pelo menos, R$ 3.000,00.';
  it('O componente possui uma imagem', () => {
    cy.get('section#prefooter')
        .find('img')
          .should('have.attr', 'src')
            .should('contain', preFooterImage)
  });

  it('O componente possui um titulo', () => {
    cy.get('section#prefooter')
        .find('h1')
          .should('contain', preFooterTitle)
  });

  it('O componente possui um texto descritivo', () => {
    cy.get('section#prefooter')
        .find('p')
          .should('contain', preFooterText)
  });

  it('O componente possui um link para o "modelo de sucesso compartilhado"', () => {
    cy.get('section#prefooter')
        .find('a')
          .should('have.attr', 'href')
            .should('contain', './msc-modelo-de-sucesso-compartilhado.html')
  });
});
