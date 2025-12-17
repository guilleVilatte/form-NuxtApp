describe('multi-step form', () => {
  it('permite completar el formulario completo', () => {
    cy.visit('')
    cy.window().its('__NUXT__').should('exist')
    // Step 1
    cy.contains('Pon comida de verdad en el bol de tu perro')
    cy.wait(5000)
    cy.get('[data-testid="autocomplete-input"]').click()
    cy.contains('Labrador').should('be.visible').click()
    cy.get('[data-testid="button"]').should('not.be.disabled').click()

    // Step 2
    cy.contains('¿Cómo se llama tus perrete?')
    cy.get('input').type('Toby')
    cy.contains('Continuar').click()

    // Step 3
    cy.contains('¡Queremos conocer a Toby!')
    cy.contains('Macho').click()
    cy.contains('¿Está esterilizado/a?')
    cy.contains('Si').click()
    cy.contains('Continuar').click()

    // Step 4
    cy.contains('¿Cuándo nació Toby?')
    cy.get('[data-testid="autocomplete-input"]').first().click()
    cy.contains('2023').should('be.visible').click()
    cy.get('[data-testid="autocomplete-input"]').eq(1).click()
    cy.contains('Marzo').should('be.visible').click()
    cy.contains('Continuar').click()

    // Step 5
    cy.contains('¿Qué silueta representa mejor a Toby?')
    cy.get('input.w-1\\/2').click()
    cy.get('#weight').click()
    cy.get('#weight').type('22')
    cy.contains('Continuar').click()

    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="extra-question"]').length > 0) {
        // La pregunta aparece
        // Step 6
        cy.contains('¿Cuál es el nivel de actividad de Toby?')
        cy.get('input.w-1\\/2').click()
        cy.contains('Continuar').click()
      } else {
        // La pregunta no aparece
        cy.log('Pregunta extra no mostrada, continuar flujo normal')
      }
    })

    // Step 7
    cy.contains('¿Tiene Toby alguna patología?')
    cy.get('div.border button:nth-child(1)').click()
    cy.get('[data-testid="autocomplete-input"]').click()
    cy.get('[data-testid="autocomplete-list"] li:nth-child(1)').click()
    cy.contains('Continuar').click()

    // Step 8
    cy.contains('¿Qué crítico gastronómico es tu perro?')
    cy.contains('Continuar').click()

    // Step 9
    cy.contains('¡El menú especial para Toby está casi listo!')
    cy.get('input').first().focus().type('toby@gmail.com')
    cy.get('input').eq(1).focus().type('666 666 666')
    cy.contains('Ver el menú de Toby').click()
  })
})
