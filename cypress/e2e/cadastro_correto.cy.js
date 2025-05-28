describe('Pagina de Cadastros', () => {
  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Cadastrar").click();
    cy.get('[data-test="input-name"]').type("nome do Usuario");
    cy.get('[data-test="input-email"]').type("andrius@email.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.contains("button", "Cadastrar").click();
  })
})
