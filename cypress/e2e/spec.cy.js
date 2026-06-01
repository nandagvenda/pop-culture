describe('Cultura Pop', () => {

  Cypress.on('uncaught:exception', () => false)

  it('navegação', () => {

    // 1. abre home
    cy.visit('https://pop-culture.azurewebsites.net')

    cy.contains('RETROSPECTIVA POP').should('be.visible')

    // 2. clica no botão do quiz
    cy.contains('Fazer Quiz').click()

    // 3. volta para home (caso o quiz exista)
    cy.go('back')

    // 4. testa cards de décadas (1950s)
    cy.contains('Conhecer a Era').first().click()
    cy.url().should('include', '50') // valida navegação

    cy.go('back')

    // 5. 1960s
    cy.contains('1960s').click({ force: true })
    cy.url().should('include', '60')

    cy.go('back')

    // 6. 1970s
    cy.contains('1970s').click({ force: true })
    cy.url().should('include', '70')

  })

})