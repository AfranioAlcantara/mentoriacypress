const TelaInicial = require ('../../../../support/ELEMENTOS/GlobalElements').ELEMENTS

describe('testes validos na tela de login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('teste 01 login valido dados validos', () => {
        
        cy.login(Cypress.env('usuario0'),Cypress.env('senha'))

        cy.get(TelaInicial.bannerSwagLabs).should('have.text','Swag Labs')
    });
    it('teste 02 validação imagem dos itens da loja', () => {
        cy.login(Cypress.env('usuario0'),Cypress.env('senha'))

        const mochila = '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'
        cy.get(TelaInicial.mochila).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(mochila)
        })
        const bick = '/static/media/bike-light-1200x1500.37c843b0.jpg'
        cy.get(TelaInicial.bick).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(bick)
        })
        const jaqueta = '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg'
        cy.get(TelaInicial.jaquetaMoleton).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(jaqueta)
        })
        const bebe = '/static/media/red-onesie-1200x1500.2ec615b2.jpg'
        cy.get(TelaInicial.roupaBebe).invoke('attr','src').then((imagemExibida)=>{
            expect(imagemExibida).to.eq(bebe)
        })

    });
    it('teste 03 login com usuario bloqueado', () => {
        
        cy.login(Cypress.env('usuario01'),Cypress.env('senha'))

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Sorry, this user has been locked out.')
    });
    it('teste 04 tentativa de login com campo email vasio', () => {
        
        cy.login('{insert}',Cypress.env('senha'))

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Username is required')
    });
    it('teste 05 tentativa de login com campo senha vasio', () => {
        
        cy.login(Cypress.env('usuario0'),'{insert}')

        cy.get(TelaInicial.mensagemDeErro).should('have.text','Epic sadface: Password is required')
    });
    
});