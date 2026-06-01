describe('site Pop Culture', () => {

  it('usuário navega pelo site com sucesso', () => {

    // 1. abre o site
    cy.visit('https://pop-culture.azurewebsites.net')

    // 2. valida que carregou
    cy.get('body').should('be.visible')

    // 3. valida que existe conteúdo principal
    cy.contains('body', 'Pop').should('exist')

    // 4. clica em um botão (ajuste o texto se precisar)
    cy.get('button').first().click()

    // 5. verifica se houve mudança de página ou ação
    cy.url().should('not.eq', 'https://pop-culture.azurewebsites.net')

    cy.get('img').each(($img) => {
  expect($img[0].naturalWidth).to.be.greaterThan(0)
})

  })

})