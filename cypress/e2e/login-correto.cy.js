describe('Pagina de Login', () => {
 
    beforeEach(() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app");
        cy.get('[data-test="login-button"]').click();

    })
 
    it('Informar email e senha do usuário e entrar ', () => {
        
        cy.login("ana@email.com", "Senha123");
        
        

  })
})