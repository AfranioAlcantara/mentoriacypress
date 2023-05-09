describe('testes validos na tela de login', () => {
    it('teste de login valido dados validos', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('.app_logo').should('have.text','Swag Labs')
    });
});