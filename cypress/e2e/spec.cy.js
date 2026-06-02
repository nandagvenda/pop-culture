describe('Pop Culture', () => {

  Cypress.on('uncaught:exception', () => false)

  const url = 'https://pop-culture.azurewebsites.net'

  //Página inicial
  it('carrega a página inicial', () => {
    cy.visit(url)

    cy.get('body').should('be.visible')
    cy.contains('RETROSPECTIVA POP').should('be.visible')
  })

  describe('Quiz completo', () => {

  it('responde todas as perguntas e vê resultado', () => {

    cy.visit('https://pop-culture.azurewebsites.net/quiz.html')

    // pergunta 1
    cy.get('.btn-opcao').first().click()

    // pergunta 2
    cy.get('.btn-opcao').first().click()

    // pergunta 3
    cy.get('.btn-opcao').first().click()

    // pergunta 4
    cy.get('.btn-opcao').first().click()

    // pergunta 5
    cy.get('.btn-opcao').first().click()

    // resultado aparece
    cy.get('#resultado-container').should('be.visible')

    cy.get('#resultado-decada').should('exist')

    cy.get('#resultado-texto').should('not.be.empty')

  })

})

  //QUIZ
  it('abre o quiz corretamente', () => {
    cy.visit(url)



const pages = [
  '/',
  '/1950s.html',
  '/1960s.html',
  '/1970s.html',
  '/1980s.html',
  '/1990s.html',
  '/2000s.html',
  '/2010s.html',
  '/2020s.html'
]

pages.forEach((page) => {

  it(`imagens carregam em ${page}`, () => {
    cy.visit(`https://pop-culture.azurewebsites.net${page}`)

    cy.get('img').each(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })

})


})