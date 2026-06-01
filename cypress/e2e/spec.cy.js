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

    cy.contains('Fazer Quiz').should('be.visible').click()

    cy.url().should('include', 'quiz')
  })

  //1950s
  it('abre 1950s', () => {
    cy.visit(url)

    cy.get('a[href="1950s.html"]').click()

    cy.location('pathname').should('eq', '/1950s.html')
  })

  //1960s
  it('abre 1960s', () => {
    cy.visit(url)

    cy.get('a[href="1960s.html"]').click()

    cy.location('pathname').should('eq', '/1960s.html')
  })

  //1970s
  it('abre 1970s', () => {
    cy.visit(url)

    cy.get('a[href="1970s.html"]').click()

    cy.location('pathname').should('eq', '/1970s.html')
  })

  //1980s
  it('abre 1980s', () => {
    cy.visit(url)

    cy.get('a[href="1980s.html"]').click()

    cy.location('pathname').should('eq', '/1980s.html')
  })

  //1990s
  it('abre 1990s', () => {
    cy.visit(url)

    cy.get('a[href="1990s.html"]').click()

    cy.location('pathname').should('eq', '/1990s.html')
  })

  //2000s
  it('abre 2000s', () => {
    cy.visit(url)

    cy.get('a[href="2000s.html"]').click()

    cy.location('pathname').should('eq', '/2000s.html')
  })

  //2010s
  it('abre 2010s', () => {
    cy.visit(url)

    cy.get('a[href="2010s.html"]').click()

    cy.location('pathname').should('eq', '/2010s.html')
  })

  //2020s
  it('abre 2020s', () => {
    cy.visit(url)

    cy.get('a[href="2020s.html"]').click()

    cy.location('pathname').should('eq', '/2020s.html')
  })

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