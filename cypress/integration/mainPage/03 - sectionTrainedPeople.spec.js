describe('Verifica se a section "trainedPeople" possui os recursos corretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const trainedPeople = 'das pessoas formadas já estão trabalhando em até 3 meses após a formatura. Esse número é atualizado 90 dias após a conclusão de cada turma.';

  it('O componente possui um titulo', () => {
    cy.get('body')
        .find('section')
          .should('have.class', 'trainedPeopleSection')
            .find('h1')
              .should('contain', '92%')
  });

  it('O componente possui o texto informativo', () => {
    cy.ge('body')
        .find('section')
          .should('have.class', 'trainedPeopleSection')
            .find('p')
              .should('contain', trainedPeople)
  });
});
