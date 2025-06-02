describe('Pagina de Cadastros', () => {
  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.get('[data-test="register-button"]').click();
    cy.cadastro("nome do Usuario", "andrius@email.com", "Senha123");
  })
})

