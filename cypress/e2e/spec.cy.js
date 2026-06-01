describe('Pop Culture site', () => {

  it('carrega a página', () => {
    cy.visit('https://pop-culture.azurewebsites.net')
    cy.get('body').should('be.visible')
  })

  it('tem título', () => {
    cy.visit('https://pop-culture.azurewebsites.net')
    cy.title().should('not.be.empty')
  })

  it('imagens não estão quebradas', () => {
    cy.visit('https://pop-culture.azurewebsites.net')

    cy.get('img').each(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })

})