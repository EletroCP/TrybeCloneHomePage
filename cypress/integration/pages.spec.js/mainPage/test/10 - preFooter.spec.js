descrive('Testa se o componente "preFooter" possui todos os elementos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const preFooterImage = 'https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61a6362ac5e4ff25cbd9aca8_footer.png';
  const preFooterTitle = 'A sua conquista é a nossa. A Trybe só ganha quando você começar a ganhar.';
  const preFooterText = 'Confiamos tanto no seu sucesso profissional que você não precisa pagar nada até estar trabalhando e com uma remuneração de, pelo menos, R$ 3.000,00.';
  it('O componente possui uma imagem', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'preFooter')
            .find('img')
              .should('have.src', preFooterImage)
  });

  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'preFooter')
            .find('h1')
              .should('have.value', preFooterTitle)
  });

  it('O componente possui um texto descritivo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'preFooter')
            .find('p')
              .should('have.value', preFooterText)
  });

  it('O componente possui um link para o "modelo de sucesso compartilhado"', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'preFooter')
            .find('a')
              .should('have.href', 'page/msc-modelo-de-sucesso-compartilhado.html')
  });
});
