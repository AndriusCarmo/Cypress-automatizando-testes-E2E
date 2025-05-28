describe('Pagina de Login', () => {
 
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app");
        cy.get('[data-test="login-button"]').click();

    })
 
    it('Informar email e senha do usuário e entrar ', () => {
        cy.get('[data-test="input-loginEmail"]').type("ana@email.com");
        cy.get('[data-test="input-loginPassword"]').type("Senha123")
        cy.get('[data-test="submit-button"]').click();

  })
})