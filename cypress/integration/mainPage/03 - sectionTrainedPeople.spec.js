describe('Verifica se a section "trainedPeople" possui os recursos corretos', () => {
  beforeEach(() => {
    cy.visit('pages/mainPage.html');
  });

  const trainedPeople = 'das pessoas formadas já estão trabalhando em até 3 meses após a formatura. Esse número é atualizado 90 dias após a conclusão de cada turma.';

  it('O componente possui um titulo', () => {
    cy.get('section.trainedPeopleSection')
        .find('h1')
          .should('have.text', '92%')

  });

  it('O componente possui o texto informativo', () => {
    cy.get('section.trainedPeopleSection')
        .find('p')
          .invoke('text')
            .should('includes', trainedPeople)
  });
});
