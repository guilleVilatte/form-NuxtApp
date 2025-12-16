describe('Formulario multi-step - happy path', () => {
  it('permite completar el formulario completo', () => {
    cy.visit('')
    cy.window().its('__NUXT__').should('exist')
    // Step 1
    cy.contains('Pon comida de verdad en el bol de tu perro')

    cy.get('[data-testid="autocomplete-input"]')
    cy.wait(1000)

    cy.get('[data-testid="button"]').should('not.be.disabled').click()
    cy.wait(1000)
    cy.get('[data-testid="button"]').should('not.be.disabled').click()
    // Step 2
    cy.contains('¿Cómo se llama tus perrete?')
    cy.get('input').type('Toby')
    cy.contains('Continuar').click()

    // // Step 3
    cy.contains('Macho').click()
    cy.contains('¿Está esterilizado/a?')
    cy.contains('Si').click()
    cy.contains('Continuar').click()

    // // Step final
    // cy.contains('Resumen')
    // cy.contains('Labrador')
    // cy.contains('Toby')
  })
})
